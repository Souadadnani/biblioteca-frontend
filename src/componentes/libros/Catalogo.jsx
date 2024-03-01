import { useNavigate, useOutletContext } from "react-router-dom";
import { getLibrosDisp, getNumPag } from "../../services/libros/get-libros";
import Bienvenida from "../usuarios/Bienvenida";
import { useEffect, useState } from "react";
import { prestarLibro } from "../../services/prestados/prestados";

export default function Catalogo(){

    const [lector, setLector] = useOutletContext();
    const [actualizado, setActualizado] = useState(false);
    const [librosDisponibles,setLibrosDisponibles] = useState([]);
    const [numPag, setNumPag] = useState(0);

    useEffect(()=>{
        getLibrosDisp(numPag, setLibrosDisponibles, setActualizado)
    }, [lector, actualizado, numPag]);

    const pagAnterior = () =>{
        do {
            setNumPag(numPag-1);
        } while (numPag > 0);
    }
    const pagSeguiente = () =>{
        do {
            setNumPag(numPag+1);
        } while (numPag <= getNumPag);
    }

    const doPrestado = (idLibro) =>{
        prestarLibro(idLibro, lector.email, setActualizado);
    }


    return(
        <>
            {lector? <Bienvenida lector={lector} setLector={setLector}/> : ""}
            <h2>Catalogo</h2>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
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
            <button onClick={pagAnterior}>Anterior</button>
            <button onClick={pagSeguiente}>Seguiente</button>   
        </>
        
    )
}