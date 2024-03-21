import Banner from '@/components/Banner'
import Card from '@/components/Card'
import Titulo from '@/components/Titulo'
import styles from './Favoritos.module.css'

const Favoritos = () => {
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>Meus Favoritos</Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='Gato bonifácio' capa='https://thecatapi.com/api/images/get?format=src&type=png' />
            </section>
        </>
    )
}

export default Favoritos