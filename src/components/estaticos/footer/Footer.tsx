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
              footerComponent=
              <Grid className='rodape' container direction='row-reverse' justifyContent='center' alignItems='center'>
              <Grid className='content' item alignItems='center' xs={12}>
                <Typography className='text-footer' variant='subtitle2'>Termos de Serviço</Typography>
                <Typography className='text-footer' variant='subtitle2'>Diretrizes da Comunidade</Typography>
                <Typography className='text-footer' variant='subtitle2'>Sobre</Typography>
                <Typography className='text-footer' variant='subtitle2'>Dúvidas</Typography>
                <Typography className='text-footer' variant='subtitle2'>Donare Corporation © 2023</Typography>
              </Grid>
            </Grid>
            }



            return (
              <>
                {footerComponent}
              </>
            );
          };

export default Footer;
