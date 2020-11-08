import { LOCAL_STORAGE_TASKS_NAME } from "./constants";

export const setTasksInLocalStorage = (tasks) => {
  localStorage.setItem(LOCAL_STORAGE_TASKS_NAME, JSON.stringify(tasks));
};

export const getItemFromLocalStorage = (name) => {
  return localStorage.getItem(name);
};

export const getTrimmedString = (str, num) => {
  if (str.length < num) return str;
  return str.substring(0, num) + "...";
};
