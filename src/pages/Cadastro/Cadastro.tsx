import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Avatar, Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import User from "../../models/User";
import { cadastro } from "../../services/Service";
import { toast } from "react-toastify";

import "./Cadastro.css";

function Cadastrar() {
    let navigate = useNavigate();

    const [verificarSenha, setVerificarSenha] = useState<String>('');

    const [user, setUser] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        nickname: '',
        tipo: 1
    })

    const [userResult, setUserResult] = useState<User>({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        nickname: '',
        tipo: 1
    })

    function verificaSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setVerificarSenha(e.target.value)
    }

    function updateModel(e: ChangeEvent<HTMLInputElement>) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function cadastrar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (verificarSenha == user.senha) {
            await cadastro(`/usuarios/cadastrar`, user, setUserResult)
            toast.info('Usuário cadastrado com Sucesso!', {
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
        else {
            toast.info('Por favor, preencha os dados corretamente!', {
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

    useEffect(() => {
        if (userResult.id != 0) {
            navigate('/login')
            console.log(userResult)
        }
    }, [userResult])

    return (
        <Grid container className="bg-page" justifyContent="space-around">
 
             
            <Grid item xs={4} className="imagemCadastro" />

            <Grid item xs={5} className="grid-form" alignItems="center">

                <form onSubmit={cadastrar}>
                    <Typography  variant="h6" className="text-titulo" align="left">Cadastre-se</Typography>
                    
                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group" className="text-form">Selecione:</FormLabel>
                        <RadioGroup row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={user.tipo}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} >
                            <FormControlLabel control={<Radio />} value="0" label="Admin"  style={{marginLeft : '40px'}}/>
                            <FormControlLabel control={<Radio />} value="1" label="Pessoa física" style={{marginLeft : '-1px'}} />
                            <FormControlLabel control={<Radio />} value="2" label="Pessoa jurídica" style={{marginLeft : '-4px'}} />
                        </RadioGroup>
                    </FormControl>

                    <Typography className="text-form">*Nome completo:</Typography>
                    <TextField className="formulario" value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name="nome" id="nome" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">*Nickname: </Typography>
                    <TextField className="formulario" value={user.nickname} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name="nickname" id="nickname" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">*Email:</Typography>
                    <TextField className="formulario" value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name='usuario' id="usuario" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">*Senha:</Typography>
                    <TextField className="formulario" value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} type="password" name="senha" id="senha" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">*Confirme sua senha: </Typography>
                    <TextField className="formulario" value={verificarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => verificaSenhaHandle(e)} type="password" name="confirmaSenha" id='confirmaSenha' variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">Link da foto de perfil:</Typography>
                    <TextField className="formulario" value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name="foto" id="foto" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form-foot">* campos obrigatórios</Typography>

                    <Box textAlign="center" marginTop={2} display='flex'>
                        <Button type="submit" className="botao">
                            <Link to="/login" className="link-botao">Cadastrar</Link>
                        </Button>
                    </Box>

                    <Box display="flex">
                        <Typography className="login-text">Já possui uma conta?</Typography>
                        <Link to="/login" className="login-link">Fazer login</Link>
                    </Box>

                </form>

            </Grid>


        </Grid>
    );
}

export default Cadastrar;