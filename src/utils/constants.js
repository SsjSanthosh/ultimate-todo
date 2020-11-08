export const AUTH_ACTIONS = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
  SET_USER: "SET_USER",
};

export const LOCAL_STORAGE_TOKEN_NAME = "todoultimatetoken";

export const LOCAL_STORAGE_TASKS_NAME = "todo-tasks";

export const TAG_OPTIONS = [
  { label: "Personal", value: "personal", color: "#27AE60" },
  { label: "Official", value: "official", color: "#9B51E0" },
  { label: "Misc", value: "misc", color: "#F2994A" },
];

export const TASK_STATUSES = [
  { name: "To-do", value: "to-do", color: "#F2C94C" },
  { name: "In progress", value: "in-progress", color: "#27AE60" },
  { name: "Done", value: "done", color: "#2F80ED" },
];

export const TAG_DISPLAY = [
  { label: "all", value: "All", color: "#2D9CDB" },
  ...TAG_OPTIONS,
];
export const TASK_ACTIONS = {
  EDIT_TASK: "EDIT_TASK",
  ADD_TASK: "ADD_TASK",
  DELETE_TASK: "DELETE_TASK",
  SET_TASKS: "SET_TASKS",
  EDIT_SUBTASK: "EDIT_SUBTASK",
  CHANGE_TASK_STATUS: "CHANGE_TASK_STATUS",
};
