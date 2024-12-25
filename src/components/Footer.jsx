import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div style={{height:'300px'}} className='container mt-5 w-100'>
        <div className='d-flex justify-content-center row'>
         <div className="intro col-lg-3">
         
         <h5><i className="fa-solid fa-sack-dollar me-3"></i>Expense Tracker</h5>
         <p>Designed and build with all the love in the world by the luminar team with the help of our contributers. <br /><br />  </p>
         </div>
         <div className="links col-lg-3">
         <Link to={'/'} style={{textDecoration:'none'}}>
          Links
           </Link>
           <p>Home</p>
           <p>Login</p>
           <p>Register</p>
         </div>
         <div className="guides col-lg-3">
         <h5>Guides</h5>
           <p>React</p>
           <p>React Bootstrap</p>
           <p>React Router </p>
         </div>
         <div className="contact col-lg-3">
          <h5>Contact Us</h5>
          <i class="fa-brands fa-facebook me-3"></i>
          <i class="fa-solid fa-phone me-3"></i>
          <i class="fa-brands fa-github me-3"></i>
          <i class="fa-brands fa-instagram me-3"></i>
          <i class="fa-brands fa-twitter me-3"></i>
          <i class="fa-brands fa-linkedin-in me-3"></i>

         </div>
        </div>
        <p className='text-center'>Copyright &copy; Mariya Joseph, &reg; Expense Tracker</p>
    </div>
    </>
  )
}

export default Footer