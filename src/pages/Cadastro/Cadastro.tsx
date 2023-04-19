import "./Cadastro.css";
import { Button, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import User from "../../models/User";
import { cadastro } from "../../services/Service";

function Cadastrar() {
    //Criando variável de redirecionamento
    let navigate = useNavigate();

    const [verificarSenha, setVerificarSenha] = useState<String>('');

    //Criando objeto padrão
    const [user, setUser] = useState<User>({
        id:0,
        nome:'',
        usuario:'',
        senha:'',
        foto:'',
        nickname: '',
        tipo:1
    })

    //Criando objeto padrão
    const [userResult,setUserResult] = useState<User>({
        id:0,
        nome:'',
        usuario:'',
        senha:'',
        foto:'',
        nickname: '',
        tipo:1
    })

    //Função para confirmar senha
    function verificaSenhaHandle(e:ChangeEvent<HTMLInputElement>){
        setVerificarSenha(e.target.value)
    }

    //função para atualizar os dados do objeto padrão
    function updateModel(e:ChangeEvent<HTMLInputElement>){
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    async function cadastrar(e:ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if(verificarSenha==user.senha){
            await cadastro(`/usuarios/cadastrar`,user,setUserResult)
            alert('Usuário cadastrado com Sucesso!')
        }
        else{
            alert("Por favor, preencha os dados corretamente!")
        }
    }

    useEffect(()=>{
        if(userResult.id != 0){
            navigate('/login')
            console.log(userResult)
        }
    },[userResult])

    return (
        <Grid container className="bg-page" justifyContent="center">
            <Grid item alignItems="center">

                <form onSubmit={cadastrar}>
                    <Typography className="titulo">Cadastre-se!</Typography>

                    <Typography className="text-form">Nome completo:</Typography>
                    <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name="nome" id="nome" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">Usuário:</Typography>
                    <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name='usuario' id="usuario" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">Senha:</Typography>
                    <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} type="password" name="senha" id="senha" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">Confirme sua senha: </Typography>
                    <TextField value={verificarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => verificaSenhaHandle(e)} type="password" name="confirmaSenha" id='confirmaSenha' variant="outlined" margin="normal" fullWidth/>
                    
                    <Typography className="text-form">Insira o link da sua foto(opcional):</Typography>
                    <TextField value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name="foto" id="foto" variant="outlined" margin="normal" fullWidth/>
 
                    <Typography className="text-form">Digite o Nickname: </Typography>
                    <TextField value={user.nickname} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} name="nickname" id="nickname" variant="outlined" margin="normal" fullWidth />

                    <Typography className="text-form">Escolha o tipo de perfil:</Typography>
                    <input type="number" value={user.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}/>



                        <Box textAlign="center" marginTop={2} display='flex'>
                            <Link to='/login'>
                            <Button color="secondary" variant="contained" className="buttom" style={{textDecoration:'none'}}>Cancelar</Button>
                            </Link>

                            <Button type="submit" className="buttom">Cadastrar</Button>
                        </Box>
                    
                </form>

            </Grid>
        </Grid>
    );
}

export default Cadastrar;