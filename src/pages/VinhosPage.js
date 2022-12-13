import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { listVinhos } from "../actions/vinhoActions";
import { useDispatch, useSelector } from "react-redux";
import SmallFooter from "../componentes/SmallFooter";
import { Helmet } from "react-helmet-async";

function VinhosPage(props) {
  const vinhoList = useSelector((state) => state.vinhoList);
  const { vinhos, loading, error } = vinhoList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listVinhos());
    return () => {};
  }, []);
  console.log(vinhos);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="loja">
      <Helmet>
        <title>Vinhos - Quinta do Cabril</title>
      </Helmet>
      <h1>Os Vinhos Quinta do Cabril</h1>
      <div className="content-loja">
        <ul className="vinho-ul">
          {vinhos.map((vinho) => (
            <li key={vinho._id}>
              <div className="vinho-item">
                <div className="vinhos-img">
                  <img src={vinho.image} alt="Garrafas Quinta do Cabril"></img>
                </div>
                <div className="vinhos-texto">
                  <h3>{vinho.nome}</h3>
                </div>
                <div className="vinhos-qty">
                  <div>
                    <Link to={`details/${vinho._id}`}>Comprar</Link>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <SmallFooter />
    </div>
  );
}
export default VinhosPage;
