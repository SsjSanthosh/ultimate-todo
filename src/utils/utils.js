import {
  LOCAL_STORAGE_TOKEN_NAME,
  LOCAL_STORAGE_TASKS_NAME,
} from "./constants";

export const getTokenFromLocalStorage = () =>
  localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME);

export const setTasksInLocalStorage = (tasks) => {
  localStorage.setItem(LOCAL_STORAGE_TASKS_NAME, JSON.stringify(tasks));
};

export const getItemFromLocalStorage = (name) => {
  return localStorage.getItem(name);
};
