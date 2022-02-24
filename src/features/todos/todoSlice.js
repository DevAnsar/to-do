import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const testTodo = {
  id: 1,
  title: "test todo 1",
  description:
    "todo description todo description todo description todo description todo description todo description",
  complated: true,
};
const getLocalStorage = () => {
  let data = JSON.parse(localStorage.getItem("todos"));
  return data || [];
};
const setLocalStorage = (value) => {
  localStorage.setItem("todos", JSON.stringify(value));
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: getLocalStorage(),
  reducers: {
    addTodo: (state, action) => {
      const { title, description = "", complated = false } = action.payload;
      const newTodoList = { id: uuidv4(), title, description, complated };
      state.push(newTodoList);
      setLocalStorage(state);
    },
    editTodo: (state, action) => {
      const newTodos=state.map((todo) => {
        if (todo.id === action.payload.id) {
          const { title, description, complated } = action.payload;
          todo = { ...todo, title, description, complated };
          
        }
        return todo;
      });
      setLocalStorage(newTodos);
      return newTodos;
    },
    toggleComplateTodo: (state, action) => {
      const newTodos=state.map((todo) => {
        if (todo.id === action.payload.id) {
          const { complated } = action.payload;
          todo = { ...todo, complated };
        }
        return todo;
      });
      setLocalStorage(newTodos);
      return newTodos;
    },
    deleteTodo: (state, action) => {
      let newTodos = state.filter((todo) => todo.id !== action.payload.id);
      setLocalStorage(newTodos);
      return newTodos;
    },
  },
});
export const { addTodo, editTodo, toggleComplateTodo, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
