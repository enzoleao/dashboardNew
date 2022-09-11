import Link from "next/link"
import useAuth from "../../data/hook/useAuth"


    interface AvatarUsuarioProps{
        className?:string
    }
    export default function AvatarUsuario(props:AvatarUsuarioProps){

        const {usuario} = useAuth()
        return (
             <Link href="perfil">
                 <img src={usuario?.imagemUrl ?? '/image/black_avatar_2.svg'} alt="User Avatar"
                  className={`h-12 w-12 md:h-12 md:w-12 rounded-full cursor-pointer
                  ${props.className}
                  `}/>
             </Link>
        )
    }
    