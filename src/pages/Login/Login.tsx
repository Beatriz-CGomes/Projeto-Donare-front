import React, { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import GoogleIcon from '@mui/icons-material/Google';
import UserLogin from '../../models/UserLogin';

import './Login.css';
import { useDispatch } from 'react-redux';
import { addID, addToken } from '../../store/tokens/Actions';
import { toast } from "react-toastify";


function Login() {
    let history = useNavigate();


    const dispatch = useDispatch();
    const [token, setToken] = useState('');


    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        nickname: '',
        tipo: 0,
        token: ''
    });

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        nickname: '',
        tipo: 1,
        token: ''

    })


    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            history('/home')
        }
    }, [token])

    useEffect(() => {
        if (respUserLogin.token !== "") {
            console.log("Token:" + respUserLogin.token)
            console.log("ID: " + respUserLogin.id)

            dispatch(addToken(respUserLogin.token))
            dispatch(addID(respUserLogin.id.toString()))
            history('/home')
        }
    }, [respUserLogin.token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {

            await login(`/usuarios/logar`, userLogin, setRespUserLogin)

            toast.info('Usuário logado com sucesso', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } catch (error) {

            toast.info('Dados do usuário incorretos, erro ao logar', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (

        <Grid container justifyContent='center' alignItems='center' className='bg-color'>
            <Grid item xs={5} className=''>


                <form className='form-login login-top' onSubmit={onSubmit}>
                    <Typography variant="h6" className='texto1'>Conecte-se</Typography>

                    <TextField label="Email ou telefone" className='input-form' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='usuario' variant='outlined' margin='normal' name='usuario' fullWidth />

                    <TextField label="Senha:" className='input-form' value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} id='senha' type='password' variant='outlined' margin='normal' fullWidth name='senha' />

                    <Box textAlign='center' marginTop={2} display='flex' justifyContent="left">
                        <Typography variant="h6" className='texto2' style={{ fontWeight: 'bold' }}>Esqueceu a senha? </Typography>
                    </Box>


                    <Box textAlign='center' justifyContent="center" marginTop={2} display='flex'>
                        <Button type='submit' className='buttom'>Entrar
                        </Button>
                    </Box>

                    <Box display='flex' className='centralizar' justifyContent='left' marginTop={3}>
                        <Box>
                            <Typography variant='subtitle1' gutterBottom align='center' className='chamada1'>Não tem uma conta? </Typography>
                        </Box>


                        <Link to="/cadastrar" style={{ textDecoration: "none" }}>
                            <Typography variant='subtitle1' gutterBottom align='center' className='chamada2'>Cadastre-se </Typography>
                        </Link>
                    </Box>

                    <Box display='row' justifyContent='left' marginTop={1}>
                        <Typography className='hr' > <hr className='hr' /></Typography>
                    </Box>

                    <Box display='flex' alignItems="center" className='fundo'>
                        <Box className='google-itens'>
                        <GoogleIcon className='redes' />
                        <Typography gutterBottom align='center' className='google' >Continuar com o Google </Typography>
                        </Box>
                    </Box>
                </form>



            </Grid>
            <Grid item xs={7} className='imagem'>
            </Grid>



        </Grid >
    );
}

export default Login;