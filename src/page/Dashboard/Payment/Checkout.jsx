import {
  useElements,
  useStripe,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";
import "./payment.css";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import { useAuth } from "../../../contexts/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = ({ price, carts }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const axios = useAxios();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const { user } = useAuth();

  useEffect(() => {
    if (price > 0) {
      axios.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res?.data?.clientSecret);
      });
    }
  }, [price, axios]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
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
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email:
              user.email !== null
                ? user.email
                : `${user?.reloadUserInfo?.screenName}@github.com`,
            name: user.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    setProcessing(false);

    console.log("paymentIntent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email || `${user?.reloadUserInfo?.screenName}@github.com`,
        TansactionId: paymentIntent.id,
        price,
        quantity: carts?.length,
        cartItems: carts?.map((item) => item._id),
        menuItems: carts?.map((item) => item.menuId),
        status: "pending",
      };

      console.log(payment);

      axios.post("/payments", payment).then((res) => {
        if (res.data.result.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Purchase Successful",
            text: "",
          });
        }
      });
    }
  };

  return (
    <article className="w-full max-w-lg">
      {cardError && (
        <div className="alert alert-error ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="mr-auto">{cardError}</span>
        </div>
      )}

      {transactionId && (
        <div className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="mr-auto">
            Transaction comfirm transaction id {transactionId}
          </span>
        </div>
      )}
      <form className="w-full " onSubmit={handleSubmit}>
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
        <div className="flex justify-center ">
          <button
            className="btn  max-w-lg w-full bg-blue-500 disabled:bg-slate-800"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
    </article>
  );
};

const stripePromise = loadStripe(`${import.meta.env.VITE_STRIPE_PUBLISH_KEY}`);

const Checkout = ({ price, carts }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm carts={carts} price={price} />
    </Elements>
  );
};

export default Checkout;
