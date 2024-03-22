import { useEffect, useState } from "react"
import Banner from "@/components/Banner"
import Titulo from "@/components/Titulo"
import Card from "@/components/Card"
import styles from './Inicio.module.css'

const Inicio = () => {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/aldryrocha/cinetag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [])

    return (
        <>
            <Banner imagem='home' />
            <Titulo>Um lugar para guardar seus vídeos e filmes!</Titulo>
            <section className={styles.container}>
                {videos.map((video) => <Card {...video} key={video.id} /> )}
            </section>
        </>        
    )
}

export default Inicio