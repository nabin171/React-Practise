// const [text, setText] = useState([
//   {
//     id: "1",
//     text: "Read Book",
//     address: "balkot",
//   },
//   { id: "2", text: "Read copy", address: "kaushalter" },
//   { id: "3", text: "Read magazines", address: "thimi" },
//   { id: "4", text: "Read diary", address: "dhapakhel" },
// ]);

"use client";
import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState([
    {
      id: "1",
      text: "Read Book",
      address: "balkot",
    },
    { id: "2", text: "Read copy", address: "kaushalter" },
    { id: "3", text: "Read magazines", address: "thimi" },
    { id: "4", text: "Read diary", address: "dhapakhel" },
  ]);
  const [assign, setAssign] = useState("");

  const myFunction = (e) => {
    setAssign(e.target.value); // Update the `assign` state with the input value
  };

  const display = () => {
    if (assign === "") {
      alert("Task cannot be empty!");
      return;
    }

    // Create a new task object
    const newTask = {
      id: task.length+1, // Generate a new ID
      text: assign,
   // Placeholder for address
    };

    // Update the task array with the new task
    setTask((prev) => [...prev, newTask]);

    // Clear the input field
    setAssign("");
  };

  return (
    <div>
      <h2>Todo List:</h2>
      <input
        type="text"
        placeholder="Enter a Task:"
        value={assign} // Bind the value to the state
        onChange={myFunction} // Handle input change
      />
      <button className="bg-red-500 p-2 m-2" onClick={display}>
        Add Task
      </button>
      <ul>
        {task.map((item) => (
          <li key={item.id}>
            {item.id}: {item.text}: {item.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
