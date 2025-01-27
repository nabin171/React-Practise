import React, { createContext } from 'react'
import App from '../App';
export const AppContext=createContext();
const CreateContext = (props) => {
    const phone="9862276291";
    const name="Nabin"
  return (
    <AppContext.Provider value={{phone,name}}>
        {props.children}
    </AppContext.Provider>
  )
}

export default CreateContext