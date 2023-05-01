import React from 'react';
import './Footer.css';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/TokensReducer';

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token !== "") {
    footerComponent =
      <Grid container className='rodape' direction='row' justifyContent='center' alignItems='center'>
        <Grid className='content' item alignItems='center' xs={12} >



          <Typography className='text-footer' variant='subtitle2'>Suporte</Typography>
          <Typography className='text-footer' variant='subtitle2'>Termos e Serviços</Typography>
          <Typography className='text-footer' variant='subtitle2'>Diretrizes da Comunidade</Typography>
          <Typography className='text-footer' variant='subtitle2'>Sobre-Nós</Typography>
          <Typography className='text-footer' variant='subtitle2'>Dúvidas</Typography>


        </Grid>

        <Box className='content2' justifyContent='center'>
          <Typography className='text-footer2' variant='subtitle2'>Donare Corporation © 2023</Typography>
        </Box>



      </Grid>
  }



  return (
    <>
      {footerComponent}
    </>
  );
};

export default Footer;
