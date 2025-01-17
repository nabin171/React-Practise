import React, { useState } from "react";

const Color = () => {
  const [color, setColor] = useState("blue");

  return (
    <div>
      <p style={{
        backgroundColor:color,
        height:"200px",
        width:"200px",
      }}></p>
     <p>It's {color}</p>
    <p>{color=== "red"?"true":"false"}</p>
      <ul>
        <li>
          <button onClick={() => setColor("red")}>Red</button>
        </li>
        <li>
          <button onClick={() => setColor("blue")}>blue</button>
        </li>
        <li>
          <button onClick={() => setColor("green")}>green</button>
        </li>
        <li>
          <button onClick={() => setColor("purple")}>purple</button>
        </li>
      </ul>
    </div>
  );
};

export default Color;
