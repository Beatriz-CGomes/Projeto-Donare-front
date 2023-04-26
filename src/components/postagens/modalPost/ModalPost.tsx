import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import { Box, Modal } from "@mui/material";
import React from "react";
import CadastroPost from "../cadastrarPost/CadastroPost";
import { Avatar, Button, Card, CardContent, IconButton, Typography } from "@material-ui/core";
import PhotoIcon from '@material-ui/icons/Photo';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

import './ModalPost.css'

//Função para centralizar Modal
function ModalStyle(){
    const top=50;
    const left=50;

    return{
        top:`${top}%`,
        left:`${left}%`,
        transform: `translate(-${top}%,-${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 800,
            height: 800,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(8, 4, 3),
        },
    }),
);


function ModalPost() {

    const estilo = useStyles();

    const [modalStyle] = React.useState(ModalStyle)
    const [open, setOpen] = React.useState(false)

    //função para abrir modal
    const abreModal = () => {
        setOpen(true)
    }

    //função para fechar modal
    const fechaModal = () => {
        setOpen(false)
    }

    const conteudo = (
        <div style={modalStyle} className={estilo.paper}>
            <Box display="flex" justifyContent="center" className="cursor">
                <CloseIcon onClick={fechaModal} />
            </Box>

            <CadastroPost />
        </div>
    )

    return (
        <Card className="card-publicar" variant="outlined">
            <CardContent className="display-flex-row">
                <Avatar>D</Avatar>
                <Button className="botao-postagem" variant="outlined" onClick={abreModal}>Faça sua Postagem</Button>
                <Modal open={open} onClose={fechaModal} aria-labelledby='simple-modal-title' aria-describedby='simple-modal-description'>
                    {conteudo}
                </Modal>
            </CardContent>
            <hr />
            <CardContent className="bottom-bar">
                <Box >
                <IconButton className="icones-barra">
                <PhotoIcon fontSize="large" />
                </IconButton>
                <Typography variant="body2">Carregue uma foto</Typography>
                </Box>

                <Box>
                    <IconButton className="icones-barra">
                        <EmojiEmotionsIcon fontSize="large"/>
                    </IconButton>
                    <Typography variant="body2">Sentimento/Emoção</Typography>
                </Box>

                <Box>
                    <IconButton className="icones-barra">
                       <EventAvailableIcon fontSize="large"/> 
                    </IconButton>
                    <Typography variant="body2">Evento</Typography>
                </Box>
            </CardContent>

        </Card>
    )
}

export default ModalPost;