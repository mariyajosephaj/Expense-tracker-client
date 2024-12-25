import React, { useContext, useEffect, useState } from 'react'

import { Card } from 'react-bootstrap'
import { deleteTransactionAPI, userTransactionAPI } from '../services/allAPI'
import { addTransactionContext, editTransactionContext, getTransactionContext } from '../contexts/ContextShare'
import Edit from './Edit'
const History = () => {
    const {getTransactionResponse,setGetTransactionResponse} = useContext(getTransactionContext)
    const {editTransactionResponse,setEditTransaction}= useContext(editTransactionContext)
    const {addTransactionResponse,setAddTransactionResponse}=useContext(addTransactionContext)
    const[userTransactions,setUserTransactions] = useState([])
    // const[userTransactionAmount,setUserTransactionsAmount] = useState([])
    console.log(userTransactions);
    // console.log(userTransactionAmount);
    
    // const {name,type,amount} = userTransactions

    // console.log(userTransactions.amount);
    
    useEffect(()=>{
      getUserTransactions()
    },[addTransactionResponse,editTransactionResponse])
    const getUserTransactions=async()=>{
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader={
                "Authorization":`Bearer ${token}`
            }
            try{
                const result = await userTransactionAPI(reqHeader)
                 console.log(result);
                
                
                if(result.status==200){
                    setUserTransactions(result.data)
                    setGetTransactionResponse(result.data)
                    // setUserTransactionsAmount(result.data[1].amount)
                }
                
            }catch(err){
                console.log(err);
                
            }
        }
    }

    const removeTransaction = async(id)=>{
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader = {
              
              "Authorization":`Bearer ${token}`
            }
            try{

                const result = await deleteTransactionAPI(id,reqHeader) 
                if(result.status==200){
                    getUserTransactions()
                }
                
                }catch(err){
                console.log(err);
                
            }
        
    }
}
    
  return (
    <div className="row">
        <h1 className='text-center'>History</h1>
        
        {
            userTransactions.length>0 ?
              
              
            userTransactions?.map(transaction=>(
                <div className='col-lg-4 mt-3' key={transaction?._id}>
                   
                        
                    <div>
                    <Card   className='shadow  ' style={{backgroundColor: transaction.color, color:'white'}}>
                    {/* style={{background:'red'}} */}
                     <Card.Body className='d-flex justify-content-between'>
                     
                          
                           <Card.Text>Transaction :{transaction?.name} <br />
                           Transaction Type :{transaction?.type} <br />
                           Amount:{transaction?.amount}
                           

                           </Card.Text>
                           <div>
                           <Edit transaction={transaction}/>
                           <button onClick={()=>removeTransaction(transaction?._id)} className='ms-2'><i className='fa-solid fa-trash text-danger '></i></button>
                           </div>
        
                      </Card.Body>
                    </Card>
                    </div>
                    
                   
        </div>
            ))
        :
        <div className="fw-bolder fs-3">You have no transactions</div>
        }
    </div>
  )
}

export default History