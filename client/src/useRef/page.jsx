//in order to avoid render many times
// import React, { useEffect, useRef, useState } from "react";

// const Basic = () => {
//   const [value, setValue] = useState(0);
//   const count = useRef(10);
// useEffect(()=>
// {
//     count.current+=1;
// })
//   return (
//     <div>
//       <button onClick={() => setValue((prev) => prev + 1)}>-1</button>
//       <h1>{value}</h1>
//       <button onClick={() => setValue((prev) => prev - 1)}>+1</button>

//       <h2> i have render {count.current}times</h2>
//     </div>
//   );
// };

// export default Basic;

// import React, { useState } from 'react'

// const Basic = () => {
//     const [color,setColor]=useState("blue");

//   return (
//     <div>
//         <p style={{
//             backgroundColor:color,
//             height:"200px",
//             width:"200px",
//         }}></p>
//       <button className="bg-red-50 p-2 m-2" onClick={()=>{setColor("Blue")}}>
//         Blue
//       </button>
//       <button className="bg-red-50 p-2 m-2" onClick={()=>{setColor("Red")}}>
//         Red
//       </button>
//     </div>
//   );
// }

// export default Basic



import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page