import { useState } from "react"
import { getLibrosPrestados } from "../../services/prestados/prestados"

export default function Prestamos() {

    const [prestados, setPrestados] = useState([]);

    const mostrarPrestados = () =>{
        getLibrosPrestados(setPrestados)
    }
    return(
        <>
        </>
    )
}