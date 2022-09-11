import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";


export default function Notifications() {
   const {changeTema}= useAppData()

  return (
    <Layout titulo="Notifications" subtitulo="Notification Management ">    
        
    </Layout>
  )
}
