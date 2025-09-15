import React from "react";

import { Edit2, Trash2 } from "lucide-react";

import type { Todo } from "../../types/types";

type Props = {
  todo: Todo;
  onEdit: (t: Todo) => void;
  onDelete: (id: string) => void;
};

const TodoItem: React.FC<Props> = ({ todo, onEdit, onDelete }) => {
  return (
    <li className="flex items-center justify-between p-3 bg-white rounded shadow-sm">
      <div>
        <div className="font-medium">{todo.text}</div>
        <div className="text-xs text-gray-400">
          {new Date(todo.createdAt).toLocaleString()}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onEdit(todo)}
          title="Edit"
          className="p-1 rounded hover:bg-gray-100"
        >
          <Edit2 size={16} />
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          title="Delete"
          className="p-1 rounded hover:bg-gray-100 text-red-500"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
