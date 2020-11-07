export const AUTH_ACTIONS = {
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
};

export const LOCAL_STORAGE_TOKEN_NAME = "todoultimatetoken";

export const LOCAL_STORAGE_TASKS_NAME = "todo-tasks";

export const TAG_OPTIONS = [
  { label: "Personal", value: "personal", color: "#27AE60" },
  { label: "Official", value: "official", color: "#9B51E0" },
  { label: "Misc", value: "misc", color: "#F2994A" },
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
};
