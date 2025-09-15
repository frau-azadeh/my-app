import React, { useEffect, useState } from "react";
type Props = {
  open: boolean;
  initialText?: string;
  title?: string;
  onClose: () => void;
  onSubmit: (text: string) => void;
};

const AddEditModal: React.FC<Props> = ({ open, initialText = "", title = "Modal", onClose, onSubmit }) => {
  const [text, setText] = useState<string>(initialText);

  useEffect(() => {
    setText(initialText); // sync when initialText changes (edit case)
  }, [initialText]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-lg p-6 w-full max-w-md shadow-lg z-10">
        <h3 className="text-lg font-semibold mb-4">{title}</h3>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-3 py-2 border rounded mb-4"
          placeholder="Enter todo..."
          autoFocus
        />

        <div className="flex gap-3 justify-end">
          <button onClick={onClose} className="px-4 py-2 rounded border">Cancel</button>
          <button
            onClick={() => {
              if (!text.trim()) return;
              onSubmit(text.trim());
            }}
            className="px-4 py-2 rounded bg-indigo-600 text-white"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEditModal