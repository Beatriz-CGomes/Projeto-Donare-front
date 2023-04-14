import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Footer from './components/estaticos/footer/Footer'
import './App.css'

import Navbar from './components/estaticos/navbar/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
