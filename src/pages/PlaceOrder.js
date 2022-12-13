import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../componentes/SmallFooter";
import { createOrder } from "../actions/orderActions";

const PlaceOrder = (props) => {
  const cart = useSelector((state) => state.cart);
  const orderCreate = useSelector((state) => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const { cartItems, shipping, payment } = cart;
  if (!shipping.address) {
    props.history.push("/shipping");
  } else if (!payment.paymentMethod) {
    props.history.push("/payment");
  }
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // create an order
    dispatch(
      createOrder({
        orderItems: cartItems,
        shipping,
        payment,
        itemsPrice,
        shippingPrice,
        taxPrice,
        totalPrice,
      })
    );
  };
  useEffect(() => {
    if (!shipping.address) {
      props.history.push("/shipping");
    } else if (!payment.paymentMethod) {
      props.history.push("/payment");
    }
    if (success) {
      props.history.push("/order/" + order._id);
    }
  }, [success, shipping.address, payment.paymentMethod]);

  return (
    <div className="placeOrder">
      {/* <CheckoutSteps step1 step2 step3 step4></CheckoutSteps> */}
      <div className="placeorder">
        <div className="placeorderInfo">
          <div>
            <h3>Dados da Entregas</h3>
            <div>
              {cart.shipping.address}, {cart.shipping.city},
              {cart.shipping.postalCode}, {cart.shipping.country},
            </div>
          </div>
          <div>
            <h3>Pagamento</h3>
            <div>
              <h6>Método de Pagamento:{cart.payment.paymentMethod} </h6>
            </div>
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <div>
                  <h3>Carrinho de Compras</h3>
                </div>
                <div>
                  <h6>Preço</h6>
                  <p className="p-small">(Unidade)</p>
                </div>
              </li>
              {cartItems.length === 0 ? (
                <div>Cart is empty</div>
              ) : (
                cartItems.map((item) => (
                  <li key={item.nome}>
                    <div className="cart-image">
                      <div>
                        <img src={item.image} alt="product" />
                      </div>
                    </div>
                    <div className="cart-name">
                      <div>
                        <Link to={"/details/" + item.vinho}>{item.nome}</Link>
                      </div>
                      <div>
                        <h6>Quantidade: {item.qty}</h6>
                      </div>
                    </div>
                    <div className="cart-price">
                      <h6>{item.price} €</h6>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
        <div className="placeorder-action">
          <ul>
            <li>
              <h3>Valores do Pedido</h3>
            </li>
            <li>
              <div>Custo do Vinho</div>
              <div>{itemsPrice}€</div>
            </li>
            <li>
              <div>Custo da Entrega</div>
              <div>{shippingPrice}€</div>
            </li>
            <li>
              <div>Taxas</div>
              <div>{taxPrice}€</div>
            </li>
            <li>
              <div>Total do Pedido</div>
              <div>{totalPrice}€</div>
            </li>
            <li>
              <button onClick={placeOrderHandler}>Fazer Pagamento</button>
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;
