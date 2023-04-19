import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';

import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin';

import './Login.css';


function Login() {
     let history = useNavigate();

     const [token,setToken] = useLocalStorage('token');

     const [userLogin, setUserLogin] = useState<UserLogin>({
         id: 0,
         nome: '', 
         usuario: '', 
         senha: '',
         foto: '',
         nickname:'',
         tipo:0,
         token: ''
     });

     function updateModel(e:ChangeEvent<HTMLInputElement>){
         setUserLogin({ 
             ...userLogin,
             [e.target.name]: e.target.value
         })
     }

     useEffect(()=>{
         if(token != ''){
             history('/home')
         }
     },[token])
 
 
     async function onSubmit(e:ChangeEvent<HTMLFormElement>) {
         e.preventDefault();
 
         try{
            
            await login (`/usuarios/logar`,userLogin,setToken)
             
             alert('Usuário logado com sucesso')
         }catch(error){
 
             alert('Dados do usuário incorretos, erro ao logar');
         }
     }

    return (

        <Grid container direction='row' justifyContent='center' alignItems='center' className='bg-color'>

            <Grid item alignItems='center' xs={6} >
                <Box paddingX={10} className='login-top' >
                    <form onSubmit={onSubmit}>
                        <Typography variant="h6" className='texto1'>Bem Vindo</Typography>

                        <Typography className='texto0'>E-mail ou telefone </Typography>
                        <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' variant='outlined' margin='normal' name='usuario' fullWidth className='bordas' />

                        <Typography className='texto0'>Senha</Typography>
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' type='password' variant='outlined' margin='normal' fullWidth className='bordas' name='senha'/>

                            <Box textAlign='center' marginTop={2}>
                                <Typography variant="h6" className='texto2' style={{ fontWeight: 'bold' }}>Esqueceu a senha? </Typography>
                                <Button type='submit' className='buttom'>  Entrar
                                </Button>
                            </Box>
                    </form>

                    <Box display='flex' justifyContent='left' marginTop={2}>

                        <Typography variant='subtitle1' gutterBottom align='center' className='chamada1'>Não tem uma conta? </Typography>
                    </Box>
                    <Link to="/cadastrar" style={{ textDecoration: "none" }}>
                        <Typography variant='subtitle1' gutterBottom align='center' className='chamada2'>Cadastra-se </Typography>
                    </Link>
                </Box>


            </Grid>
            <Grid xs={3} className='imagem'>

            </Grid>
        </Grid>



    );
}

export default Login;