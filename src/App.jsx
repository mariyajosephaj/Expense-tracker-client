
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Expenses from './pages/Expenses'
import Auth from './pages/Auth'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'
import { useContext } from 'react'
import { tokenContext } from './contexts/TokenAuth'

function App() {
  const {authorisedUser,setAuthorisedUser} = useContext(tokenContext)
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth insideRegister={true}/>} />
       { authorisedUser &&
        <>
        <Route path='/expense' element={<Expenses/>} />
        </>
        }
        <Route path='/*' element={<Pnf/>}/>
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
