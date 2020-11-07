import { TASK_ACTIONS } from "utils/constants";

export const addTask = (task) => (dispatch) => {
  return dispatch({ type: TASK_ACTIONS.ADD_TASK, payload: task });
};

export const editTask = (task) => (dispatch) => {
  return dispatch({ type: TASK_ACTIONS.EDIT_TASK, payload: task });
};

export const deleteTask = (id) => (dispatch) => {
  return dispatch({ type: TASK_ACTIONS.DELETE_TASK, payload: id });
};

export const setTasks = (tasks) => (dispatch) => {
  return dispatch({ type: TASK_ACTIONS.SET_TASKS, payload: tasks });
};
