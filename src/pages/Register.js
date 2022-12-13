import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userActions";
import SmallFooter from "../componentes/SmallFooter";
import { Helmet } from "react-helmet-async";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, repassword));
  };

  return (
    <div className="register">
      <Helmet>
        <title>Registo - Quinta do Cabril</title>
      </Helmet>
      <form onSubmit={submitHandler}>
        <h1>Registar</h1>
        <ul>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>Erro...</div>}
          </li>
          <li>
            <label htmlFor="name">Nome:</label>
            <br />
            <input
              type="name"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="rePassword">Confirmar Password:</label>
            <br />
            <input
              type="password"
              name="rePassword"
              id="rePassword"
              onChange={(e) => setRePassword(e.target.value)}
            ></input>
          </li>
          <li>
            <button type="submit">Registe-se </button>
          </li>
          <li>Já tem uma conta ?</li>
          <li>
            <Link to="/signin">Faça Login!</Link>
          </li>
        </ul>
      </form>
      <SmallFooter />
    </div>
  );
};

export default Register;
