import useAppData from "../../data/hook/useAppData"
//import ForceAuth from "../Auth/ForceAuth"
import Cabecalho from "./Cabecalho"
import Conteudo from "./Conteudo"
import MenuLateral from "./MenuLateral"
import forcarAuth from '../../functions/forcarAuth'

interface LayoutProps{
    titulo: string
    subtitulo:string
    children?:any
}
export default function Layout (props:LayoutProps){
    
    const {tema} = useAppData()
    return forcarAuth(      
            <div className={`${tema} flex h-screen w-screen`}>
                
                <div className='flex flex-col h-full w-24'>
                     <MenuLateral/>
                </div>
                <div className={`
                flex flex-col w-full p-7 
                bg-white dark:bg-gray-800 

                `}>
                    <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo}/>
                    <Conteudo>
                        {props.children}
                    </Conteudo>
                </div>
            </div>       
     )
}