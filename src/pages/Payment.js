import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { savePayment } from "../actions/cartActions";

const Payment = (props) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(savePayment({ paymentMethod }));
    props.history.push("/placeorder");
  };

  return (
    <div className="payment">
      <h1>Método de Pagamento</h1>
      <div>
        <form onSubmit={submitHandler}>
          {/* <div>
            <label>
              <input
                type="radio"
                name="Stripe"
                value="Stripe"
                checked={paymentMethod === "Stripe"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Stripe
            </label>
          </div> */}
          <div>
            <label>
              <input
                type="radio"
                name="Paypal"
                value="Paypal"
                checked={paymentMethod === "Paypal"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Paypal
            </label>
          </div>

          <button type="submit">Continuar</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
