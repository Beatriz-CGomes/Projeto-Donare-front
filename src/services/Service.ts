import axios from 'axios';

export const conexao = axios.create({
    baseURL: 'https://donare.onrender.com/'
});

export const cadastro = async (url: any, dados: any, setDados: any) => {
    const resposta = await conexao.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: any, dados: any, setDados: any) => {
    const resposta = await conexao.post(url, dados)
    setDados(resposta.data.token)
}

