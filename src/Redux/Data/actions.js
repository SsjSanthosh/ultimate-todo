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
  console.log(JSON.parse(tasks));
  return dispatch({
    type: TASK_ACTIONS.SET_TASKS,
    payload: JSON.parse(tasks),
  });
};

export const editSubtask = (taskId, subtaskId, value) => (dispatch) => {
  return dispatch({
    type: TASK_ACTIONS.EDIT_SUBTASK,
    payload: { taskId, subtaskId, value },
  });
};

export const changeTaskStatus = (id, status) => (dispatch) => {
  return dispatch({
    type: TASK_ACTIONS.CHANGE_TASK_STATUS,
    payload: { id, status },
  });
};

export const setFilterTag = (tag) => (dispatch) => {
  return dispatch({ type: TASK_ACTIONS.SET_FILTER_TAG, payload: tag });
};
