import React, { useContext, useState } from 'react'
import { FloatingLabel, Form,Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { registerAPI,loginAPI } from '../services/allAPI'
import { tokenContext } from '../contexts/TokenAuth'
import ExpenseImg from '../assets/expense1.jpg'
const Auth = ({insideRegister}) => {
  const {authorisedUser,setAuthorisedUser}=useContext(tokenContext)
  const navigate = useNavigate()
  const [isLogin,setIsLogin] = useState(false)
  const [userInput,setUserInput]= useState({
    username:"",email:"",password:""
  })
  console.log(userInput);

  // const  register = async (e)=>{
  //   e.preventDefault()
  //   if(userInput.username && userInput.email && userInput.password ){
      
  //     try{
  //      const result = await registerAPI(userInput)
  //      if(result.status==200){
  //        alert(`Welcome please login to explore our projects!!`)
  //       //  navigate("/login")
  //       //  setUserInput({username:"",email:"",password:""})
  //      }
  //      else {
  //         if(result.response.status==406){
  //          alert(result.response.data)
  //          setUserInput({username:"",email:"",password:""})
  //         }
  //      }
  //    }
  //    catch(err){
  //     console.log(err);
      
  //   }

  //   }
  //   else{
  //     alert("Please fill the form completely")
  //   }

  // }
  const register = async(e)=>{
    e.preventDefault()
    if(userInput.username && userInput.email && userInput.password ){
      // api call
      try{
       const result = await registerAPI(userInput)
       console.log(result);
       
        if(result.status==200){
          alert(`Welcome ${result.data?.username}, please login!!`)
          navigate('/login')
          setUserInput({username:"",email:"",password:""})
        }
        else {
           if(result.response.status==406){
            alert(result.response.data)
            setUserInput({username:"",email:"",password:""})
           }
        }
      }catch(err){
        console.log(err);
        
      }
    }
    else{
      alert("Please fill the form completely !!!")
    }
  }

  // login
  const login = async(e)=>{
    e.preventDefault()
    if(userInput.password && userInput.email   ){
      // api call
      try{
       const result = await loginAPI(userInput)

        if(result.status==200){
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          setIsLogin(true)
          setAuthorisedUser(true)
          // setAuthorisedUser(true)
          setTimeout(() => {
            navigate("/")
            setUserInput({username:"",email:"",password:""})
            setIsLogin(false)
          }, 2000);
        }
        else {
           if(result.response.status==404){
            alert(result.response.data)
            setUserInput({username:"",email:"",password:""})
           }
        }
      }catch(err){
        console.log(err);
        
      }
    }
    else{
      alert("Please fill the form completely !!!")
    }
  }
  
  return (
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center'> 
    <div className="container w-75">
      <div className="card shadow p-2">
        <div className="row align-items-center">
        <div className="col-lg-6">
          <img src={ExpenseImg} className='img-fluid' alt="" />
        </div>
        <div className="col-lg-6">
        <h1 className='my-2'><i className="fa-solid fa-sack-dollar me-3"></i>Expense Tracker</h1>
        <h5>Sign {insideRegister?'Up':'In'} to your Account</h5>
        
        <Form>
             {
              insideRegister &&
              <FloatingLabel
              controlId="floatingUserName"
              label="User Name"
              className="mb-3"
            >
            <Form.Control type="text" value={userInput.username} onChange={e=>setUserInput({...userInput,username:e.target.value})} placeholder="User Name" />
            </FloatingLabel>
             }
               <FloatingLabel
                 controlId="floatingInput"
                 label="Email address"
                 className="mb-3"
               >
               <Form.Control type="email" value={userInput.email} onChange={e=>setUserInput({...userInput,email:e.target.value})}  placeholder="name@example.com" />
               </FloatingLabel>
               <FloatingLabel controlId="floatingPassword" label="Password">
               <Form.Control type="password" value={userInput.password} onChange={e=>setUserInput({...userInput,password:e.target.value})}  placeholder="Password" />
                </FloatingLabel>
                {
                  insideRegister ?
                  <div className="mt-3">
                    <button className='btn btn-primary mb-2' onClick={register}>Register</button>
                    <p>Existing User ? Please Click Here To <Link to={'/login'}>Login</Link></p>
                  </div>
                  :
                  <div className="mt-3">
                  <button className='btn btn-primary mb-2' onClick={login}>Login
                  {isLogin && <Spinner animation="border" variant="light" />}
                  </button>
                  <p>New User ? Please Click Here To <Link to={'/register'}>Register</Link></p>
                </div>
                }
        </Form>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Auth