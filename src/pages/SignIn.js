import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signin } from "../actions/userActions";
import SmallFooter from "../componentes/SmallFooter";
import { Helmet } from "react-helmet-async";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      props.history.push("/");
    }
    return () => {
      //
    };
  }, [userInfo, props.history]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <div className="login">
      <Helmet>
        <title>Entrar - Quinta do Cabril</title>
      </Helmet>
      <form onSubmit={submitHandler}>
        <h1>Login</h1>
        <ul>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>Erro...</div>}
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </li>
          <li>
            <button type="submit">Login </button>
          </li>
          <li>Novo no site da Quinta do Caleiro?</li>
          <li>
            <Link to="/register">Registe-se</Link>
          </li>
        </ul>
      </form>
      <SmallFooter />
    </div>
  );
};

export default SignIn;
