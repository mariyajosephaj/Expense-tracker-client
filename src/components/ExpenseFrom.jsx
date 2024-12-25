import React, { useContext, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
// import { useForm } from 'react-hook-form'


 import { addTransactionAPI } from '../services/allAPI';
import { addTransactionContext } from '../contexts/ContextShare';

export default function ExpenseFrom() {
  
  // context
  const {addTransactionResponse,setAddTransactionResponse}=useContext(addTransactionContext)
   
  const [expenseDetails,setExpenseDetails]= useState({
     name:"",type:"",amount:""
    

 })
//  console.log(expenseDetails);
 
  
  const handleAddTransaction=async (e)=>{
    e.preventDefault()
    
    // const {name,type,amount}= expenseDetails
    if(expenseDetails.name && expenseDetails.type && expenseDetails.amount){
      // console.log(expenseDetails);
      
      // const reqBody = expenseDetails
      const token = sessionStorage.getItem("token")
      // console.log(token,reqBody);
      
      if(token){
        const reqHeader = {
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
        // api call
        try{
           const result = await addTransactionAPI(expenseDetails,reqHeader)
           console.log(result);
           if(result.status==200)
           {
            alert("Transaction added successfully")
            handleCancel()
            // share result to  history via context
            setAddTransactionResponse(result)
           }
           
        }catch(err){
           console.log(err);
           
        }
      }
    }
    else{
      alert("Please Fill The Form Completely")
    }

  }

  const handleCancel=()=>{
   
    setExpenseDetails({name:"",type:"",amount:""})
  }
  
  return (
    <>
    <Form>
    <FloatingLabel
                        controlId="amount"
                        label="Salary,Rent,SIP"
                        className="mb-3"
                    >
                       <Form.Control value={expenseDetails.name} onChange={e=>setExpenseDetails({...expenseDetails,name:e.target.value})} type="text"  placeholder="Name" />
                    </FloatingLabel>            
    <Form.Select value={expenseDetails.type} onChange={e=>setExpenseDetails({...expenseDetails,type:e.target.value})} aria-label="Default select example" >
      <option >Select Transaction Type</option>
      <option value="Investment">Investment</option>
      <option value="Savings">Savings</option>
      <option value="Expense">Expense</option>
    </Form.Select>
    <FloatingLabel
                        controlId="amount"
                        label="Amount"
                        className="mb-3 mt-2"
                    >
                       <Form.Control type="number" value={expenseDetails.amount} onChange={e=>setExpenseDetails({...expenseDetails,amount:parseFloat(e.target.value)})} placeholder="Amount" />
                    </FloatingLabel>
    <div className="d-flex justify-content-between">
    <button onClick={handleCancel} className="btn btn-primary mb-2">Cancel Transaction</button>
    <button onClick={handleAddTransaction} className="btn btn-primary mb-2">Make Transaction</button>
    {/* onClick={handleAddTransaction} */}
    </div>
    </Form>
    
    </>
  )
}
