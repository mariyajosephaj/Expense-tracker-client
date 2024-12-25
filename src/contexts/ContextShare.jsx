import React, { createContext, useState } from 'react'
export const addTransactionContext = createContext()
export const editTransactionContext = createContext()
export const getTransactionContext = createContext()
const ContextShare = ({children}) => {
    const [addTransactionResponse,setAddTransactionResponse] = useState("")
    const [editTransactionResponse,setEditTransaction] = useState("")
    const [getTransactionResponse,setGetTransactionResponse] = useState([])
  return (
    <addTransactionContext.Provider value={{addTransactionResponse,setAddTransactionResponse}}>
     <editTransactionContext.Provider value={{editTransactionResponse,setEditTransaction}} >
         <getTransactionContext.Provider value={{getTransactionResponse,setGetTransactionResponse}}>
         {children} 
         </getTransactionContext.Provider>
      </editTransactionContext.Provider> 
    </addTransactionContext.Provider>
  )
}

export default ContextShare