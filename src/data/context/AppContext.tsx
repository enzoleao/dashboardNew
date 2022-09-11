import { createContext, useEffect, useState } from "react";

///type Tema = 'dark' | ''

interface AppContextProps{
    tema?:string
    changeTema?: ()=> void
}
const AppContext = createContext<AppContextProps>({
    tema: null,
    changeTema: null
})

export function AppProvider(props) {
    const [tema, setTema] = useState('dark')

    function changeTema() {
        const novoTema = tema=== '' ? 'dark' : ''
        setTema(novoTema)
        localStorage.setItem('tema', novoTema)
    }

    useEffect(() =>{
       const temaSalvo = localStorage.getItem('tema')
       setTema(temaSalvo)
    },[])

    return (
        <AppContext.Provider value={{
            tema,
            changeTema
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext