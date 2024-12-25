import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      {/* <h1 style={{fontSize:'100'}}>404</h1> */}
      <img  className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/man-confusing-due-to-no-connection-error-illustration-download-in-svg-png-gif-file-formats--wifi-logo-network-empty-states-pack-design-development-illustrations-3780059.png?f=webp" alt="" />
      <h1>Look Like You're Lost</h1>
      <p>The Page You Are Looking For Is Not Available</p>
      <Link to={'/'} className='btn btn-warning'>Go Back To Home</Link>
      </div>
  )
}

export default Pnf