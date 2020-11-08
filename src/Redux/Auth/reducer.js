import { AUTH_ACTIONS } from "utils/constants";

const initialState = {
  token: null,
  user: {},
  loggedIn: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH_ACTIONS.LOG_IN:
      return { ...state, loggedIn: true, token: payload };
    case AUTH_ACTIONS.LOG_OUT:
      return { ...state, loggedIn: false, token: null };
    case AUTH_ACTIONS.SET_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};

export default authReducer;
