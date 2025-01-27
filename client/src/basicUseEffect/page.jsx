//task 3Fetch Data on Mount: Fetch data from an API and display it when the component loads.

// import React, { useEffect, useState } from "react";

// const BasicUseEffect = () => {
//   const [resourceType, setResourceType] = useState("posts");
//   const [data,setData]=useState([])
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then((response) => response.json())
//       .then((json) => setData(json));
//   },[resourceType]);
//   return (

//     <div>
//         <p>{resourceType}</p>
//       <button
//         onClick={() => setResourceType("posts")}
//         className="bg-red-50 m-2 p-2 "
//       >
//         Posts
//       </button>
//       <button
//         onClick={() => setResourceType("comments")}
//         className="bg-red-50 m-2 p-2 "
//       >
//      Comments
//       </button>
//       {data.slice(0,10).map((item ,index)=>{
// return <pre key={index}>{JSON.stringify(item,null,8)}</pre>
//       })}
//     </div>
//   );
// };

// export default BasicUseEffect;

//Task 4: Set up and clean up a setInterval that updates the time every second
// import React, { useState, useEffect } from "react";

// const BasicUseEffect = () => {
//   const [time, setTime] = useState(new Date().toLocaleTimeString());

//   useEffect(() => {
//     // Set up the interval to update the time every second
//     const intervalId = setInterval(() => {
//       setTime(new Date().toLocaleTimeString());
//     }, 1000);

//     // Clean-up function to clear the interval when the component unmounts
//     return () => {
//       clearInterval(intervalId); // Clears the interval
//     };
//   }, []); // Empty dependency array means this effect runs only once after mount

//   return (
//     <div>
//       <h1>Current Time:</h1>
//       <p>{time}</p> {/* Display the updated time */}
//     </div>
//   );
// };

// export default BasicUseEffect;

// //use effect without dependency
// import React, { useEffect, useState } from 'react'

// const BasicUseEffect = () => {
//     const [count,setCount]=useState(0)
// console.log(count)
// useEffect(()=>{
//     setTimeout(()=>{
//         setCount(count=>count+1);
//     },1000)
// })

//   return (
//     <div>
//         <p>i've rendered {count} times</p>
//         {/* <button onClick={()=>setCount(count+1)}>click</button> */}
//     </div>
//   )
// }

// export default BasicUseEffect


import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page