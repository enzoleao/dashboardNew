import Link from 'next/link'

interface MenuItemProps{
    texto:string
    icone:any
    url?:string
    clasName?:string
    onClick?:(evento:any) => void
}
export default function MenuItem(props: MenuItemProps){
    function rendCont(){
        return (
        <a className={`
            flex flex-col justify-center items-center
             h-20 w-24 text-white
             dark:text-gray-200
             hover:text-gray-900
             ${props.clasName}
            `}>
            {props.icone}
            <span className={`text-xs font-light`}>
            {props.texto}
            </span>
        </a>
        )
    }
    return (
        <li onClick={props.onClick} className={`
        hover:bg-gray-400 dark:hover:bg-gray-800
        cursor-pointer 
        `}>
            {props.url ? (              
                <Link href={props.url}>
                    {rendCont()}                   
                </Link>
            ):(rendCont())}
        </li>
    )
}