import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/estaticos/navbar/Navbar'
import Login from './pages/Login/Login'
import Cadastro from "./pages/Cadastro/Cadastro"
import Home from './pages/Home/Home'
import Footer from './components/estaticos/footer/Footer'
import './App.css';
import CadastroTema from './components/temas/cadastroTema/CadastroTema'
import ListaTemas from './components/temas/listaTemas/ListaTemas'
import DeletarTema from './components/temas/deletarTema/DeletarTema'
import { Provider } from 'react-redux'
import store from './store/Store'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import ListaPostagem from './components/postagens/listarPost/ListaPost'
import CadastroPost from './components/postagens/cadastrarPost/CadastroPost'
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem'
import Perfil from './pages/Perfil/Perfil'
import Redirect from './components/redirect/Redirect'

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer/>
        <BrowserRouter>
          <Navbar />
          <div className='tam'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path="/cadastrar" element={<Cadastro />} />
            <Route path='/home' element={<Home />} />
            <Route path='/perfil' element={<Perfil/>}/>
            <Route path='/temas' element={<ListaTemas />} />
            <Route path='/formTema' element={<CadastroTema />} />
            <Route path='/formTema/:id' element={<CadastroTema />} />
            <Route path='/deletarTema/:id' element={<DeletarTema />} />
            <Route path="/posts" element={<Redirect/>}/>
            <Route path="/formPostagem" element={<CadastroPost/>}/>
            <Route path="/formPostagem/:id" element={<CadastroPost/>}/>
            <Route path="/deletarPostagem/:id" element={<DeletarPostagem/>}/>
          </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
