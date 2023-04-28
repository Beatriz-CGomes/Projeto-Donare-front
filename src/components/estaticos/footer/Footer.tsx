import React from 'react';
import './Footer.css';
import { Grid, Typography } from '@material-ui/core';
import { Box } from '@mui/material';

function Footer() {
  return (
    <>
      <Grid className='rodape' container direction='row-reverse' justifyContent='center' alignItems='center'>
          <Grid className='content' item alignItems='center' xs={12}>
              <Typography className='text-footer' variant='subtitle2'>Termos de Serviço</Typography>
              <Typography className='text-footer' variant='subtitle2'>Diretrizes da Comunidade</Typography>
              <Typography className='text-footer' variant='subtitle2'>Sobre</Typography>
              <Typography className='text-footer' variant='subtitle2'>Dúvidas</Typography>
              <Typography className='text-footer' variant='subtitle2'>Donare Corporation © 2023</Typography>
          </Grid>
      </Grid>
    </>
  );
};

export default Footer;
