import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodos(state, action) {
      console.log(state, "addtodoSTATE");
      console.log(action, "addtodoACTION");
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {},
    toggleTodoComplete(state, action) {},
  },
});

export const { addTodos, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
