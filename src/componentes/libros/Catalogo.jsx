import { useOutletContext } from "react-router-dom";
import { getLibrosBuscados, getLibrosDisp, getTotalPag, getTotalPagBuscada, } from "../../services/libros/libros";
import Bienvenida from "../usuarios/Bienvenida";
import { useEffect, useState } from "react";
import { prestarLibro } from "../../services/prestados/prestados";
import BarraBusqueda from "./BarraBusqueda";

export default function Catalogo() {

    const [lector, setLector] = useOutletContext();
    const [actualizados, setActualizados] = useState(false);
    const [librosDisponibles,setLibrosDisponibles] = useState([]);
    const [pagActual, setPagActual] = useState(0);
    const [buscada, setBuscada] = useState("");
    const [totalPaginas, setTotalPaginas] = useState(0);

    useEffect(()=>{
        if(buscada === ""){
            getTotalPag(setTotalPaginas);
            getLibrosDisp(pagActual, setLibrosDisponibles, setActualizados);
        }else{
            getTotalPagBuscada(buscada, setTotalPaginas);
            getLibrosBuscados(pagActual, buscada, setLibrosDisponibles, setActualizados);
        }
           
    }, [lector, buscada, actualizados, pagActual]);

    const doPrestado = (idLibro) =>{
        prestarLibro(idLibro, setActualizados);
    }

    return(
        <main>
            {lector? <Bienvenida lector={lector} setLector={setLector}/> : ""}
            <h2>Catálogo</h2>
            <BarraBusqueda buscada={buscada} setBuscada={setBuscada} />
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Ejemplares Disponibles</th>
                    </tr>
                </thead>
                <tbody>
                    {librosDisponibles.map(libro=>{
                        return(
                            <tr key={libro.id}>
                                <td>{libro.titulo}</td>
                                <td>{libro.autor}</td>
                                <td>{libro.disponibles}</td>
                                <td>{lector? <button onClick={()=>doPrestado(libro.id)}>Prestar</button> : " "}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {(pagActual > 0) ? <button onClick={()=>{if(pagActual > 0) setPagActual(pagActual-1);}}>Anterior</button> : ""}
            <span>{pagActual+1} de {totalPaginas+1}</span>
            {(pagActual >= totalPaginas) ? "" : <button onClick={()=>{if(pagActual < totalPaginas) setPagActual(pagActual+1);}}>Seguiente</button>} 
        </main>       
    )
}