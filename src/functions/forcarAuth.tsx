import Head from 'next/script'
import Image from 'next/image'
import Router from 'next/router'
import loading from '../../public/image/loading.gif'
import useAuth from '../data/hook/useAuth'


export default function ForceAuth(jsx){
    const {usuario, carregando} = useAuth()
    function renderConteud(){
         return (
            <>
               <Head>
                    <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        if(!document.cookie?.includes("auth-validation")){
                            window.location.href = "/authentication"
                        }
                       `
                    }}
                    />
               </Head>
               {jsx}
            </>
         )
    }
    function renderCarreg(){
        return (
            <div className={`
              flex justify-center items-center h-screen
            `}>
                <Image src={loading} />
            </div>
        )
    }    
    if (!carregando && usuario?.email){
        return renderConteud()
    }else if (carregando){
        return renderCarreg()
    }else {
        Router.push('authentication')
        return null
    }
}