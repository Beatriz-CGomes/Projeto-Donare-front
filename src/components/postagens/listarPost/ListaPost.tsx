import { Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import { IconButton, Typography, Menu, MenuItem, Fade } from '@material-ui/core'
import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Postagem from '../../../models/Postagem';
import { useSelector } from "react-redux";
import { useNavigate, Link, useParams } from 'react-router-dom'
import { atualizar, buscar } from '../../../services/Service';
import { UserState, reducer } from '../../../store/tokens/TokensReducer';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import './ListaPost.css'
import { toast } from 'react-toastify'
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import { Box } from '@mui/material';

function ListaPostagem() {
  const { id } = useParams<{ id: string }>();

  const [posts, setPosts] = useState<Postagem[]>([])

  const [postagem, setPostagem] = useState<Postagem>()

  const token = useSelector<UserState, UserState['tokens']>(
    (state) => state.tokens
  )

  let navigate = useNavigate()

  useEffect(() => {
    if (token === '') {
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
      navigate('/login')
    }
  }, [token])

  async function listaPostagem() {
    await buscar(`/postagens`, setPosts, {
      headers: {
        'Authorization': token
      }
    })
  }

  useEffect(() => {
    listaPostagem()
  }, [posts.length])

  //abrir o menu
  const [menu, setMenu] = React.useState<null | HTMLElement>(null);
  const abre = Boolean(menu)

  const abreMenu = (e: React.MouseEvent<HTMLElement>) => {
    setMenu(e.currentTarget);
  }

  const fechaMenu = () => {
    setMenu(null)
  }

  //método curtir
  async function curtir(id: number) {
    await atualizar(`/postagens/curtir/${id}`, postagem, setPostagem, {
      headers: {
        'Authorization': token
      }
    })
    listaPostagem()
  }

  function buttonLiked(curtidas: number | null) {
    if (curtidas !== null && curtidas > 0)
      return "isLiked"
  }

  return (
    <>{
      posts.map(post => (
        <Card variant='elevation' className='cor-cartao'>
          <Box className='header-postagens' display='flex'>
            <CardHeader
              avatar={<img src={post.usuario?.foto} alt="foto" className='foto' />}
              title={<Typography>{post.usuario?.nome}</Typography>}
              subheader={<Typography>{post.tema?.nome}</Typography>}
            ></CardHeader>

            <Box className='icones-postagens'>
              <Link to={`/formPostagem/${post.id}`}>
              <IconButton >
              <CreateIcon />
              </IconButton>
              </Link>

              <Link to={`/deletarPostagem/${post.id}`}>
              <IconButton >
              <DeleteIcon />
              </IconButton>
              </Link>
              
            </Box>
          </Box>

          <CardContent>
            <Typography variant='body1'>{post.titulo}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.texto}
            </Typography>
            <Box display='flex' justifyContent='center'>
            <img src={post.imagem !== '' ? post.imagem : ''} alt="" className='imagem-postagem' />
            </Box>
          </CardContent>

          <CardActions className='post-icones'>
            <IconButton className='curtido' aria-label="Curtir" onClick={() => { curtir(post.id) }}>
              <FavoriteIcon className={buttonLiked(post.curtidas)} />
              <Typography variant='body2'>{post.curtidas}</Typography>
            </IconButton>

            <IconButton aria-label="Doar">
              <MonetizationOnIcon />
            </IconButton>

            <IconButton aria-label='Comentarios'>
              <ChatBubbleIcon />
            </IconButton>

          </CardActions>
        </Card>
      ))}
    </>
  );
}

export default ListaPostagem;