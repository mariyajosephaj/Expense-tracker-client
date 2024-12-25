import React, { useContext, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { updateTransactionAPI } from '../services/allAPI';
import { editTransactionContext } from '../contexts/ContextShare';

// import { Button } from 'react-bootstrap'

const Edit = ({transaction}) => {
  const {editTransactionResponse,setEditTransaction} = useContext(editTransactionContext)
  const [expenseDetails,setExpenseDetails]= useState({
      id:transaction?._id ,name:transaction?.name,type:transaction?.type,amount:transaction?.amount
      
  
   })
    console.log(expenseDetails);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setExpenseDetails({
      id:transaction?._id ,name:transaction?.name,type:transaction?.type,amount:transaction?.amount
    })
  }
  const handleShow = () => {
    setShow(true);
    setExpenseDetails({
      id:transaction?._id ,name:transaction?.name,type:transaction?.type,amount:transaction?.amount
    })
  }

  const handleUpadateTransaction = async ()=>{
    // const {id,name,type,amount}= expenseDetails
    if(expenseDetails.name && expenseDetails.type && expenseDetails.amount){
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type":"application/json",
          "Authorization":`Bearer ${token}`
        }
      // api call
      try{
        const result = await updateTransactionAPI(expenseDetails.id,expenseDetails,reqHeader)
        if(result.status==200){
          alert("Transaction Added successfully")
          handleClose()
          setEditTransaction(result)
        }

      }catch(err){
        console.log(err);
        
      }
    }else{
      alert("Please fill the form completely")
    }
  }
}
  return (
    <>
     <button onClick={handleShow} ><i className="fa-solid fa-edit text-warning"></i></button>
     <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <div className='mb-2'>
            <input className='form-control' value={expenseDetails.name} onChange={e=>setExpenseDetails({...expenseDetails,name:e.target.value})} type="text"  placeholder="Name" />
           </div>
           <div className='mb-2'>
                <select className='form-control' value={expenseDetails.type} onChange={e=>setExpenseDetails({...expenseDetails,type:e.target.value})}>
                <option >Select Transaction Type</option>
                <option value="Investment">Investment</option>
                <option value="Savings">Savings</option>
                <option value="Expense">Expense</option>
                 </select>
            {/* <input type="text" className='form-control' placeholder='Transaction' /> */}
           </div>
           <div className='mb-2'>
            <input type="number" className='form-control' value={expenseDetails.amount} onChange={e=>setExpenseDetails({...expenseDetails,amount:parseFloat(e.target.value)})}  />
           </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button  onClick={handleUpadateTransaction} variant="primary">Update</Button>
          {/*  */}
        </Modal.Footer>
      </Modal>
    </>
  )
}


export default Edit