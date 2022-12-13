import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsOrder, payOrder } from "../actions/orderActions";
import ButtonWrapper from "../componentes/ButtonWrapper";

function Order(props, { currency }) {
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();

  useEffect(() => {
    if (successPay) {
      props.history.push("/profile");
    } else {
      dispatch(detailsOrder(props.match.params.id));
    }
    return () => {};
  }, [successPay, dispatch]);

  const handleSuccessPayment = (paymentResult) => {
    dispatch(payOrder(order, paymentResult));
  };

  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, order, error } = orderDetails;

  console.log(order);
  return loading ? (
    <div>Loading ...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <div className="placeorder">
        <div className="placeorderInfo">
          <div>
            <h3>Dados da Entrega </h3>
            <div>
              <h6>
                {order.shipping.address}, {order.shipping.city},
                {order.shipping.postalCode}, {order.shipping.country},
              </h6>
            </div>
            <div className="infoDestaque">
              {order.isDelivered
                ? "Entregue em:  " + order.deliveredAt
                : "Por entregar"}
            </div>
          </div>
          <div>
            <h3>Pagamento</h3>
            <div>
              <h6>Método de Pagamento:{order.payment.paymentMethod} </h6>
            </div>
            <div className="infoDestaque">
              {order.isPaid ? "Pago em:  " + order.paidAt : "Por pagar"}
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
              {order.orderItems.length === 0 ? (
                <div>Cart is empty</div>
              ) : (
                order.orderItems.map((item) => (
                  <li key={item._id}>
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
            <li className="placeorder-actions-payment"></li>
            <li>
              <h3>Sumário do Pedido</h3>
            </li>
            <li>
              <div>Vinhos</div>
              <div>{order.itemsPrice}€</div>
            </li>
            <li>
              <div>Transporte:</div>
              <div>{order.shippingPrice}€</div>
            </li>
            <li>
              <div>Taxas:</div>
              <div>{order.taxPrice}€</div>
            </li>
            <li>
              <div>Total Encomenda:</div>
              <div>{order.totalPrice}€</div>
            </li>
            <li>
              {loadingPay && <div>Finishing Payment...</div>}
              {!order.isPaid && (
                <div>
                  {loading ? (
                    <h1>Loading</h1>
                  ) : (
                    <div>
                      <ButtonWrapper
                        onSuccess={handleSuccessPayment}
                        amount={order.totalPrice}
                        currency="EUR"
                        showSpinner={false}
                      />
                    </div>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Order;
