import React, { useEffect, useState } from 'react'

const Fetch = () => {
  const [data,setData]=useState(null);
  useEffect(()=>{
    console.log("fetched")
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setData(data));
  },[])
  return (
    <div>
      <p>Fetch example</p>
      {data?<p>{data.title}</p>:<p>Loading</p>}
    </div>
  )
}

export default Fetch