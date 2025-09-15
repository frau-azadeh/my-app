import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";

type Todo = {
  id: string;
  text: string;
  done?: boolean;
};

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const add = (text: string) => {
    const newTodo: Todo = { id: Date.now().toString(), text, done: false };
    setTodos((prev) => [...prev, newTodo]);
  };

  const remove = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggle = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  };

  return (
    <div className="p-4 bg-gray-700 rounded-lg shadow-md max-w-md mx-auto">
      <AddTodoForm onAdd={add} />
      <ul>
        {todos.map((t) => (
          <li key={t.id} className="flex items-center justify-between">
            <label
              className={`flex items-center gap- ${
                t.done ? "text-gray-400 line-through" : ""
              }`}
            >
              <input
                type="checkbox"
                checked={t.done}
                onChange={() => toggle(t.id)}
              />
              <span className="text-yellow-300 pl-3">{t.text}</span>
            </label>
            <button
              onClick={() => remove(t.id)}
              className="text-sm text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
