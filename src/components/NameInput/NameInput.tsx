import React, { useState } from "react";

const NameInput: React.FC = () => {
  const [name, setName] = useState<string>("");

  return (
    <div className="p-4 bg-gray-700 rounded-lg shadow-md max-w-md mx-auto">
      <label className="block text-md font-bold text-yellow-300 mb-2">
        Name{" "}
      </label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indo-300"
      />
      <p className="mt-3 text-yellow-300 font-bold">
        You Type: <span className="text-white">{name || ""}</span>
      </p>
    </div>
  );
};

export default NameInput;
