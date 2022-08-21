import * as types from "../actions/actionTypes";

export const addNewTask = (inputValue) => {
  return {
    type: types.ADD_NEW_TASK,
    payload: inputValue,
  };
};
export const changeTaskStatusDone = (task) => {
  return {
    type: types.CHANGE_TASK_STATUS_DONE,
    payload: task,
  };
};
export const updateTask = (id, editValue) => {
  return {
    type: types.UPDATE_TASK,
    id,
    editValue,
  };
};
export const deleteTask = (id) => {
  return {
    type: types.DELETE_TASK,
    payload: id,
  };
};
