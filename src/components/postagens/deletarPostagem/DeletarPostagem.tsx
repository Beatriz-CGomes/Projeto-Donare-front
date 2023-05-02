import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import {Box} from '@mui/material';
import './DeletarPostagem.css';
import Postagem from '../../../models/Postagem';
import { buscarId, deletarId } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';

function DeletarPostagem() {
   
  let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
   const token = useSelector<UserState, UserState["tokens"]>( 
    (state) => state.tokens
  );
    const [post, setPosts] = useState<Postagem>()

    useEffect(() => {
        if (token == "") {
          toast.error('O usuário precisa estar logado', { 
            position: 'top-right', 
            autoClose: 2000, 
            hideProgressBar: false, 
            closeOnClick: true,  
            pauseOnHover: false, 
            draggable: false, 
            theme: "colored", 
            progress: undefined, 
        }); 
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscarId(`/postagens/${id}`, setPosts, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
          navigate('/home') 
            deletarId(`/postagens/${id}`, { 
              headers: {
                'Authorization': token
              }
            });
            toast.success('Postagem deletada com sucesso', { 
              position: 'top-right', 
              autoClose: 2000, 
              hideProgressBar: false, 
              closeOnClick: true,  
              pauseOnHover: false, 
              draggable: false, 
              theme: "colored", 
              progress: undefined, 
          }); 
          }
        
          function nao() {
            navigate('/home')
          }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" className='deletar-post'>
          <CardContent >
            <Box>
              <Typography className='texto-negrito' gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textPrimary" >
              {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="opcoes-sim" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button  onClick={nao} variant="outlined" size='large' className='opcoes-nao'>
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;