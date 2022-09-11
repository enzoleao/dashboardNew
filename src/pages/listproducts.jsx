import Layout from "../components/template/Layout";
import Axios from "axios";
import Informations from "../components/template/Informations"
import { useState, useEffect } from "react";

export default function Settings() {
    const [listGames, setListGames] = useState();

    const buttonClickEdit = () =>{
        setOpen(true)
    }
    useEffect(()=>{
        Axios.get("http://localhost:4001/getCards")
        .then((response)=>{
          setListGames(response.data)
          
        }); 
      },[])
  return (
    <Layout titulo="" subtitulo="">
        <table className="table-fixed  w-10/12   items-center rounded-md shadow-lg  h-4/5 overflow-y-scroll">
                <thead className="text-xs font-semibold uppercase h-10 text-gray-50 bg-gray-700 rounded-sm text-center">
                    <tr>
                        <th className="p-2">Produto</th>
                        <th className="p-2">Preço</th>
                        <th className="p-2">Codigo</th>
                        <th className="p-2 ">Ações</th>
                    </tr>
                </thead>      
                <>            
                <tbody className=" text-sm divide-y divide-gray-350 text-black  text-center break-all ">
                    
                    {typeof listGames !== "undefined" && listGames.map((value)=>{
                        return (             
                        <Informations id={value.ID} nome={value.Nome} preço={value.Preço} codigo={value.Codigo} key={value.ID}>            
                        </Informations>
                    )  
                    })}
                </tbody>
                </>
            </table>
    </Layout>
  )
}
