import { LOCAL_STORAGE_TOKEN_NAME } from "utils/constants";
import { AUTH_ACTIONS } from "utils/constants";
import { GET_USER_API_ENDPOINT } from "utils/endpoints";

export const loginUser = (token) => (dispatch) => {
  localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, token);
  dispatch({ type: AUTH_ACTIONS.LOG_IN, payload: token });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
  dispatch({ type: AUTH_ACTIONS.LOG_OUT });
};

export const setUser = () => async (dispatch) => {
  const user = await (await fetch(GET_USER_API_ENDPOINT)).json();
  dispatch({ type: AUTH_ACTIONS.SET_USER, payload: user.data });
};
