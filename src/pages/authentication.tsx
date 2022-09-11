import { useState } from "react";
import AuthInput from "../components/Auth/AuthInput";
import { WarningIcon } from "../components/icons";
import useAuth from "../data/hook/useAuth";
export default function Autentication (){

    const {cadastrar, login, loginGoogle} = useAuth()

    const [erro, setErro] = useState(null)
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    
    function showError(msg, time=5){
        setErro(msg)
        setTimeout(() =>setErro(null), time*1000)
    }
    async function submit(){
        try {
                if ( modo === 'login'){
                    await login(email,senha)
                }
        }catch(e){
            console.log(e)
            showError(e.message?? 'Erro desconhecido')
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">
            
            <div className={`m-10 w-full md:w-1/6 lg:1/3`}>
                <h1 className={`text-3xl font-bold mb-5`}>
                    Entre com a sua conta
                </h1>   
                {erro ? (
                    <div className={`
                        flex items-center
                        bg-red-400 text-white py-3 px-5 my-2
                        border border-red-700 rounded-lg
                    `}>
                        {WarningIcon()}
                        <span className={`ml-3 `}>{erro}</span>
                    </div>                 
                ): false}
                <AuthInput 
                    label="Email"
                    tipo="email"
                    valor={email}
                    valorChange={setEmail}
                    obg
                />
                <AuthInput 
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    valorChange={setSenha}
                    obg
                />
                <button onClick={submit} className={`
                    w-full bg-indigo-500 hover:bg-indigo-400
                    text-white rounded-lg px-4 py-3 mt-6
                `}>
                    Entrar
                </button>
                
                
                {modo === 'login' ? true :(
                    <p className={`mt-8`}>  
                    <a onClick={()=> setModo('login')} className={`
                        text-blue-500 hover:text-blue-700 font-semibold
                        cursor-pointer
                    `}> Realize seu login!</a>
                </p>
                )}
            </div>
        </div>
    )
}