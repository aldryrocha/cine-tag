import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Favoritos from "./pages/Favoritos"
import Cabecalho from "@/components/Cabecalho"
import Rodape from "@/components/Rodape"
import Container from "@/components/Container"
import FavoritosProvider from "@/contexts/Favoritos"
import Player from "./pages/Player"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="video/:id" element={<Player />}></Route>
                    </Routes>
                </FavoritosProvider>                
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes