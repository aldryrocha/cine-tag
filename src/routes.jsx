import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Favoritos from "./pages/Favoritos"
import Player from "./pages/Player"
import NaoEncontrada from "./pages/NaoEncontrada"
import Cabecalho from "@/components/Cabecalho"
import Rodape from "@/components/Rodape"
import Container from "@/components/Container"
import FavoritosProvider from "@/contexts/Favoritos"
import PaginaBase from "./pages/PaginaBase"

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaBase />}>
                    <Route index element={<Inicio />}></Route>
                    <Route path="favoritos" element={<Favoritos />}></Route>
                    <Route path="video/:id" element={<Player />}></Route>
                    <Route path='*' element={<NaoEncontrada />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes