import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://donare.onrender.com/'
});

export const cadastro = async (url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async (url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const buscar = async (url: any, setDados: any, header: any) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const buscarId = async (url: any, setDados: any, header: any) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const postar = async (url: any, dados: any, setDados: any, header: any) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const atualizar = async (url: any, dados: any, setDados: any, header: any) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deletarId = async (url: any, header: any) => {
    await api.delete(url, header)
}