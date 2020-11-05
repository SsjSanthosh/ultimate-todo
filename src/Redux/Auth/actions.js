import { LOCAL_STORAGE_TOKEN_NAME } from "utils/constants";
import { AUTH_ACTIONS } from "utils/constants";

export const loginUser = (token) => (dispatch) => {
  localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, token);
  dispatch({ type: AUTH_ACTIONS.LOG_IN, payload: token });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
  dispatch({ type: AUTH_ACTIONS.LOG_OUT });
};
