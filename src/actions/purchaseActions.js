import axios from "axios";
import Cookie from "js-cookie";
import {
  SHIPPING_INFO_REQUEST,
  SHIPPING_INFO_SUCCESS,
  SHIPPING_INFO_FAIL,
  PAYMENT_METHOD_FAIL,
  PAYMENT_METHOD_SUCCESS,
  PAYMENT_METHOD_REQUEST,
} from "../constants/purchaseConstants";

const saveAddress =
  (fullName, city, country, postalCode, address) => async (dispatch) => {
    dispatch({
      type: SHIPPING_INFO_REQUEST,
      payload: { fullName, city, country, postalCode, address },
    });
    try {
      const { data } = await axios.post("/api/orders/saveAddress", {
        fullName,
        city,
        country,
        postalCode,
        address,
      });
      dispatch({ type: SHIPPING_INFO_SUCCESS, payload: data });
      Cookie.set("purchaseInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({ type: SHIPPING_INFO_FAIL, payload: error.message });
    }
  };

const savePaymentMethod = (paymentMethod) => async (dispatch) => {
  dispatch({
    type: PAYMENT_METHOD_REQUEST,
    payload: { paymentMethod },
  });
  try {
    const { data } = await axios.post("/api/purchase/savePaymentMethod", {
      paymentMethod,
    });
    dispatch({ type: PAYMENT_METHOD_SUCCESS, payload: data });
    Cookie.set("paymentMethodInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({ type: PAYMENT_METHOD_FAIL, payload: error.message });
  }
};
// const logout = () => (dispatch) => {
//   Cookie.remove("userInfo");
//   Cookie.remove("cartItems");
//   dispatch({ type: USER_LOGOUT });
// };

export { saveAddress, savePaymentMethod };
