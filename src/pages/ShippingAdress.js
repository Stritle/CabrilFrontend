import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveShipping } from "../actions/cartActions";

const ShippingAdress = (props) => {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(saveShipping({ fullName, address, city, country, postalCode }));
    props.history.push("/payment");
  };

  return (
    <div className="shipping">
      <h1>Dados de Morada</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Nome Completo:</label>
          <input
            id="fullName"
            name="fullName"
            value={fullName}
            required
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            type="text"
          ></input>
        </div>
        <div>
          <label>Morada:</label>
          <input
            id="address"
            name="address"
            value={address}
            required
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            type="text"
          ></input>
        </div>
        <div>
          <label>Cidade:</label>
          <input
            id="city"
            name="city"
            value={city}
            required
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
          ></input>
        </div>
        <div>
          <label>Código Postal:</label>
          <input
            id="postalCode"
            name="postalCode"
            value={postalCode}
            required
            onChange={(e) => {
              setPostalCode(e.target.value);
            }}
            type="text"
          ></input>
        </div>
        <div>
          <label>País:</label>
          <input
            id="country"
            name="country"
            value={country}
            required
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            type="text"
          ></input>
        </div>

        <button type="submit">Continuar</button>
      </form>
    </div>
  );
};

export default ShippingAdress;
