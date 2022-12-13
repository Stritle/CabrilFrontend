import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../actions/userActions";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const userData = useSelector((state) => state.userUpdate);
  const { userInfo, loading, error, success } = userData;
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }));
  };
  console.log(userData);
  return (
    <div className="profile">
      <h1>Perfil de Utilizador</h1>
      <div className="profil-container">
        <form onSubmit={submitHandler}>
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
              <button type="submit">Atualizar Dados </button>
            </li>
            <li>{success && <div>Dados atualizados com sucesso</div>}</li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Profile;
