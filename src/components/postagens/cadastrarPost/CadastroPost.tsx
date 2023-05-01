import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core";
import './CadastroPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { buscar, buscarId, postar, atualizar } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from './../../../store/tokens/TokensReducer';
import { toast } from 'react-toastify';
import { Box } from '@mui/material';

function CadastroPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
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

    const [tema, setTema] = useState<Tema>(
        {
            id: 0,
            nome: '',
            descricao: ''
        })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: '',
        texto: '',
        curtidas: null,
        imagem:'',
        marcacao:'',
        doacao: '',
        tema: null,
    })

    useEffect(() => { 
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if (id !== undefined) {
            findByIdPostagem(id)
        }
    }, [id])

    async function getTemas() {
        await buscar("/temas", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdPostagem(id: string) {
        await buscarId(`postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            atualizar(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            postar(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        back()

    }

    function back() {
        navigate('/home')
    }
    
    return (
        <>
            <Container maxWidth="sm" className='form-post'>
                <form onSubmit={onSubmit}>
                    <Typography variant="h4" align="center">Crie sua Postagem</Typography>

                    <TextField  value={postagem.titulo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="titulo" name="titulo" label="Digite o titulo da sua postagem" variant="outlined" margin="normal" fullWidth />
                    <TextField  value={postagem.texto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="texto" name="texto" label="Digite o texto da sua postagem" variant="outlined"  margin="normal" fullWidth />
                    <TextField  value={postagem.imagem} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="imagem" name="imagem" label="Insira o link da foto em nuvem" variant="outlined"  margin="normal" fullWidth />
                    <TextField  value={postagem.marcacao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="marcacao" name="marcacao" label="Marque um usuário aqui" variant="outlined"  margin="normal" fullWidth />

                    <FormControl>
                        <InputLabel id="demo-simple-select-helper-label">ODS </InputLabel>
                        <Select 
                        labelId="demo-simple-select-helper-label" 
                        id="demo-simple-select-helper"
                        onChange={(e)=>buscarId(`/temas/${e.target.value}`,setTema,{
                            headers: {
                                'Authorization':token
                            }
                        })}>
                            { temas.map(tema=>(
                            <MenuItem value={tema.id}>{tema.nome}</MenuItem>
                            ))}
                        </Select>
                        <FormHelperText>Escolha uma ODS para a postagem</FormHelperText>
                        
                        <Button variant='contained' type='submit' className='concluir'>
                                Concluir
                        </Button>

                    </FormControl>
                </form>
            </Container>
        </>
    );
}

export default CadastroPost;