
import "./Navbar.css"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),

  '@media all': {
    minHeight: 128,
  },
}));

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="color">

        <StyledToolbar>

          <Box>
            <Typography variant="h5" noWrap component="div" className="imagemlogo">
              Donare
            </Typography>
          </Box>


          <Box className="alinhamento">
            <IconButton className="icones">
              <HomeIcon />
              <Typography variant="h6" className="TextoNav"> Home </Typography>
            </IconButton>

          </Box>



          <Box>
            <Typography variant="h6" className="TextoNav">
              Postagens
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" className="TextoNav">
              Temas
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" className="TextoNav">
              Logout
            </Typography>
          </Box>



          <Box display='flex' justifyContent='left' alignItems="center" className='barraPesquisa'>
            <IconButton className="pesquisa">
              <SearchIcon />
            </IconButton>
          </Box>



        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

