import { useParams } from 'react-router-dom'
import styles from './Player.module.css'
import Banner from '@/components/Banner'
import Titulo from '@/components/Titulo'
import videos from '@/json/db.json'
import NaoEncontrada from '@/pages/NaoEncontrada'

const Player = () => {
    const parametros = useParams()
    const video = videos.find((video) => {
        return video.id === Number(parametros.id)
    })
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