import { Link } from 'react-router-dom'
import styles from './Cabecalho.module.css'
import logo from "./logo.png"

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <p>Sou cabeçalho!</p>
            <Link to='./'>
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>            
        </header>
    )
}

export default Cabecalho