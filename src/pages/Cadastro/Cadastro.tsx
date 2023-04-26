import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import User from "../../models/User";
import { cadastro } from "../../services/Service";

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
            alert("Usuário cadastrado com Sucesso!")
        }
        else {
            alert("Por favor, preencha os dados corretamente!")
        }
    }

    useEffect(() => {
        if (userResult.id != 0) {
            navigate('/login')
            console.log(userResult)
        }
    }, [userResult])

    return (
        <Grid container className="bg-page" justifyContent="center">
            <Grid item className="grid-form" alignItems="center">

                <form onSubmit={cadastrar}>
                    <Typography className="text-titulo" align="center">Cadastre-se:</Typography>

                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">Selecione:</FormLabel>
                        <RadioGroup className="select" row
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            value={user.tipo}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} >
                            <FormControlLabel value="1" control={<Radio />} label="Pessoa física" />
                            <FormControlLabel value="2" control={<Radio />} label="Pessoa jurídica" />
                        </RadioGroup>
                    </FormControl>

                    <Typography className="text-form">Nome completo:</Typography>
                    <TextField className="form" value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name="nome" id="nome" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">Usuário:</Typography>
                    <TextField className="form" value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name='usuario' id="usuario" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">Senha:</Typography>
                    <TextField className="form" value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} type="password" name="senha" id="senha" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">Confirme sua senha: </Typography>
                    <TextField className="form" value={verificarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => verificaSenhaHandle(e)} type="password" name="confirmaSenha" id='confirmaSenha' variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">Insira o link da sua foto(opcional):</Typography>
                    <TextField className="form" value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name="foto" id="foto" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">Digite o Nickname: </Typography>
                    <TextField className="form" value={user.nickname} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name="nickname" id="nickname" variant="outlined" margin="normal" fullWidth />

                    <Box textAlign="center" marginTop={2} display='flex'>
                        <Link to='/login'>
                            <Button color="secondary" variant="contained" className="buttom" style={{ textDecoration: 'none' }}>Fazer login</Button>
                        </Link>

                        <Button type="submit" className="buttom">Cadastrar</Button>
                    </Box>

                </form>

            </Grid>
        </Grid>
    );
}

export default Cadastrar;