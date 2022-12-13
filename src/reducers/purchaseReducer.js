import {
  SHIPPING_INFO_REQUEST,
  SHIPPING_INFO_SUCCESS,
  SHIPPING_INFO_FAIL,
  PAYMENT_METHOD_REQUEST,
  PAYMENT_METHOD_SUCCESS,
  PAYMENT_METHOD_FAIL,
} from "../constants/purchaseConstants";

function shippingReducer(state = {}, action) {
  switch (action.type) {
    case SHIPPING_INFO_REQUEST:
      return { loading: true };
    case SHIPPING_INFO_SUCCESS:
      return { loading: false, purchaseInfo: action.payload };
    case SHIPPING_INFO_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
function paymentReducer(state = {}, action) {
  switch (action.type) {
    case PAYMENT_METHOD_REQUEST:
      return { loading: true };
    case PAYMENT_METHOD_SUCCESS:
      return { loading: false, paymentMethodInfo: action.payload };
    case PAYMENT_METHOD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export { shippingReducer, paymentReducer };
