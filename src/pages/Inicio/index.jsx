import React from "react"
import Cabecalho from "@/components/cabecalho"
import Rodape from "@/components/Rodape"
import Banner from "@/components/Banner"

const Inicio = () => {
    return (
        <>
            <Cabecalho />
            <Banner imagem='home' />
            <Rodape />
        </>        
    )
}

export default Inicio