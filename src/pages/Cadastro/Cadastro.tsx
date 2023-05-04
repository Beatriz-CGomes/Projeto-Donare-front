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

        console.log(user)
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
 
             
            <Grid item xs={6} className="imagemCadastro" />

            <Grid item xs={6} alignItems="center">

                <form className="grid-form"  onSubmit={cadastrar}>
                    <Typography  variant="h6" className="text-titulo" align="left">Cadastre-se</Typography>
                    
                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group" className="text-form">Selecione:</FormLabel>
                        <RadioGroup row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={user.tipo}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} >
                            <FormControlLabel name="tipo" control={<Radio />} value="0" label="Admin"  style={{marginLeft : '40px'}}/>
                            <FormControlLabel name="tipo" control={<Radio />} value="1" label="Pessoa física" style={{marginLeft : '-1px'}} />
                            <FormControlLabel name="tipo" control={<Radio />} value="2" label="Pessoa jurídica" style={{marginLeft : '-4px'}} />
                        </RadioGroup>
                    </FormControl>

                    <TextField label='*Nome: ' className="formulario" value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name="nome" id="nome" variant="outlined" margin="normal" fullWidth />
                    <TextField label='*Nickname: ' className="formulario" value={user.nickname} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name="nickname" id="nickname" variant="outlined" margin="normal" fullWidth />
                    <TextField label='*Email: ' className="formulario" value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name='usuario' id="usuario" variant="outlined" margin="normal" fullWidth />
                    <TextField label='*Senha(mínimo 8 digitos):' className="formulario" value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} type="password" name="senha" id="senha" variant="outlined" margin="normal" fullWidth />
                    <TextField label="Confirme sua senha:" className="formulario" value={verificarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => verificaSenhaHandle(e)} type="password" name="confirmaSenha" id='confirmaSenha' variant="outlined" margin="normal" fullWidth />
                    <TextField label='Link da foto do perfil' className="formulario" value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name="foto" id="foto" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form-foot">* campos obrigatórios</Typography>

                    <Box textAlign="center" marginTop={2} display='flex' justifyContent='center'>
                        <Button type="submit" className="botao">
                            Cadastrar
                        </Button>
                    </Box>

                    <Box display="flex" className='texto-extra' justifyContent='center'>
                        <Typography className="login-text">Já possui uma conta?
                        <Link to="/login" className="login-link">Fazer login</Link></Typography>
                    </Box>

                </form>

            </Grid>


        </Grid>
    );
}

export default Cadastrar;