import React from "react";
import { Avatar, Card, CardActions, CardContent } from "@material-ui/core";
import { Collapse, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import './Home.css'
import { Box } from "@mui/material";
import { Link } from "react-router-dom";


function Home() {

    //variaveis para a expansão do card
    const [expanded, setExpanded] = React.useState(false)

    //função para abrir e fechar o card
    const clickExpandir = () => {
        setExpanded(!expanded);
    }



    return (
        <>
            <Grid direction="row" justifyContent="center" container className="bg-color">
                <Grid item xs={3}>
                    <Box className="box">
                        <Card variant="outlined" className="card">
                            <CardContent className="card-content">
                                <Avatar className="icons padding-top-bot">D</Avatar>
                                <Typography variant="h5" className="padding-top-bot titulo">Nome do usuário</Typography>
                                <Typography className="padding-top-bot" color="textSecondary">Nickname do Usuario</Typography>
                                <Typography className="padding-top-bot" color="textSecondary">Usuário Tipo 1</Typography>
                            </CardContent>

                            <CardActions className="box">
                                <Typography className="padding-top-bot" >Mais opcões</Typography>
                                <IconButton onClick={clickExpandir} aria-expanded={expanded} aria-label="show more">
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>

                            <Collapse in={expanded} timeout='auto' unmountOnExit>
                                <CardContent className="non-padding">
                                    <Link to='#' className="clickable">
                                        <Typography className="padding-top-bot padding-left clickable">Notícias</Typography>
                                    </Link>

                                    <Link to='#' className="clickable">
                                    <Typography className="padding-top-bot padding-left clickable">ONGs</Typography>
                                    </Link>

                                    <Link to='#' className="clickable">
                                    <Typography className="padding-top-bot padding-left clickable">Grupos</Typography>
                                    </Link>

                                    <Link to='#' className="clickable">
                                    <Typography className="padding-top-bot padding-left clickable">Faça sua Doação!</Typography>
                                    </Link>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Box>

                </Grid>
                <Grid item xs={6}>
                    <Paper className="altura" />
                </Grid>

                <Grid item xs={3}>
                    <Card variant="outlined" className="card2">
                        <CardContent className="non-padding">
                            <Typography variant="h6" className="titulo">Últimas notícias Sobre ONGs:</Typography>

                            <Box className="padding-top-bot padding-left clickable">
                                <a href="https://www.jornaldebarueri.com.br/terceiro-setor/agencia-do-bem-lanca-edital-para-selecao-de-ongs-incluindo-barueri/"
                                    target="_blank">
                                    <Typography variant="subtitle1">• Agência do Bem lança edital para seleção de ONGs ...</Typography></a>
                                    <Typography variant="subtitle2">Data: 22/04/2023</Typography>
                                
                            </Box>

                            <Box className="padding-top-bot padding-left clickable">
                                <a href="https://noticias.uol.com.br/ultimas-noticias/agencia-brasil/2023/04/23/ong-oferece-oficinas-de-criacao-artistica-para-pessoas-lgbtqia.htm"
                                    target="_blank">
                                    <Typography variant="subtitle1">• ONG oferece oficinas de criação artistica pra pessoas...</Typography></a>
                                    <Typography variant="subtitle2" >Data: 18/04/2023</Typography>
                                
                            </Box>

                            <Box className="padding-top-bot padding-left clickable">
                                <a href="https://propmark.com.br/governo-empresas-e-ongs-onde-esta-a-confianca-dos-brasileiros/"
                                    target="_blank">
                                    <Typography variant="subtitle1">• Governo,Empresas e Ongs: Onde está a confiança...</Typography></a>
                                    <Typography variant="subtitle2" >Data: 29/04/2023</Typography>
                                
                            </Box>

                            <Box className="padding-top-bot padding-left clickable">
                                <a href="https://www.metropoles.com/colunas/e-o-bicho/conheca-o-trabalho-de-ongs-que-protegem-a-fauna-do-cerrado-brasiliense"
                                    target="_blank">
                                    <Typography variant="subtitle1">• Conheça o trabalho de ONGs que protegem a fauna ...</Typography></a>
                                    <Typography variant="subtitle2">Data: 22/04/2023</Typography>
                            </Box>

                            <Box className="padding-top-bot padding-left clickable">
                                <a href="https://observatorio3setor.org.br/observatorio-em-movimento/parcerias-entre-grandes-ongs-e-empreendedores-sociais-independentes-ainda-sao-raras/"
                                    target="_blank">
                                    <Typography variant="subtitle1">• Parceria entre grandes ONGs e empreendedores ...</Typography></a>
                                    <Typography variant="subtitle2">Data: 22/04/2023</Typography>
                                
                            </Box>

                            <Box className="padding-top-bot flex-row">
                                <Typography className="margin-right-2 negrito">Ver mais notícias</Typography>
                                <IconButton className="non-padding">
                                    <ArrowForwardIcon />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>

                    <Card variant="outlined" className="card2">
                        <CardContent>
                            <Typography className="titulo">Recomendações de ONGs para seguir: </Typography>
                            <ul>
                                <li>WWF Brasil</li>
                                <li>Green Peace</li>
                                <li>Instituto Cuida de Mim</li>
                                <li>Beija-Flores Solidários</li>
                                <li>Amigos do bem</li>
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
