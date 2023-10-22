import { useState } from "react";

import TodoForm from "../../components/todo_form/Form";
import TodoList from "../../components/todo_form/List";
import "./Todo.css";

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  const deleteTodo = (index) => {
    console.log('deleteTodo')
    setTodos(todos.filter((todo, i) => i !== index));
  };

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
