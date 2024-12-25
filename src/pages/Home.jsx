import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Background from '../assets/backround.jpg'
const Home = () => {
  const [isLogin,setIsLogin]= useState(false)
  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setIsLogin(true)
    }else{
      setIsLogin(false)
    }

  },[])
  return (
    <>
   <div style={{minHeight:'100vh',backgroundImage:`url(${Background})`, backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
    <div className="container">
      <div className="row align-items-center text-light">
        <div className="col-lg-12  justify-content-center align-items-center">
           <h1 style={{fontSize:'60px'}} className='text-light'><i className="fa-solid fa-sack-dollar me-3"></i>Expense Tracker</h1>
           <h2 style={{textAlign:'justify'}} className='text-light'>Managing Finance Has Never Been Easier
           </h2>
           <p className='text-light'>Are You Ready To Level Up Financially?</p>
           {
            isLogin?
            <Link to={'/expense'} className='btn btn-warning'>MANAGE YOUR EXPENSES</Link>
            :
            <Link to={'/login'} className='btn btn-warning'>STARTS TO EXPLORE</Link>
            }
        </div>
        
      </div>
    </div>
   </div>
    </>
  )
}

export default Home