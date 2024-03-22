import { useFavoritoContext } from '@/contexts/Favoritos'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import iconeFavorito from '../../../public/images/desfavorito.png'
import iconeDesfavorito from '../../../public/images/favorito.png'


const Card = ({ id, titulo, capa }) => {
    const { favorito, adicionarFavorito } = useFavoritoContext()
    const ehFavorito = favorito.some((fav) => fav.id === id)
    const icone = !ehFavorito ? iconeFavorito : iconeDesfavorito

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`video/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>            
            <img src={icone} alt="Favoritar filme" className={styles.favoritar} onClick={() => {adicionarFavorito({id, titulo, capa})}} />
        </div>
    )
}

export default Card