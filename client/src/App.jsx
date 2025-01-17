import React, { useState } from 'react'
import Login from './login/login'

const App = () => {
  const [color,setColor]=useState(true)
  const colorChange=()=>{
    setColor(!color);
  }
  return (
    <div>
      <div className="h-full" style={{backgroundColor:color?"white":"black"}}>
        <Login></Login>

        <button className='bg-red-100' onClick={colorChange}>hey</button>
      </div>
    </div>
  );
}

export default App