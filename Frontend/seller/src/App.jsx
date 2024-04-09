import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login.jsx';
import Register from './components/Register.jsx'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'


function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>

    </Routes>
    
    </BrowserRouter>
  )
}

export default App