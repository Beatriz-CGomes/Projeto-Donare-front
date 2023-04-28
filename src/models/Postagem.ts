import Tema from "./Tema";

interface Postagem{
    id: number;
    titulo:string;
    texto: string;
    curtidas: number|null;
    imagem: string;
    marcacao: string;
    doacao:string;
    tema: Tema| null
}

export default Postagem;