import React, { useEffect, useState } from "react";
import Navbar from "../componentes/Navbar";
import { detailsVinhos } from "../actions/vinhoActions";
import { useDispatch, useSelector } from "react-redux";
import { CgShoppingCart } from "react-icons/cg";
import Rating from "../componentes/Rating";
import SmallFooter from "../componentes/SmallFooter";

const DetailsVinho = (props) => {
  const [qty, setQty] = useState(1);
  const vinhoDetails = useSelector((state) => state.vinhoDetails);
  // const cart = useSelector((state) => state.cart);
  const { vinho, loading, error } = vinhoDetails;
  // const { cartItems } = cart;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsVinhos(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handdleAddToCart = () => {
    // const existItem = cartItems.find((x) => x._id === vinho._id);
    // const quantity = existItem ? existItem.quantity + 1 : 1;
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };

  return (
    <div>
      {" "}
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <Navbar />
          <div className="details-container">
            <div className="details-image">
              <img src={vinho.image} alt={vinho.nome}></img>
            </div>
            <div className="details-description">
              <h1>{vinho.nome}</h1>
              <span>
                <p>
                  {" "}
                  <strong>Denominação:</strong>
                  {vinho.denominacao}
                </p>
              </span>
              <span>
                <p>
                  <strong>Ano de Colheita:</strong>
                  {vinho.ano_colheita}
                </p>
              </span>
              <span>
                <p>
                  <strong>Castas:</strong>
                  {vinho.casta}
                </p>
              </span>
              <span>
                <p>
                  <strong>Notas de Prova:</strong>
                  {vinho.notas_prova}
                </p>
              </span>
              <span>
                <p>
                  <strong>Sugestão:</strong>
                  {vinho.sugestao}
                </p>
              </span>
              <span>
                <p>
                  <strong>Análises:</strong>
                  {vinho.analises1}
                  {vinho.analises2}
                  {vinho.analises3}
                  {vinho.analises4}
                </p>
              </span>
              <span>
                <p>
                  <strong>Embalagem:</strong>
                  {vinho.embalagem1}
                  {vinho.embalagem2}
                  {vinho.embalagem3}
                  {vinho.embalagem4}
                </p>
              </span>
              <span>
                <p>
                  <strong>Enólogo:</strong>
                  {vinho.enologo}
                </p>
              </span>
            </div>
            <div className="details-buttons">
              <div className="details-qty">
                <p>Quantidade: </p>
                <select
                  value={qty}
                  onChange={(e) => {
                    setQty(e.target.value);
                  }}
                >
                  {[...Array(vinho.stock).keys()].map((x) => (
                    <option value={x + 1}>{x + 1}</option>
                  ))}
                </select>
              </div>
              <button onClick={handdleAddToCart}>
                <CgShoppingCart />
              </button>
              <div className="details-rating">
                <span>
                  {""}
                  <strong>
                    Classificação:
                    <Rating rating={vinho.rating} />
                  </strong>
                </span>
              </div>
            </div>
          </div>
          <SmallFooter />
        </div>
      )}
    </div>
  );
};

export default DetailsVinho;
