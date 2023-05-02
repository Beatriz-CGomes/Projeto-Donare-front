import React, { useEffect, useState } from "react";
import './Perfil.css'
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/TokensReducer";
import User from "../../models/User";
import { buscarId } from "../../services/Service";
import { Container, TextField, Typography } from "@material-ui/core";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

function Perfil() {

    let history = useNavigate()

    // Pega o ID guardado no Store
    const id = useSelector<UserState, UserState["id"]>(
        (state) => state.id
    );

    // Pega o Token guardado no Store
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )

    const [user, setUser] = useState<User>({
        id: +id,    // Faz uma conversão de String para Number
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        nickname: '',
        tipo: 1,
    })

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history("/login")
        }
    }, [token])

    // Métedo para pegar os dados de um Usuário especifico pelo ID
    async function findById(id: string) {
        await buscarId(`/usuarios/${id}`, setUser, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    return (
        <>
            <Container>
                <Box className="perfil-content">
                    <img src={user.foto} alt="foto usuário" className="imagem-perfil" />
                    <EmojiEventsIcon className="trofeu"/>

                    <Box className="perfil-dados ">
                        <Box className="perfil-campos">
                            <Typography>Nome:</Typography>
                            <TextField className="bold-text" value={user.nome} variant="outlined" fullWidth />
                        </Box>

                        <Box className="perfil-campos">
                            <Typography>Nickname:</Typography>
                            <TextField value={user.nickname} variant="outlined" fullWidth> </TextField>
                        </Box>

                        <Box className="perfil-campos">
                            <Typography>Tipo de perfil:</Typography>
                            <TextField value={user.tipo} variant="outlined" fullWidth> </TextField>
                        </Box>

                        <Box className="perfil-campos">
                        <Typography>Usuário:</Typography>
                        <TextField value={user.usuario} variant="outlined" fullWidth> </TextField>
                        </Box>
                    </Box>

                </Box>
            </Container>
        </>
    );
}

export default Perfil;