import useAppData from "../../data/hook/useAppData"
import Titulo from "./Titulo"
import UserAvatar from "./UserAvatar"

interface CabecalhoProps{
    titulo: string
    subtitulo:string
}
export default function Cabecalho (props:CabecalhoProps){
    const {tema, changeTema} = useAppData()
    return (
        <div className={`flex `}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
            <div className={`flex flex-grow justify-end`}>
                 
                 <UserAvatar className="ml-3 hidden md:block" />
            </div>
        </div>
     )
}