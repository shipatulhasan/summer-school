import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { getImageUrl } from '../../api/imageUrl'

import { saveUser } from '../../api/saveUser'
import logo from '../../assets/brand/logo-png1.png'
import LoaderText from '../../components/Spinner/LoderText'
import { AuthContext } from '../../contexts/AuthProvider'

import pageBg from '../../assets/banner/form_page.jpg'

const Registration = () => {
  const [error, setError] = useState('')
  const [viewPass, setViewPass] = useState(false)
  const [viewConfirmPass, setViewConfirmPass] = useState(false)
  const {
    signInWithGoogle,
    createUser,
    setUserProfile,
    isLoading,
    setIsLoading
  } = useContext(AuthContext)

  // use navigate
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const pass = form.password.value
    const confirmPass = form.confirmPassword.value
    const userName = form.userName.value
    const image = form.img.files[0]
    console.log(email, pass, userName, image)

    if (pass !== confirmPass) {
      setError('Both password should be matched')
      return
    }
    //
    setIsLoading(true)
    getImageUrl(image)
      .then((data) => {
        createUser(email, pass)
          .then((result) => {
            handleUpdateProfile(userName, data)

            const userData = {
              email,
              image: data,
              role: 'student',
              name: userName
            }
            saveUser(userData).then((data) => {
              fetch(`${import.meta.env.VITE_APP_api}/jwt?email=${email}`)
                .then((res) => res.json())
                .then((data) => {
                  if (data?.token) {
                    localStorage.setItem('music-school-token', data.token)
                    toast.success('Successfully registered')
                    setError('')
                    form.reset()
                    navigate('/')
                    setIsLoading(false)
                  }
                })
            })
          })
          .catch((err) => {
            const error = err.message
            const message = error.split('/')[1].replace(/[-)]/g, ' ')
            setError(message)
            setIsLoading(false)
          })
      })
      .catch((err) => {
        setError(err.message)
        console.error(err)
      })
  }

  // signup with google

  const handleSignUpWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user
        const userData = {
          email: user?.email,
          image: user.photoURL,
          name: user.displayName,
          role: 'student'
        }
        saveUser(userData).then((data) => {
          fetch(`${import.meta.env.VITE_APP_api}/jwt?email=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
              if (data?.token) {
                localStorage.setItem('music-school-token', data.token)
                toast.success('Successfully registered')
                setError('')
                navigate('/')
              }
            })
        })
      })
      .catch((err) => {
        console.error(err)
        const error = err.message
        const message = error.split('/')[1].replace(/[-)]/g, ' ')
        setError(message)
      })
  }

  // update profile

  const handleUpdateProfile = (name, photoUrl) => {
    const profile = {
      displayName: name,
      photoURL: photoUrl
    }

    setUserProfile(profile)
      .then(() => {})
      .catch((err) => console.error(err))
  }

  return (
    <div
      className='h-full w-full py-5 px-4 bg-center bg-no-repeat bg-cover bg-[#0C0C0C] '
      style={{ backgroundImage: `url(${pageBg})` }}>
      <div className='flex flex-col items-center justify-center min-h-[100vh]'>
        <Link to='/'>
          <img className='w-1/2 mx-auto' src={logo} alt='' />
        </Link>
        <div className='bg-white border border-slate-400 shadow-xl rounded md:w-1/2 w-full p-10 mt-6'>
          <p
            aria-label='Login to your account'
            className='text-2xl font-extrabold leading-6 text-gray-800'>
            Create an account
          </p>
          <p className='text-base mt-4 font-medium leading-none text-gray-800'>
            Already have account?{' '}
            <Link
              to='/login'
              role='link'
              aria-label='Sign up here'
              className='text-base font-medium leading-none underline text-[#C25934] cursor-pointer'>
              {' '}
              Sign in here
            </Link>
          </p>
          <div className='w-full flex items-center  gap-5 mt-5'>
            <button
              className='flex items-center gap-5 border-2 rounded border-[#EFCF4F] px-2 py-1'
              aria-label='Sign Up with google'
              onClick={handleSignUpWithGoogle}>
              <svg
                width={19}
                height={20}
                viewBox='0 0 19 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z'
                  fill='#4285F4'
                />
                <path
                  d='M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z'
                  fill='#34A853'
                />
                <path
                  d='M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z'
                  fill='#FBBC05'
                />
                <path
                  d='M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z'
                  fill='#EB4335'
                />
              </svg>
              Sign Up with google
            </button>
          </div>

          <div className='w-full flex items-center justify-between py-5'>
            <hr className='w-full border-gray-800' />
            <p className='text-base font-medium leading-4 px-2.5 text-gray-800'>
              OR
            </p>
            <hr className='w-full border-gray-800  ' />
          </div>
          <form action='' onSubmit={handleSubmit}>
            <p className='text-base font-medium mb-5 text-[#C25934]'>{error}</p>
            <div className='grid grid-cols-1 gap-6 mt-4 md:grid-cols-2'>
              <label className='text-base font-medium leading-none text-gray-800'>
                Full Name
                <input
                  type='text'
                  name='userName'
                  className='bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                />
              </label>

              <label className='text-base font-medium leading-none text-gray-800'>
                Email
                <input
                  type='email'
                  name='email'
                  required
                  className='bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                />
              </label>
            </div>
            <div className='grid grid-cols-1 gap-6 mt-6 md:grid-cols-2'>
              {/* image */}
              <div>
                <label className='text-base font-medium leading-none text-gray-800'>
                  Profile Picture
                  <input
                    type='file'
                    name='img'
                    className='bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                    required
                  />
                </label>
              </div>
              {/* role */}
              {/* <div className="mt-2 " onChange={(e) => setRole(e.target.value)}>
                <h2 className="text-base font-medium leading-none text-gray-800">
                  Select role
                </h2>
                <div className="mt-5 space-x-3">
                  <label className="hover:cursor-pointer" htmlFor="user">
                    <input
                      id="user"
                      type="radio"
                      value="user"
                      defaultChecked
                      name="role"
                    />{" "}
                    User
                  </label>
                  <label className="hover:cursor-pointer" htmlFor="seller">
                    <input
                      id="seller"
                      type="radio"
                      value="seller"
                      name="role"
                    />{" "}
                    Seller
                  </label>
                </div>
              </div> */}
            </div>

            <div className='grid grid-cols-1 gap-6 mt-6 md:grid-cols-2'>
              <label className='text-base font-medium leading-none text-gray-800'>
                Password
                <div className='relative flex items-center justify-center'>
                  <input
                    type={viewPass ? 'text' : 'password'}
                    name='password'
                    required
                    className='bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                  />

                  <div
                    onClick={() => setViewPass(!viewPass)}
                    className='absolute right-0 mt-2 mr-3 cursor-pointer text-gray-600'>
                    {viewPass ? <FaRegEyeSlash /> : <FaRegEye />}
                  </div>
                </div>
              </label>

              <label className='text-base font-medium leading-none text-gray-800'>
                Confirm Password
                <div className='relative flex items-center justify-center'>
                  <input
                    type={viewConfirmPass ? 'text' : 'password'}
                    name='confirmPassword'
                    required
                    className='bg-gray-200 border rounded focus:outline-none text-base font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
                  />
                  <div
                    onClick={() => setViewConfirmPass(!viewConfirmPass)}
                    className='absolute right-0 mt-2 mr-3 cursor-pointer text-gray-600'>
                    {viewConfirmPass ? <FaRegEyeSlash /> : <FaRegEye />}
                  </div>
                </div>
              </label>
            </div>

            <div className='mt-8'>
              <button
                aria-label='create my account'
                className='focus:ring-2 focus:ring-offset-2 focus:ring-slate-100 text-base font-semibold leading-none text-white focus:outline-none bg-[#EFCF4F] border rounded hover:bg-[#C25934] py-4 w-full'
                type='submit'>
                {isLoading ? <LoaderText /> : 'Create new account'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registration
