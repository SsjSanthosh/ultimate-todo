import { TASK_ACTIONS } from "utils/constants";
import { setTasksInLocalStorage } from "utils/utils";

const initialState = [];

// Single task structure
/* 
    {
        name:"task name",
        id:" unique id " ,
        description:"task description",
        subtasks:[
            {
                id,name,done
            }
        ]
        status:"todo, progress, done"
    }
*/

const dataReducer = (state = initialState, action) => {
  const { payload, type } = action;
  let editedTasks = [];
  let index = 0;
  let task;
  switch (type) {
    case TASK_ACTIONS.ADD_TASK:
      const addTask = [...state, payload];
      setTasksInLocalStorage(addTask);
      return addTask;

    case TASK_ACTIONS.EDIT_TASK:
      index = state.findIndex((task) => task.id === payload.id);
      editedTasks = [...state];
      editedTasks[index] = payload;
      setTasksInLocalStorage(editedTasks);
      return [...editedTasks];

    case TASK_ACTIONS.DELETE_TASK:
      editedTasks = state.filter((task) => task.id !== payload);
      setTasksInLocalStorage(editedTasks);
      return [...editedTasks];

    case TASK_ACTIONS.EDIT_SUBTASK:
      const { taskId, subtaskId, value } = payload;
      index = state.findIndex((task) => task.id === taskId);
      task = state[index];

      const subtaskIndex = task.subtasks.findIndex(
        (subtask) => subtask.id === subtaskId
      );
      task.subtasks[subtaskIndex].done = value;
      editedTasks = [...state];
      editedTasks[index] = { ...task };
      setTasksInLocalStorage(editedTasks);
      return [...editedTasks];

    case TASK_ACTIONS.SET_TASKS:
      return JSON.parse(payload);

    case TASK_ACTIONS.CHANGE_TASK_STATUS:
      let { id, status } = payload;
      editedTasks = [...state];
      index = editedTasks.findIndex((task) => task.id === id);
      editedTasks[index] = { ...editedTasks[index], status: status };
      setTasksInLocalStorage(editedTasks);
      return [...editedTasks];
    default:
      return state;
  }
};

export default dataReducer;
