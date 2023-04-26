import { Container, Typography, TextField, Button } from "@material-ui/core";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import Tema from "../../../models/Tema";
import { atualizar, buscarId, postar } from "../../../services/Service";

function cadastroTema() {

    let navigate = useNavigate()
    const {id} = useParams <{id: string}>()

    const [token, setToken] = useLocalStorage("token")

    useEffect(()=>{
        if (token === "") {
            alert ("Você precisa estar logado para ter acesso")
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
                alert ("Tema atualizado com sucesso")
            }catch(error){
                console.log(`Error:${error}`)
                alert ("Preencha os campos corretamente")
            }
        }else{
            try{
                await postar(`/temas`, tema, setTema, {
                    headers:{
                        "Authorization": token
                    }
                } )
                alert ("Tema cadastrado com sucesso")
            }catch(error){
                console.log(`Error:${error}`)
                alert ("Erro ao cadastrar o tema, tente novamente")
            }
        }
        listas()
    }
    function listas(){
        navigate("/temas")
    }
    return (
        <>
            <Container maxWidth="sm" className="topo">
                <form onSubmit={enviar}>
                    <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro tema</Typography>
                    <TextField value={tema.nome} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedTema(e)} id="nome" name="nome" label="tema" variant="outlined" margin="normal" fullWidth/>
                    <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </form>
            </Container>
        </>
    )
}

export default cadastroTema;