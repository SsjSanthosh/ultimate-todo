import { LOCAL_STORAGE_TASKS_NAME, TASK_ACTIONS } from "utils/constants";
import { setTasksInLocalStorage } from "utils/utils";

const initialState = { tasks: [], filterTag: "" };

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
      const addTask = { ...state, tasks: [...state.tasks, payload] };
      setTasksInLocalStorage(addTask);
      return addTask;

    case TASK_ACTIONS.EDIT_TASK:
      index = state.tasks.findIndex((task) => task.id === payload.id);
      editedTasks = [...state.tasks];
      editedTasks[index] = payload;
      setTasksInLocalStorage(editedTasks);
      return { ...state, tasks: [...editedTasks] };

    case TASK_ACTIONS.DELETE_TASK:
      editedTasks = state.tasks.filter((task) => task.id !== payload);
      if (editedTasks.length) setTasksInLocalStorage(editedTasks);
      else localStorage.removeItem(LOCAL_STORAGE_TASKS_NAME);
      return { ...state, tasks: [...editedTasks] };

    case TASK_ACTIONS.EDIT_SUBTASK:
      const { taskId, subtaskId, value } = payload;
      index = state.tasks.findIndex((task) => task.id === taskId);
      task = state.tasks[index];

      const subtaskIndex = task.subtasks.findIndex(
        (subtask) => subtask.id === subtaskId
      );
      task.subtasks[subtaskIndex].done = value;
      editedTasks = [...state.tasks];
      editedTasks[index] = { ...task };
      setTasksInLocalStorage(editedTasks);
      return { ...state, tasks: [...editedTasks] };

    case TASK_ACTIONS.SET_TASKS:
      return { ...JSON.parse(payload), filterTag: "" };

    case TASK_ACTIONS.CHANGE_TASK_STATUS:
      let { id, status } = payload;
      editedTasks = [...state.tasks];
      index = editedTasks.findIndex((task) => task.id === id);
      editedTasks[index] = { ...editedTasks[index], status: status };
      setTasksInLocalStorage(editedTasks);
      return { ...state, tasks: [...editedTasks] };

    case TASK_ACTIONS.SET_FILTER_TAG:
      return { ...state, filterTag: payload };
    default:
      return state;
  }
};

export default dataReducer;
