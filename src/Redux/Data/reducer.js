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
  switch (type) {
    case TASK_ACTIONS.ADD_TASK:
      const addTask = [...state, payload];
      setTasksInLocalStorage(addTask);
      return addTask;

    case TASK_ACTIONS.EDIT_TASK:
      const index = state.findIndex((task) => task.id === payload.id);
      const newTasks = [...state];
      newTasks[index] = payload;
      setTasksInLocalStorage(newTasks);
      return [...newTasks];

    case TASK_ACTIONS.DELETE_TASK:
      const deletedTasks = state.filter((task) => task.id !== payload);
      setTasksInLocalStorage(deletedTasks);
      return [...deletedTasks];

    case TASK_ACTIONS.SET_TASKS:
      return JSON.parse(payload);
    default:
      return state;
  }
};

export default dataReducer;
