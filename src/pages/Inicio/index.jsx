import React from "react"
import Cabecalho from "@/components/cabecalho"
import Rodape from "@/components/Rodape"
import Banner from "@/components/Banner"
import Titulo from "@/components/Titulo"
import Card from "@/components/Card"

const Inicio = () => {
    return (
        <>
            <Cabecalho />
            <Banner imagem='home' />
            <Titulo>Um lugar para guardar seus vídeos e filmes!</Titulo>
            <Card />
            <Rodape />
        </>        
    )
}

export default Inicio