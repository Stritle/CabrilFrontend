import React, { useEffect, useState } from "react";
import { addToCart, removeFromCart } from "../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { TiDeleteOutline } from "react-icons/ti";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const signinInfo = useSelector((state) => state.userSignin);
  const { cartItems } = cart;
  const { userInfo } = signinInfo;

  const history = useHistory();

  const vinhoId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  const dispatch = useDispatch();
  const removeFromCartHandler = (vinhoId) => {
    dispatch(removeFromCart(vinhoId));
  };

  useEffect(() => {
    if (vinhoId) {
      dispatch(addToCart(vinhoId, qty));
      console.log(qty, vinhoId);
    }
  }, []);

  const checkOutHandler = () => {
    if (userInfo) {
      history.push("/shipping");
    } else {
      history.push("/signin");
    }
  };
  const updateCartHandler = (vinhoId, qty) => {
    if (vinhoId) {
      dispatch(addToCart(vinhoId, qty));
    }
  };
  return (
    <div className="cart">
      <h3>Carrinho de Compras</h3>
      <div className="cart-container">
        <div className="cart-content-label">
          <div className="label-produtos">
            <small>Produtos</small>
          </div>
          <div className="label-price">
            <small>Preço unidade</small>
          </div>
          <div className="label-qty">
            <small>Quantidade</small>
          </div>
          <div className="label-price-total">
            <small>Sub-Total</small>
          </div>
          <div className="label-remove">
            <small>Remover</small>
          </div>
        </div>
        <ul>
          {cartItems.length === 0 ? (
            <h1>Nenhum Produto</h1>
          ) : (
            cartItems.map((item) => (
              <li key={item.vinho} className="cart-item">
                <div className="cart-image">
                  <img src={item.image} alt="cartFoto"></img>
                </div>
                <div className="cart-name">
                  <p>{item.nome}</p>
                </div>
                <div className="cart-price">
                  <p>{item.price}€</p>
                </div>
                <div className="cart-qty">
                  <button
                    onClick={() => updateCartHandler(item.vinho, item.qty - 1)}
                  >
                    -
                  </button>
                  <p>{item.qty}</p>
                  <button
                    onClick={() => updateCartHandler(item.vinho, item.qty + 1)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-price-total">
                  <p>{item.price * item.qty}€</p>
                </div>
                <div className="cart-remover">
                  <button onClick={() => removeFromCartHandler(item.vinho)}>
                    <TiDeleteOutline />
                  </button>
                </div>
              </li>
            ))
          )}
        </ul>
        <div className="cart-content-cabeçalho">
          {cartItems.length === 0 ? (
            <button onClick={() => history.push("/vinho")}>
              Adicione Produtos
            </button>
          ) : (
            <button onClick={checkOutHandler}>Finalizar Compra</button>
          )}

          <p>
            Preço Total: {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}€
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
