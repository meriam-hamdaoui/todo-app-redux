import {
  ADD_TODO,
  DELETE_TODO,
  DONE_TODO,
  EDIT_TODO,
} from "../constants/todoTypes";

const initialState = {
  todos: [],
  done: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((el) => {
          if (el.id === action.payload.id) {
            return {
              ...el,
              todo: action.payload.todo,
            };
          }
          return el;
        }),
      };

    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              done: true,
            };
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
