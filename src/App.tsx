import { useState } from "react";

import toast from "react-hot-toast";

import Counter from "./components/Counter/Counter";
import CounterEffect from "./components/CounterEffect/CounterEffect";
import NameForm from "./components/NameForm/NameForm";
import NameInput from "./components/NameInput/NameInput";
import SimpleTimer from "./components/SimpleTimer/SimpleTimer";
import AddEditModal from "./components/ToDo/AddEditModal";
import TodoList from "./components/ToDo/TodoList";
import Todos from "./components/Todos/Todos";
import User from "./components/User/User";
import useLocalStorage from "./hooks/useLocalStorage";
import type { Todo } from "./types/types";

import "./App.css";

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos_v1", []);

  const [isModalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<Todo | null>(null);

  const openAdd = () => {
    setEditing(null);
    setModalOpen(true);
  };

  const openEdit = (t: Todo) => {
    setEditing(t);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setEditing(null);
  };

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toLocaleString(),
      text,
      createdAt: Date.now(),
    };
    setTodos((prev) => [newTodo, ...prev]);
    toast.success("Todo added");
    closeModal();
  };

  const handleUpdate = (text: string) => {
    if (!editing) return;
    setTodos((prev) =>
      prev.map((t) => (t.id === editing.id ? { ...t, text } : t)),
    );
    toast.success("Todo updated");
    closeModal;
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
    toast.success("Todo Deleted");
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 space-y-6 rounded-lg">
        <header className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold">React + TypeScript + Tailwind </h1>
        </header>

        <main className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-2xl font-bold">useState example</h3>
          <Counter />
          <NameInput />
          <NameForm />
          <Todos />
          <SimpleTimer />

          <section>
            <h3 className="text-2xl font-bold">Todo App — useState practice</h3>
            <button
              onClick={openAdd}
              className="px-4 py-2 bg-indigo-600 text-white rounded"
            >
              Add Todo
            </button>

            <TodoList todos={todos} onEdit={openEdit} onDelete={handleDelete} />
          </section>
          <section>
            <h3 className="text-2xl font-bold">useEffect</h3>
            <CounterEffect />
            <User />
          </section>
        </main>
        <AddEditModal
          open={isModalOpen}
          initialText={editing ? editing.text : ""}
          title={editing ? "Edit Todo" : "Add Todo"}
          onClose={closeModal}
          onSubmit={editing ? handleUpdate : handleAdd}
        />
      </div>
    </>
  );
}

export default App;
