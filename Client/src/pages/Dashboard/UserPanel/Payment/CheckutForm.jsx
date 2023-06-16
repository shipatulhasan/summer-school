import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import LoaderText from "../../../../components/Spinner/LoderText";
import { Link } from "react-router-dom";

const CheckoutForm = ({ booking }) => {
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionID, setTransactionID] = useState("");
  const [success, setSuccess] = useState("");
  const [proccessing, setPoccessing] = useState(false);

  const stripe = useStripe();
  const elements = useElements();
  const { name, email, productId, product_title, price, _id } = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${import.meta.env.VITE_APP_api}/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("biker-point-token")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
      setPoccessing(false);
      console.log(error);
      return;
    } else {
      setCardError("");
    }
    setSuccess("");
    setPoccessing(true);
    const { paymentIntent, confirmationError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
          },
        },
      });
    if (confirmationError) {
      setCardError(confirmationError.message);
      setPoccessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const payment = {
        productId,
        product_title,
        price,
        email,
        bookingId: _id,
        transactionID: paymentIntent.id,
      };

      // store payment info

      fetch(`${import.meta.env.VITE_APP_api}/payments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("biker-point-token")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccess(
              "Congrats your payment completed we will mail you your invoice"
            );
            setTransactionID(paymentIntent.id);
            setPoccessing(false);
          }
        });
    }

    console.log(paymentIntent);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />

      {cardError && (
        <h2 className="mt-4 text-red-500">
          {cardError} please{" "}
          <Link
            to="/dashboard/my-orders"
            className="text-fuchsia-900 underline font-semibold"
          >
            get back
          </Link>{" "}
          and try again
        </h2>
      )}

      <button
        className="bg-red-500 border rounded hover:bg-red-600 mt-8 w-full py-2 text-white font-bold "
        type="submit"
        disabled={!stripe || !clientSecret || proccessing}
      >
        {proccessing ? <LoaderText /> : "Procced to checkout"}
      </button>

      {success && (
        <div>
          <p className="pt-4 text-lg font-semibold text-fuchsia-900">
            {success}
          </p>
          <p className="font-semibold text-green-900 py-2">
            your transaction id is {transactionID}
          </p>
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;
