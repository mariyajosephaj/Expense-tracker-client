import React, { useContext } from 'react'
import { Chart,ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { getTransactionContext } from '../contexts/ContextShare'

Chart.register(ArcElement)
const Graph = () => {

   const {getTransactionResponse,setGetTransactionResponse} = useContext(getTransactionContext)
   const allTransactions = getTransactionResponse
    // console.log(allTransactions);
  //  const totalTransaction = allTransactions.length
  //  console.log(totalTransaction);

   
   
  const totalInvestmentTransaction = allTransactions.filter(transaction =>transaction.type=="Investment")
  // console.log(totalInvestmentTransaction);
  const totalInvestment = totalInvestmentTransaction.reduce((total, transaction) => total +transaction.amount , 0);
  // console.log(totalInvestment);

  const totalExpenseTransaction = allTransactions.filter(transaction =>transaction.type=="Expense")
  // console.log(totalInvestmentTransaction);
  const totalExpenses = totalExpenseTransaction.reduce((total, transaction) => total +transaction.amount , 0);
  // console.log(totalExpenses);

  const totalSavingsTransaction = allTransactions.filter(transaction =>transaction.type=="Savings")
  // console.log(totalInvestmentTransaction);
  const totalSavings = totalSavingsTransaction.reduce((total, transaction) => total +transaction.amount , 0);
  // console.log(totalSavings);

  const total = totalInvestment+totalExpenses+totalSavings
  // console.log(total);
  
  
  
   
      const config = {
        data : {
            datasets: [{
         
                data: [totalExpenses, totalSavings, totalInvestment],
                backgroundColor: [
                  'rgb(255, 99, 132)',
                  'rgb(54, 162, 235)',
                  'rgb(255, 205, 86)'
                ],
                hoverOffset: 4,
                borderRadius : 30,
                spacing : 10
              }]
        },
        options :{
            cutout : 115
        }
      }
  return (
    <>
    <div className="d-flex justify-content-center">
      {/*  */}
        <div className="item">
            <div className="chart relative">
               <Doughnut {...config}></Doughnut>
               <div className='d-flex align-items-center'>
               <h3 style={{marginTop:'-20px'}}  className="ms-4 font-bold title_c">Total
               <span className='block text-3xl text-emerald-400'>₹{total}</span>
               </h3>
               </div>
               {/* <h3>`Expenses : ${totalExpenses} Investment :${totalExpenses} Savings: ${totalExpenses}` </h3> */}
            </div>
            {/* <div className="d-flex flex-col py-5 gap-4">
               <Labels/>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default Graph