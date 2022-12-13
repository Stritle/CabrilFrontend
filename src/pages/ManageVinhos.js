import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveVinho } from "../actions/vinhoActions";
import Navbar from "../componentes/Navbar";

const ManageVinhos = (props) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const vinhoSave = useSelector((state) => state.vinhoSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = vinhoSave;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      //
    };
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveVinho({ name, image, countInStock, description, price }));
  };

  return (
    <div className="login">
      <Navbar />
      <form onSubmit={submitHandler}>
        <h1>Criar Vinho</h1>
        <ul>
          <li>
            {loadingSave && <div>Loading...</div>}
            {errorSave && <div>Erro...</div>}
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="image">Image</label>
            <br />
            <input
              type="text"
              name="image"
              id="image"
              onChange={(e) => setImage(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="countInStock">CountInStock</label>
            <br />
            <input
              type="text"
              name="countInStock"
              id="countInStock"
              onChange={(e) => setCountInStock(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="description">Description</label>
            <br />
            <textarea
              type="text"
              name="description"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </li>
          <li>
            <label htmlFor="price">Price</label>
            <br />
            <input
              type="text"
              name="price"
              id="price"
              onChange={(e) => setPrice(e.target.value)}
            ></input>
          </li>

          <li>
            <button type="submit">Criar Novo Vinho </button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default ManageVinhos;
