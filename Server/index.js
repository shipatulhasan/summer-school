const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
require('dotenv').config()
const jwt = require('jsonwebtoken')

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000

// middlewares
app.use(cors())
app.use(express.json())

// Database Connection
const uri = process.env.DB_URI
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
})

const verifyJWT = (req, res, next) => {
  const auth = req.headers.authorization
  if (!auth) {
    return res.status(401).send({ message: 'Unauthorized access' })
  }
  const token = auth.split(' ')[1]
  jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
    if (err) {
      return res.status(403).send({ message: 'forbidden' })
    }
    req.decoded = decoded
    next()
  })
}

const run = async () => {
  const usersCollection = client.db('musicSchoolDB').collection('users')
  const productsCollection = client.db('musicSchoolDB').collection('products')
  const classesCollection = client.db('musicSchoolDB').collection('classes')
  const bookingsCollection = client.db('musicSchoolDB').collection('bookings')
  const advertiseCollection = client
    .db('musicSchoolDB')
    .collection('addvertise')
  const paymentsCollection = client.db('musicSchoolDB').collection('payments')

  try {
    // verification

    const verifyAdmin = async (req, res, next) => {
      const decodedEmail = req.decoded.email
      const query = { email: decodedEmail }
      const user = await usersCollection.findOne(query)
      if (user?.role !== 'admin') {
        return res.status(401).send({ message: 'unauthorized access' })
      }
      next()
    }
    const verifyInstructor = async (req, res, next) => {
      const decodedEmail = req.decoded.email
      const query = { email: decodedEmail }
      const user = await usersCollection.findOne(query)
      if (user?.role !== 'instructor') {
        return res.status(401).send({ message: 'unauthorized access' })
      }
      next()
    }

    // payment

    app.post('/create-payment-intent', async (req, res) => {
      const booking = req.body
      const price = booking.price
      const amount = price * 100
      const paymentIntent = await stripe.paymentIntents.create({
        currency: 'usd',
        amount: amount,
        payment_method_types: ['card']
      })
      res.send({
        clientSecret: paymentIntent.client_secret
      })
    })

    // store payments in database

    app.post('/payments', verifyJWT, async (req, res) => {
      const payment = req.body
      const result = await paymentsCollection.insertOne(payment)
      const query = { productId: payment.productId }
      const adDelete = await advertiseCollection.deleteOne(query)
      const filter = { _id: ObjectId(payment.productId) }
      const updatedProductDoc = {
        $set: {
          status: 'sold',
          advertise: false
        }
      }
      const updateProduct = await productsCollection.updateOne(
        filter,
        updatedProductDoc
      )
      const bookingfilter = { _id: ObjectId(payment.bookingId) }
      const updatedBookingDoc = {
        $set: {
          paid: true,
          transactionId: payment.transactionID
        }
      }
      const updateBooking = await bookingsCollection.updateOne(
        bookingfilter,
        updatedBookingDoc
      )

      res.send(result)
    })

    // user api
    app.put('/user/:email', async (req, res) => {
      const email = req.params.email

      const user = req.body
      const filter = { email: email }
      const options = { upsert: true }
      const updateDoc = {
        $set: user
      }
      const result = await usersCollection.updateOne(filter, updateDoc, options)

      res.send(result)
    })

    // get token

    app.get('/jwt', async (req, res) => {
      const email = req.query.email
      const query = { email: email }
      const user = await usersCollection.findOne(query)
      if (!user) {
        return res.status(401).send({ token: '' })
      }
      const token = jwt.sign(user, process.env.ACCESS_TOKEN, {
        expiresIn: '1d'
      })
      res.send({ token })
    })

    // get users for role
    app.get('/user/:email', verifyJWT, async (req, res) => {
      const decodedEmail = req.decoded.email
      const email = req.params.email
      if (email !== decodedEmail) {
        return res.status(403).send({ message: 'forbidden' })
      }
      const filter = { email: email }
      const result = await usersCollection.findOne(filter)
      res.send(result)
    })

    // open routes

    // open routes close

    // users route

    // booking

    app.post('/booking', verifyJWT, async (req, res) => {
      const bookingInfo = req.body

      const filter = {
        email: bookingInfo.email,
        productId: bookingInfo.productId
      }
      const alreadyBooked = await bookingsCollection.find(filter).toArray()
      if (alreadyBooked.length) {
        const message = 'you have already booked this product'
        return res.send({ acknowledged: false, message })
      }
      const result = await bookingsCollection.insertOne(bookingInfo)
      res.send(result)
    })

    app.get('/booking', verifyJWT, async (req, res) => {
      const email = req.query.email

      const decodedEmail = req.decoded.email

      if (email !== decodedEmail) {
        return res.status(403).send({ message: 'forbidden' })
      }

      const query = { email: email }

      const result = await bookingsCollection.find(query).toArray()

      res.send(result)
    })
    app.get('/booking/:id', async (req, res) => {
      const id = req.params.id

      const query = { _id: ObjectId(id) }

      const result = await bookingsCollection.findOne(query)

      res.send(result)
    })

    // delete booking

    app.delete('/booking/:id', verifyJWT, async (req, res) => {
      const id = req.params.id
      const filter = { _id: ObjectId(id) }
      const result = await bookingsCollection.deleteOne(filter)
      res.send(result)
    })

    // instructor routes

    // instructor's class
    app.get('/classes', verifyJWT, verifyInstructor, async (req, res) => {
      const email = req.query.email
      const filter = { 'instructor.email': email }
      const result = await classesCollection.find(filter).toArray()
      res.send(result)
    })
    // add class
    app.post('/classes', verifyJWT, verifyInstructor, async (req, res) => {
      const newClass = req.body
      console.log(newClass)
      const result = await classesCollection.insertOne(newClass)
      res.send(result)
    })
    app.get('/approved-classes', async (req, res) => {
      const result = await classesCollection.find({}).toArray()
      res.send(result)
    })

    // single classes

    app.get('/class/:id', async (req, res) => {
      const id = req.params.id
      const query = { _id: ObjectId(id) }
      const myClass = await classesCollection.findOne(query)
      res.send(myClass)
    })

    // admin routes

    // to show all users an buyers

    app.get('/user', async (req, res) => {
      const role = req.query.role
      const query = role ? { role: role } : {}
      console.log(role)
      const result = await usersCollection.find(query).toArray()
      res.send(result)
    })

    app.put('/user-role/:id', verifyJWT, verifyAdmin, async (req, res) => {
      const id = req.params.id
      const data = req.body

      const query = { _id: ObjectId(id) }
      const options = { upsert: true }
      const updateDoc = {
        $set: {
          role: data?.type
        }
      }
      const result = await usersCollection.updateOne(query, updateDoc, options)
      res.send(result)
    })
  } finally {
  }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('Hello bubu from node')
})

app.listen(port, () => {
  console.log(`Server is running...on ${port}`)
})
