// import React, { useEffect, useState } from 'react'

// const MyFunction = () => {
//   const [resourceType,setResourceType]=useState("posts");
//   const [data,setData]=useState([])
//   console.log("render")
//   useEffect(()=>{
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then((response) => response.json())
//       .then((json) => setData(json));
//     console.log("Mounted")
//   },[resourceType])
//   return (
//     <div>
//       <p>{resourceType}</p>
//       <button onClick={()=>setResourceType("posts")} className="bg-red-50 m-2 p-2">Posts</button>
//       <button onClick={()=>setResourceType("comments")} className="bg-red-50 m-2 p-2">Comments</button>
//       <button onClick={()=>setResourceType("users")} className="bg-red-50 m-2 p-2">Users</button>
//       <p>{data.map((item)=>{
//         return <pre>{JSON.stringify(item)}</pre>
//       })}</p>
//     </div>
//   );
// }

// export default MyFunction

import React from 'react'

const dependency = () => {
  return (
    <div>dependency</div>
  )
}

export default dependency