import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Graph from '../components/Graph'
import ExpenseFrom from '../components/ExpenseFrom'
import History from '../components/History'



const Expenses = () => {
  const [username,setUsername]=useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("user")){
     setUsername( JSON.parse(sessionStorage.getItem("user")).username)
    }
  },[])
  return (
    <>
    <Header />
   <div className="container-fluid py-5 mt-5">
    <div className="row">
      <div className="col-lg-6 mt-5">
        <h1>Welcome <span className='text-warning'>{username}</span>,</h1>
        <Graph/>
      </div>
      <div className="col-lg-6 mt-5">
        <ExpenseFrom/>
      </div>
    </div>
    <div >
      
        <History/>
     
    </div>
   </div>
    </>
  )
}

export default Expenses