import { useOutletContext } from "react-router-dom";
import { getLibrosDisp, getNumPag } from "../../services/libros/libros";
import Bienvenida from "../usuarios/Bienvenida";
import { useEffect, useState } from "react";
import { prestarLibro } from "../../services/prestados/prestados";
import BarraBusqueda from "./BarraBusqueda";


export default function Catalogo() {

    const [lector, setLector] = useOutletContext();
    const [actualizados, setActualizados] = useState(false);
    const [librosDisponibles,setLibrosDisponibles] = useState([]);
    const [buscada, setBuscada] = useState("");
    const [numPag, setNumPag] = useState(0);

    useEffect(()=>{
        getLibrosDisp(numPag, setLibrosDisponibles, setActualizados)
    }, [lector, actualizados, numPag]);

    const doPrestado = (idLibro) =>{
        prestarLibro(idLibro, lector.email, setActualizados);
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
            {(numPag > 0) ? <button onClick={()=>{if(numPag > 0) setNumPag(numPag-1);}}>Anterior</button> : ""}
            {(numPag > getNumPag) ? "" : <button onClick={()=>{setNumPag(numPag+1);}}>Seguiente</button>} 
        </main>       
    )
}