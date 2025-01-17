import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button className="bg-red-200 rounded p-2 m-2" onClick={increment}>
        Increment
      </button>
      {count}
      <button className="bg-red-200 rounded p-2 m-2" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
