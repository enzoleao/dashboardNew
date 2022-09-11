import { useState} from "react";
import { updateIcon} from "../icons"
import DialogForm from "./DialogForm"


export default function Informations(props){
    const [open, setOpen] = useState(false)


    const buttonClickEdit = () =>{
        setOpen(true)
    }
    
    
    return (
        <>  
            <DialogForm 
                    open={open} 
                    setOpen={setOpen}
                    name={props.nome}
                    valor={props.preço}
                    codigo={props.codigo}
                    id={props.id}
                    >
            </DialogForm>      
            <tr className={`${(props.id%2) === 0 ?"":"bg-gray-50"} hover:bg-gray-300 items-center  `}key={props.id}>
            <td className="p-2 ">{props.nome}</td>
            <td className="p-2">R$:{props.preço}</td>
            <td className="p-2">{props.codigo}</td>     
            <td className="p-2 items-center">
                <button onClick={()=>{buttonClickEdit()}} className="mr-3">{updateIcon}</button >
            </td>  
            </tr>        
        </>
    )
}