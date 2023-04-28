import React from "react";
import "./Navbar.css"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link, useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";


function Navbar() {

  const[token,setToken]=useLocalStorage('token')

  let navigate = useNavigate()

  function goLogout(){
    setToken('')
    alert('Usuário deslogado com sucesso!')
    navigate('/login')
  }

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" className="color">
        <Toolbar variant="dense" className="container">
          <Box >
            <img src="https://i.imgur.com/iAIRTMo.png" alt="Logo donare" width="150px" height="150px" className="imagemlogo" />
          </Box>
          
          <Box display='flex' justifyContent='center'>

            <Link to='/home'>
            <Box mx={1} className="dis-flex-row conteudoNav">
              <HomeIcon className="icones" />
              <Typography className="texto-navbar" variant="h6"> Home </Typography>
            </Box>
            </Link>

            <Link to='/posts'>
            <Box mx={1} className="dis-flex-row conteudoNav">
              <PostAddIcon className="icones"/>
              <Typography className="texto-navbar" variant="h6">Postagens</Typography>
            </Box>
            </Link>

            <Link to='/temas'>
            <Box mx={1} className="dis-flex-row conteudoNav">
              <AssignmentIcon className="icones"/>
              <Typography className="texto-navbar" variant="h6">Temas</Typography>
            </Box>
            </Link>


            <Box mx={1} className="dis-flex-row cursor conteudoNav" onClick={goLogout}>
              <LogoutIcon className="icones"/>
              <Typography className="texto-navbar" variant="h6">Logout</Typography>
            </Box>

          </Box>

          <Box className="barraPesquisa">
              <Box className="pesquisa icone-pesquisa">
              <SearchIcon className=""/>
              </Box>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
