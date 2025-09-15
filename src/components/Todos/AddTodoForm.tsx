import React, { useState } from "react";

type AddTodoFormProps = {
  onAdd: (text: string) => void;
};

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState<string>("");

  const submit = () => {
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <div className="flex gap-5 mb-5">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="New Task ..."
        className="rounded flex-1 px-3 py-2.5"
      />

      <button
        onClick={submit}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        ADD
      </button>
    </div>
  );
};

export default AddTodoForm;
