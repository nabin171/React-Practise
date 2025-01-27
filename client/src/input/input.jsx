import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        onChange={(nab) => setText(nab.target.value)}
        placeholder="type something..."
      >
      </input>
      <p>current input:{text}</p>
    </div>
  );
};

export default Input;
