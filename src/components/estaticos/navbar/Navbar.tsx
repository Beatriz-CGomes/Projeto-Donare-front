import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

import './Navbar.css'
function Navbar() {
    return (
        <>
            <AppBar position="static" className='color'>
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            Dom
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to='/home' style={{ textDecoration: 'none', color: 'white' }}>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>

                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar Tema
                            </Typography>
                        </Box>

                        <Link to='/login' style={{ textDecoration: 'none', color: 'white' }}>
                            <Box mx={1} className='cursor' >
                                <Typography variant="h6" color="inherit">
                                    Sair
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
