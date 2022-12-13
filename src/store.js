import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  vinhoListReducer,
  vinhoDetailsReducer,
  vinhoSaveReducer,
} from "./reducers/vinhoReducer";
import { cartReducer } from "./reducers/cartReducer";
import Cookie from "js-cookie";
import {
  userRegisterReducer,
  userSigninReducer,
  userUpdateReducer,
} from "./reducers/userReducer";
import {
  myOrderListReducer,
  orderCreateReducer,
  orderDeleteReducer,
  orderDetailsReducer,
  orderListReducer,
  orderPayReducer,
} from "./reducers/orderReducer";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = {
  cart: { cartItems, shipping: {}, payment: {} },
  userSignin: { userInfo },
  userUpdate: { userInfo },
};
const reducer = combineReducers({
  vinhoList: vinhoListReducer,
  cart: cartReducer,
  vinhoDetails: vinhoDetailsReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,
  vinhoSave: vinhoSaveReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
