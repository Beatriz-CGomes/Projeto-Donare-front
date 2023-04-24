import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar'
import Login from './pages/Login/Login'
import Cadastro from "./pages/Cadastro/Cadastro"
import Home from './pages/Home/Home'
import Footer from './components/estaticos/footer/Footer'
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/login' element={<Login />}/>
          <Route path="/cadastrar" element={<Cadastro />}/>
          <Route path='/home' element={<Home />}/>
        </Routes>
        { <Footer/> }
      </BrowserRouter>
    </>
  );
}

export default App;
