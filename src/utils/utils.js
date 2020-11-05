import { LOCAL_STORAGE_TOKEN_NAME } from "./constants";

export const getTokenFromLocalStorage = () =>
  localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME);
