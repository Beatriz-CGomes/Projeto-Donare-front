import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar'
import Login from './pages/Login/Login'
import Cadastro from "./pages/Cadastro/Cadastro"
import Home from './pages/Home/Home'
import Footer from './components/estaticos/footer/Footer'
import './App.css';
import CadastroTema from './components/temas/cadastroTema/CadastroTema'

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
          {/* <Route path='/temas' element{<ListaTemas/>}/> */}
          <Route path='/formTema' element={<CadastroTema/>}/>
          <Route path='/formTema/:id' element={<CadastroTema/>}/>
          {/* <Route path='/deleteTema/:id' element={<DeletarTema/>}/> */}
        </Routes>
        { <Footer/> }
      </BrowserRouter>
    </>
  );
}

export default App;
