import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "./store/todoSlice";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import "./App.css";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodos({ text }));
    setText("");
  };

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
