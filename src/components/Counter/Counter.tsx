import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  return (
    <div className="p-4 bg-gray-700 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-bold text-yellow-300 mb-4">
        Counter : <span className="text-white">{count}</span>
      </h2>
      <div className="gap-2 flex justify-center">
        <button
          onClick={increment}
          className="bg-green-500 rounded-md hover:bg-green-600 text-white px-4 py-2 transition duration-300"
        >
          {" "}
          +{" "}
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 rounded-md hover:bg-red-600 text-white px-4 py-2 transition duration-300"
        >
          {" "}
          -{" "}
        </button>
      </div>
    </div>
  );
};

export default Counter;
