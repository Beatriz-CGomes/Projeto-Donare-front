
import "./Navbar.css"

import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';



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
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" className="color">

        <StyledToolbar>

          <Box className="imagemlogo">
            <Typography>
              <img src="https://i.imgur.com/iAIRTMo.png" alt="" width="150px" height="150px" className="imagemlogo" />
            </Typography>
          </Box>


          <Box className="icones">

            <HomeIcon />
            <Typography variant="h6" className="TextoNav"> Home </Typography>

          </Box>



          <Box className="icones">
            <AccountCircleIcon />
            <Typography variant="h6" className="TextoNav">
              Postagens
            </Typography>
          </Box>

          <Box className="icones">
          <AccountCircleIcon />
            <Typography variant="h6" className="TextoNav">
              Temas
            </Typography>
          </Box>

          <Box className="icones">
            <LogoutIcon />
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

