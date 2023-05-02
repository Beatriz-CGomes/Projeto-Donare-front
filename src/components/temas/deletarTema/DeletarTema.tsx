import React, { useEffect, useState } from 'react'
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import './DeletarTema.css';
import { useNavigate, useParams } from 'react-router-dom';
import { buscarId, deletarId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/tokens/TokensReducer';
import { toast } from "react-toastify";


function DeletarTema() {
  
  let navigate = useNavigate();
  const { id } = useParams<{id: string}>();

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
);


  const [tema, setTema] = useState<Tema>()

  useEffect(() => {
      if (token === "") {
        toast.info('Você precisa estar logado', {
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

  useEffect(() =>{
      if(id !== undefined){
          findById(id)
      }
  }, [id])

  async function findById(id: string) {
      buscarId(`/temas/${id}`, setTema, {
          headers: {
            'Authorization': token
          }
        })
      }

      function sim() {
        navigate('/temas')
          deletarId(`/temas/${id}`, {
            headers: {
              'Authorization': token
            }
          });
          toast.info('Tema deletado com sucesso', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      
        function nao() {
          navigate('/temas')
        }
        
return (
  <>
    <Box m={2}>
      <Card variant="outlined" className='deletar-tema'>
        <CardContent>
          <Box justifyContent="center">
            <Typography className='texto-negrito' gutterBottom>
              Deseja deletar o Tema:
            </Typography>
            <Typography>
              {tema?.nome}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Box mx={2}>
              <Button onClick={sim} variant="contained" className="opcao-sim  " size='large' color="primary">
                Sim
              </Button>
            </Box>
            <Box mx={2}>
              <Button  onClick={nao} variant="outlined" size='large' className='opcao-nao'>
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
export default DeletarTema;    
 