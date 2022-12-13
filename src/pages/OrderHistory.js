import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrders } from "../actions/orderActions";

const OrderHistory = (props) => {
  const myOrderList = useSelector((state) => state.myOrderList);
  const { loading, error, orders } = myOrderList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch]);
  return (
    <div className="orderHistory">
      <h1>Histórico de Encomendas</h1>
      <div className="table-container">
        {loading ? (
          <div>loading</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th className="mr-2">ID ENCOMENDA</th>
                <th>DATA</th>
                <th>PREÇO TOTAL</th>
                <th>PAGO</th>
                <th>ENTREGUE</th>
                <th>DETALHES</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.totalPrice}€</td>
                  <td>{order.isPaid ? order.paidAt : "Não"}</td>
                  <td>{order.isDelivered ? order.deliveredAt : "Não"}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        props.history.push(`/order/${order._id}`);
                      }}
                    >
                      VER
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
