import React from "react";
import type { Todo } from "../../types/types";
import TodoItem from "./TodoItem";
type Props = {
  todos: Todo[];
  onEdit: (t: Todo) => void;
  onDelete: (id: string) => void;
};

const TodoList: React.FC<Props> = ({ todos, onEdit, onDelete }) => {
  if (!todos.length) {
    return (
      <div className="text-center text-gray-500">No todos yet — add one ✨</div>
    );
  }

  return (
    <ul className="space-y-3">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
