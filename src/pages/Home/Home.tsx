import React from "react";
import { Avatar, Card, CardActions, CardContent} from "@material-ui/core";
import { Collapse, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import './Home.css'
import { Box} from "@mui/material";


function Home() {

    //variaveis para a expansão do card
    const [expanded,setExpanded] = React.useState(false)

    //função para abrir e fechar o card
    const clickExpandir = () =>{
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
                                <Typography className="padding-top-bot" variant="subtitle1">Mais opcões</Typography>
                                <IconButton onClick={clickExpandir} aria-expanded={expanded} aria-label="show more">
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>

                            <Collapse in={expanded} timeout='auto' unmountOnExit>
                                <CardContent>
                                    <Typography className="padding-top-bot">Notícias</Typography>
                                    <Typography className="padding-top-bot">ONGs</Typography>
                                    <Typography className="padding-top-bot">Grupos</Typography>
                                    <Typography className="padding-top-bot">Faça sua Doação!</Typography>
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
                    <CardContent>
                        <Typography variant="h6" className="titulo">Últimas notícias Sobre ONGs:</Typography>

                        <Box className="padding-top-bot">
                        <Typography variant="subtitle1">• Agência do Bem lança edital para seleção de ONGs ...</Typography>
                        <Typography variant="subtitle2" >Data: 22/04/2023</Typography>
                        </Box>

                        <Box className="padding-top-bot">
                        <Typography variant="subtitle1">• Cadastro de ONGs para participar no Conselho...</Typography>
                        <Typography variant="subtitle2" >Data: 18/04/2023</Typography>
                        </Box>

                        <Box className="padding-top-bot">
                        <Typography variant="subtitle1">• Governo,Empresas e Ongs: Onde está a confiança...</Typography>
                        <Typography variant="subtitle2" >Data: 29/04/2023</Typography>
                        </Box>

                        <Box className="padding-top-bot">
                        <Typography variant="subtitle1">• Conheça o trabalho de ONGs que protegem a fauna ...</Typography>
                        <Typography variant="subtitle2">Data: 22/04/2023</Typography>
                        </Box>
                        
                        <Box className="padding-top-bot">
                        <Typography variant="subtitle1">• Parceria entre grandes ONGs e empreendedores ...</Typography>
                        <Typography variant="subtitle2" >Data: 22/04/2023</Typography>
                        </Box>

                        <Box className="padding-top-bot flex-row">
                            <Typography className="margin-right-2">Ver mais notícias</Typography>
                            <IconButton className="non-padding">
                                <ArrowForwardIcon/>
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
