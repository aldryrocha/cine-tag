import styles from './Card.module.css'
import iconeFavorito from '../../../public/images/desfavorito.png'
import iconeDesfavorito from '../../../public/images/favorito.png'
import { useFavoritoContext } from '@/contexts/Favoritos'

const Card = ({ id, titulo, capa }) => {
    const { favorito, adicionarFavorito } = useFavoritoContext()
    const ehFavorito = favorito.some((fav) => fav.id === id)
    const icone = !ehFavorito ? iconeFavorito : iconeDesfavorito

    return (
        <div className={styles.container}>
            <img src={capa} alt={titulo} className={styles.capa} />
            <h2>{titulo}</h2>
            <img src={icone} alt="Favoritar filme" className={styles.favoritar} onClick={() => {adicionarFavorito({id, titulo, capa})}} />
        </div>
    )
}

export default Card