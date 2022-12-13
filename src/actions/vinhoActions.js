import {
  VINHO_LIST_SUCCESS,
  VINHO_LIST_REQUEST,
  VINHO_LIST_FAIL,
  VINHO_DETAILS_REQUEST,
  VINHO_DETAILS_SUCCESS,
  VINHO_DETAILS_FAIL,
  VINHO_SAVE_SUCCESS,
  VINHO_SAVE_FAIL,
  VINHO_SAVE_REQUEST,
} from "../constants/vinhoConstants";
import axios from "axios";

const listVinhos = () => async (dispatch) => {
  try {
    dispatch({ type: VINHO_LIST_REQUEST });
    const { data } = await axios.get("/api/vinhos");
    dispatch({ type: VINHO_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: VINHO_LIST_FAIL, payload: error.message });
  }
};
const saveVinho = (vinho) => async (dispatch, getState) => {
  try {
    dispatch({ type: VINHO_SAVE_REQUEST, payload: vinho });
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await axios.post("/api/vinhos", vinho, {
      headers: {
        Authorization: "Bearer" + userInfo.token,
      },
    });
    dispatch({ type: VINHO_SAVE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: VINHO_SAVE_FAIL, payload: error.message });
  }
};

const detailsVinhos = (vinhoId) => async (dispatch) => {
  try {
    dispatch({ type: VINHO_DETAILS_REQUEST, payload: vinhoId });
    const { data } = await axios.get("/api/vinhos/" + vinhoId);
    dispatch({ type: VINHO_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: VINHO_DETAILS_FAIL, payload: error.message });
  }
};
export { listVinhos, detailsVinhos, saveVinho };
