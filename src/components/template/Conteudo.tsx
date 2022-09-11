

interface ConteudoProps{
    children?:any

}
export default function Conteudo (props:ConteudoProps){
     return (
        <div className={`
           flex flex-col mt-7 h-full
           dark:text-gray-200
           items-center justify-center
        `}>
            {props.children}
        </div>
     )
}