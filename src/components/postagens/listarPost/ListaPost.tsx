import { Avatar, Card, CardActions, CardContent, CardHeader} from '@material-ui/core';
import {CardMedia, Collapse, IconButton, Typography} from '@material-ui/core'
import React,{useState,useEffect} from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Postagem from '../../../models/Postagem';
import { useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
import useLocalStorage from "react-use-localstorage";
import { buscar } from '../../../services/Service';

function ListaPostagem() {
  const [posts,setPosts] = useState<Postagem[]>([])

  const [token,setToken] = useLocalStorage('token')

  let navigate = useNavigate()

  useEffect(()=>{
    if(token === ''){
      alert('Você precisa estar logado para ter acesso')
      navigate('/login')
    }
  },[token])

  async function listaPostagem() {
    await buscar(`/postagens`,setPosts,{
      headers:{
        'Authorization' : token
      }
    })
  }

  useEffect(()=>{
    listaPostagem()
  },[posts.length])

  return (
    <>{
      posts.map(post=>(
    <Card variant='elevation'>
      <CardHeader avatar={
        <Avatar>D</Avatar>
      } title='Titulo Postagem'
      subheader='ODS'>
     </CardHeader>
        
        
      <CardMedia image="https://i.imgur.com/iAIRTMo.png"/>
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