//1.count wala 
// import React, { useState } from "react";

// const Page = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)} className="bg-red-50 p-2 m-2">
//         Inc
//       </button>
//       <button onClick={() => setCount(count - 1)} className="bg-red-50 p-2 m-2">
//         Dec
//       </button>
//     </div>
//   );
// };

// export default Page;


//2. Toggle wala
// import React, { useCallback, useState } from 'react'

// const page = () => {
//     const [on,setOn]=useState(false);
//     const control=()=>{
//         setOn(!on);
//     }
//   return (
//     <div>
//       <p>{on?"On":"Off"}</p>
     
//       <button className='bg-black p-2 m-2' onClick={control}>Click</button>
//     </div>
//   );
// }

// export default page


//3Mutiple color changer wala
// import React, { useState } from 'react'

// const Page = () => {
//       const [color,setColor]=useState("red");

//   return (

//     <div>
//         <p style={{
//             backgroundColor:color,
//             height:"200px",
//             width:"200px",
//         }}></p>
//         <p>{color}</p>
//       <button onClick={()=>setColor("red")} className="bg-red-50 m-2 p-2 ">
//         Red
//       </button>
//       <button onClick={()=>setColor("green")} className="bg-red-50 m-2 p-2 ">
//         green
//       </button>
//       <button onClick={()=>setColor("blue")} className="bg-red-50 m-2 p-2 ">
//         blue
//       </button>
//     </div>
//   );
// }

// export default Page


//3. use effect ko suruko wala jaile render hune wala
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [resourceType,setResourceType]=useState("posts");
        const [item, setItems] = useState([]);

useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then((response) => response.json())
    .then((json) => setItems(json));

},[resourceType])
  return (
    <div>
        <p>{resourceType}</p>
     {item.map(item=>{
        return <pre>{JSON.stringify(item)}</pre>
     })}
        <button onClick={()=>setResourceType("posts")} className='bg-red-50 m-2 p-2'>Posts</button>
        <button onClick={()=>setResourceType("users")} className='bg-red-50 m-2 p-2'>Users</button>
        <button onClick={()=>setResourceType("comments")} className='bg-red-50 m-2 p-2'>Comments</button>


    </div>
  )
}

export default Page