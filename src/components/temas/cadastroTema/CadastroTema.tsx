import { Container, Typography, TextField, Button } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Tema from "../../../models/Tema";
import { atualizar, buscarId, postar } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { toast } from "react-toastify";
import './CadastroTema.css'
import { Box } from "@mui/material";

function CadastroTema() {

    let navigate = useNavigate()
    const {id} = useParams <{id: string}>()

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
 

    useEffect(()=>{
        if (token === "") {
            toast.info('Você precisa estar logado para ter acesso', {
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

    const [tema, setTema] = useState <Tema>({
        id: 0,
        nome: "",
        descricao: ""
    })

    async function findById(id: string) {
        buscarId(`/temas/${id}`, setTema, {
            headers: {
            "Authorization": token
            }
        })      
    }

    useEffect(()=>{
      if (id !== undefined){
        findById(id)
      }
    },[id])

    async function updatedTema(e: ChangeEvent<HTMLInputElement>) {
        setTema({
            ...tema,
            [e.target.name]:e.target.value
        })
        
    }

    async function enviar(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (id !== undefined){
            try{
                await atualizar(`/temas`, tema, setTema, {
                    headers:{
                        "Authorization": token
                    }
                } )
                toast.info('Tema atualizado com sucesso', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
            }catch(error){
                console.log(`Error:${error}`)
                toast.info('Preencha os campos corretamente', {
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
        }else{
            try{
                await postar(`/temas`, tema, setTema, {
                    headers:{
                        "Authorization": token
                    }
                } )
                toast.info('Tema cadastrado com sucesso', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                  });
            }catch(error){
                console.log(`Error:${error}`)
                toast.info('Erro ao cadastrar o tema, tente novamente', {
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
        }
        listas()
    }
    function listas(){
        navigate("/temas")
    }
    return (
        <>
            <Container maxWidth="sm" className="form-tema">
                <form onSubmit={enviar}>
                    <Typography variant="h3" className="texto-titulo" component="h1" align="center" >Formulário de cadastro tema</Typography>
                    <TextField value={tema.nome} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedTema(e)} id="nome" name="nome" label="tema" variant="outlined" margin="normal" fullWidth/>
                    <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                    
                    <Box className="botoes-sim-nao">
                    <Button type="submit" variant="contained" className="finalizar">
                        Finalizar
                    </Button>

                    <Link to='/temas'>
                    <Button variant="outlined" className="cancelar">
                        Cancelar
                    </Button>
                    </Link>
                    </Box>
                </form>
            </Container>
        </>
    )
}

export default CadastroTema;