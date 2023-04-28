import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react";
import Tema from "../../../models/Tema";
import { buscar } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from "react-toastify";

function ListaTemas() {
    const [temas, setTemas] = useState <Tema[]>([])
    let navigate = useNavigate()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    
    useEffect(()=>{
        if(token === "") {
            toast.info('Você precisa estar logado para ter acesso a esse conteúdo', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
              });
            navigate("/login")
        }
    },[token])

    async function buscaTema() {
        await buscar(`/temas`, setTemas, {
        headers: {
            "Authorization": token
        }    
        } )
    }

    useEffect (()=>{
        buscaTema()
    },[temas.length])
    return (
        <>
        {temas.map(tema=>(
            <Box m={2} className="tamanho">
                <Card variant="outlined">
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            {tema.nome}
                        </Typography>

                        <Typography variant="h5" component='h2'>
                            {tema.descricao}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display='flex' justifyContent='center' mb={1.5}>

                            <Link to={`/formTema/${tema.id}`} className="text-decorator none">
                                <Box mx={1}>
                                    <Button variant="contained" className="marginLeft" size="small" color="primary">
                                        Atualizar
                                    </Button>
                                </Box>
                            </Link>

                            <Link to={`/deletarTema/${tema.id}`} className="text-decorator none">
                                <Box mx={1}>
                                    <Button variant="contained" size="small" color="secondary">
                                        Deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions >
                </Card >
            </Box >
            ))}
        </>
    )
}

export default ListaTemas;