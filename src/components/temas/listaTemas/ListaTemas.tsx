import { Button, Card, CardActions, CardContent, Fab, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"
import React, { useEffect, useState } from "react";
import Tema from "../../../models/Tema";
import { buscar } from "../../../services/Service";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import './ListaTemas.css'
import AddIcon from '@material-ui/icons/Add';

function ListaTemas() {
    const [temas, setTemas] = useState<Tema[]>([])
    let navigate = useNavigate()

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );


    useEffect(() => {
        if (token === "") {
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
    }, [token])

    async function buscaTema() {
        await buscar(`/temas`, setTemas, {
            headers: {
                "Authorization": token
            }
        })
    }

    useEffect(() => {
        buscaTema()
    }, [temas.length])
    return (
        <>
            <Box className="imagem-ODS">
                <img src="https://i.imgur.com/a0bqat1.png" width='100px' height='100px' />
            </Box>
            <Typography variant="h4" color="textSecondary" className="text-align" gutterBottom>
                O QUE SÃO AS ODS?
            </Typography>

            <Typography variant="subtitle1" className= 'subtitle1' gutterBottom>
                Objetivos De Desenvolvimento Sustentável Da ONU
            </Typography>

            <Typography variant="body1" className="texto-temas">
                Em 2015, a ONU propôs aos seus países membros uma nova agenda de desenvolvimento sustentável para os próximos 15 anos, a Agenda 2030, composta pelos 17 Objetivos de Desenvolvimento Sustentável (ODS).

                Esse é um esforço conjunto, de países, empresas, instituições e sociedade civil. Os ODS buscam assegurar os direitos humanos, acabar com a pobreza, lutar contra a desigualdade e a injustiça, alcançar a igualdade de gênero e o empoderamento de mulheres e meninas, agir contra as mudanças climáticas, bem como enfrentar outros dos maiores desafios de nossos tempos. O setor privado tem um papel essencial nesse processo como grande detentor do poder econômico, propulsor de inovações e tecnologias influenciador e engajador dos mais diversos públicos – governos, fornecedores, colaboradores e consumidores. 
                (Fonte: <a href="https://www.pactoglobal.org.br/ods" target="_blank"> Pacto Global Rede Brasil</a>)
            </Typography>

            <Box className="listagem-temas">
            {temas.map(tema => (
                <Box m={2} className="tamanho">
                    <Card variant="outlined" className= "card-temas">
                        <CardContent >
                            <Typography variant="h5" color="textSecondary" gutterBottom>
                                {tema.nome}
                            </Typography>

                            <Typography variant="h6" component='h2'>
                                {tema.descricao}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display='flex' justifyContent='center' mb={1.5}>

                                <Link to={`/formTema/${tema.id}`} className="text-decorator none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="botoes-atualizar" size="small" color="primary">
                                            Atualizar
                                        </Button>
                                    </Box>
                                </Link>

                                <Link to={`/deletarTema/${tema.id}`} className="text-decorator none">
                                    <Box mx={1}>
                                        <Button className="botoes-deletar" variant="outlined" size="small" >
                                            Deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions >
                    </Card >
                </Box >

            ))}
            </Box>
            <Link to='/formTema'>
            <Fab color="primary" aria-label="add" className="buttonAdd">
                <AddIcon />
            </Fab>
            </Link>
        </>
    )
}

export default ListaTemas;