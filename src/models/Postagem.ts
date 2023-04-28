import Tema from "./Tema";

interface Postagem{
    id: number;
    titulo:string;
    texto: string;
    curtidas: number;
    imagem: string;
    marcacao: string;
    doacao:string;
    tema:Tema
}

export default Postagem;