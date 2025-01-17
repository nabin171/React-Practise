import React, { useState } from 'react'

const Toggle = () => {
    const [isVisible,setIsVisible]=useState(false);
  
  return (
    <div>
      <h1>{isVisible && "Hello World"}</h1>
      <p1>{isVisible ? "Show" : "Hide"}</p1>
      <button
        className="p-2 m-2 bg-red-200 rounded"
        onClick={() => setIsVisible(!isVisible)}
      >
        Message
      </button>
    </div>
  );
}

export default Toggle
