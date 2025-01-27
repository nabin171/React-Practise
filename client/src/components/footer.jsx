import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
      const {phone,name}=useContext(AppContext)
  
  return (
    <div>
      <h1>FOOTER</h1>
      <h3>Phone:{phone}</h3>
      <h3>Name:{name}</h3>
    </div>
  );
}

export default Footer