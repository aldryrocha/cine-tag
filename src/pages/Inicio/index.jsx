import React from "react"
import Cabecalho from "@/components/cabecalho"
import Rodape from "@/components/Rodape"
import Banner from "@/components/Banner"
import Titulo from "@/components/Titulo"
import Card from "@/components/Card"

import videos from '@/json/db.json'
import styles from './Inicio.module.css'

const Inicio = () => {
    return (
        <>
            <Cabecalho />
            <Banner imagem='home' />
            <Titulo>Um lugar para guardar seus vídeos e filmes!</Titulo>
            <section className={styles.container}>
                {videos.map((video) => <Card {...video} key={video.id} /> )}
            </section>
            <Rodape />
        </>        
    )
}

export default Inicio