import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './Player.module.css'
import Banner from '@/components/Banner'
import Titulo from '@/components/Titulo'
import NaoEncontrada from '@/pages/NaoEncontrada'

const Player = () => {
    const [video, setVideo] = useState()
    const parametros = useParams()
    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/aldryrocha/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideo(...dados)
        })
    }, [])
    if(!video){
        return <NaoEncontrada />
    }
    return (
        <>
            <Banner imagem='player' />
            <Titulo>Player</Titulo>
            <section className={styles.container}>
                <iframe width="100%" height="100%" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    src={video.link}
                    title={video.titulo} >
                </iframe>
            </section>
        </>
    )
}

export default Player