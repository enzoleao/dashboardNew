import Layout from "../components/template/Layout";
import { useState, useEffect } from "react";
import Axios from "axios"
import { Chart } from "react-google-charts";

export default function Home() {

  const [estoque, setEstoque] = useState()
    useEffect(()=>{
        Axios.get("http://localhost:4001/getCards")
        .then((response)=>{
          setEstoque(response.data.length)
          
        }); 
    },[])
  var date = new Date;
    const data = [
        ["Mês", "Estoque", "Vendas", 'Lucro'],
        [`Janeiro`, estoque, 40, 30],
        [`Fevereiro`, estoque, 38, 30],
        [`Março`, estoque, 25, 30],
        [`Abril`, estoque, 32, 30],
        [`Maio`, estoque, 22, 30],
        
      ];
      const options = {
        title: "Resumo de Ultimas Vendas",
        hAxis: { title: `Em: ${date.getDate() >= 10 ? date.getDate() : '0'+date.getDate()} / ${date.getMonth()+1 >= 10 ? date.getMonth()+1 : '0'+date.getMonth()} / ${date.getFullYear()}`, titleTextStyle: { color: "#444" } },
        vAxis: { minValue: 0 },
        chartArea: { 
          width: "55%", height: "80%",
        },
        backgroundColor: 'transparent',
        colors: ["red", "#2596be", '#071e26'],
        legend:'hello',
        
        
      };   

  return (
    <Layout titulo="" subtitulo="">
        <div className='flex flex-col w-5/6 justify-center items-center'>      
            <Chart
                chartType="Bar"
                width="100%"
                height="500px"
                data={data}
                options={options}
            />
        </div>
    </Layout>
  )
}
