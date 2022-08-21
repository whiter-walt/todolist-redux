import * as types from "../actions/actionTypes";

export const initialState = {
  todos: [
    { id: 4, title: "Create Fourth React App", isDone: true },
    { id: 5, title: "Create Fifth React App", isDone: false },
    { id: 6, title: "Create Sixth React App", isDone: false },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_NEW_TASK:
      const newTask = {
        id: Math.max(...state.todos.map((item) => item.id)) + 1,
        title: action.payload,
        isDone: false,
      };
      return { ...state, todos: [...state.todos, newTask] };
    case types.CHANGE_TASK_STATUS_DONE:
      const newStatusTask = state.todos.map((i) =>
        i.id === action.payload.id
          ? { ...i, isDone: !action.payload.isDone }
          : i
      );
      return { ...state, todos: newStatusTask };
    case types.UPDATE_TASK:
      const updatedTask = state.todos.map((i) =>
        i.id === action.id ? { ...i, title: action.editValue } : i
      );
      return { ...state, todos: updatedTask };
    case types.DELETE_TASK:
      const removedTask = state.todos.filter((i) => i.id !== action.payload);
      return { ...state, todos: removedTask };
    default:
      return state;
  }
};
