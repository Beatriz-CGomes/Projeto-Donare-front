import { Avatar, Card, CardActions, CardContent, CardHeader } from '@material-ui/core';
import { CardMedia, IconButton, Typography, Menu, MenuItem,Fade } from '@material-ui/core'
import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Postagem from '../../../models/Postagem';
import { useSelector } from "react-redux";
import { useNavigate,Link } from 'react-router-dom'
import { buscar } from '../../../services/Service';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { TokenState } from '../../../store/tokens/TokensReducer';

function ListaPostagem() {
  const [posts, setPosts] = useState<Postagem[]>([])

  const token = useSelector<TokenState,TokenState['tokens']>(
    (state) => state.tokens
  )

  let navigate = useNavigate()

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado para ter acesso')
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

  return (
    <>{
      posts.map(post => (
        <Card variant='elevation'>
          <CardHeader
            avatar={<Avatar>D</Avatar>}
            title={<Typography>{post.titulo}</Typography>}
            subheader={<Typography>{post.tema?.nome}</Typography>}
            action={
              <IconButton aria-label='more' aria-controls='long-menu' aria-haspopup='true'onClick={abreMenu}>
                <MoreVertIcon />
              </IconButton>
            }
          >
          </CardHeader>

          <Menu anchorEl={menu} id='menu-opcoes' keepMounted open={abre} onClose={fechaMenu} TransitionComponent={Fade}>
            <Link to={`/formPostagem/${post.id}`}>
            <MenuItem>Atualizar</MenuItem>
            </Link>
            <Link to={`/deletarPostagem/${post.id}`}>
            <MenuItem>Deletar</MenuItem>
            </Link>
          </Menu>

          <CardMedia image="https://i.imgur.com/iAIRTMo.png" />

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.texto}
            </Typography>
          </CardContent>

          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>

            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>

            <IconButton>
              <ExpandMoreIcon />
            </IconButton>

          </CardActions>
        </Card>
      ))}
    </>
  );
}

export default ListaPostagem;