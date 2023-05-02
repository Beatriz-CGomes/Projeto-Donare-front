import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, CardActions, CardContent } from "@material-ui/core";
import { Collapse, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import './Home.css'
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CadastroPost from "../../components/postagens/cadastrarPost/CadastroPost";
import ModalPost from "../../components/postagens/modalPost/ModalPost";
import ListaPostagem from "../../components/postagens/listarPost/ListaPost";
import { useSelector } from "react-redux";
import { UserState } from "../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import User from "../../models/User";
import { buscarId } from "../../services/Service";


function Home() {
    
    let navigate = useNavigate()

    const id = useSelector<UserState,UserState['id']>(
        (state)=>state.id
    )

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );

    const [user,setUser] = useState<User>({
        id: +id,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        nickname:'',
        tipo: 1
    })

    //pegar os dados do usuario pelo ID:
    async function findById(id:string) {
        await buscarId(`/usuarios/${id}`,setUser,{
            headers:{
                'Authorization':token
            }
        })
    }

    useEffect(()=>{
        if(id !== undefined){
            findById(id)
        }
    },[id])


    //variaveis para a expansão do card
    const [expanded, setExpanded] = React.useState(false)

    //função para abrir e fechar o card
    const clickExpandir = () => {
        setExpanded(!expanded);
    }

    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            navigate('/login')
        }
    }, [token])



    return (
        <>
            <Grid direction="row" justifyContent="center" container className="bg-color">
                <Grid item xs={4}>
                    <Box className="box">
                        <Card variant="outlined" className="card">
                            <CardContent className="card-content">
                                <img src={user.foto} className="foto-usuario padding-top-bot" alt="" />
                                <Typography variant="h5" className="padding-top-bot titulo">{user.nome}</Typography>
                                <Typography className="padding-top-bot" color="textSecondary">{user.nickname}</Typography>
                                <Typography className="padding-top-bot" color="textSecondary">Tipo: {user.tipo === 0 ? 'Admin' : 'Pessoa Fisica'}</Typography>
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
                <Grid item xs={4} className="teste">
                    <ModalPost />
                    <Grid container direction="column-reverse">
                        <Grid item><ListaPostagem /></Grid>
                    </Grid>
                    
                </Grid>

                <Grid item xs={4}>
                    <Card variant="outlined" className="card2">
                        <CardContent className="non-padding">
                            <Typography variant="h6" className="titulo">Últimas notícias Sobre ONGs:</Typography>

                            <Box className="padding-top-bot padding-left clickable">
                                <a href="https://www.jornaldebarueri.com.br/terceiro-setor/agencia-do-bem-lanca-edital-para-selecao-de-ongs-incluindo-barueri/"
                                    target="_blank">
                                    <Typography variant="subtitle1">• Agência do Bem lança edital para seleção...</Typography></a>
                                <Typography variant="subtitle2">Data: 22/04/2023</Typography>

                            </Box>

                            <Box className="padding-top-bot padding-left clickable">
                                <a href="https://noticias.uol.com.br/ultimas-noticias/agencia-brasil/2023/04/23/ong-oferece-oficinas-de-criacao-artistica-para-pessoas-lgbtqia.htm"
                                    target="_blank">
                                    <Typography variant="subtitle1">• ONG oferece oficinas de criação artistica...</Typography></a>
                                <Typography variant="subtitle2" >Data: 18/04/2023</Typography>

                            </Box>

                            <Box className="padding-top-bot padding-left clickable">
                                <a href="https://propmark.com.br/governo-empresas-e-ongs-onde-esta-a-confianca-dos-brasileiros/"
                                    target="_blank">
                                    <Typography variant="subtitle1">• Governo,Empresas e Ongs: Onde está a...</Typography></a>
                                <Typography variant="subtitle2" >Data: 29/04/2023</Typography>

                            </Box>

                            <Box className="padding-top-bot padding-left clickable">
                                <a href="https://www.metropoles.com/colunas/e-o-bicho/conheca-o-trabalho-de-ongs-que-protegem-a-fauna-do-cerrado-brasiliense"
                                    target="_blank">
                                    <Typography variant="subtitle1">• Conheça o trabalho de ONGs que protegem...</Typography></a>
                                <Typography variant="subtitle2">Data: 22/04/2023</Typography>
                            </Box>

                            <Box className="padding-top-bot padding-left clickable">
                                <a href="https://observatorio3setor.org.br/observatorio-em-movimento/parcerias-entre-grandes-ongs-e-empreendedores-sociais-independentes-ainda-sao-raras/"
                                    target="_blank">
                                    <Typography variant="subtitle1">• Parceria entre grandes ONGs e empreende...</Typography></a>
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
                            <Typography className="titulo">Algumas ONGs para seguir: </Typography>
                            <ul>
                                <li className="clickable">WWF Brasil</li>
                                <li className="clickable">Green Peace</li>
                                <li className="clickable">Instituto Cuida de Mim</li>
                                <li className="clickable">Beija-Flores Solidários</li>
                                <li className="clickable">Amigos do bem</li>
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
