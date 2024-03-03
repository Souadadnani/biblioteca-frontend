import { useEffect, useState } from "react";
import { getLibrosBuscados } from "../../services/libros/libros";

export default function LibrosBuscados({}) {

    const buscadaMinus = buscada.toLowerCase();
    useEffect(()=>{
        getLibrosBuscados(numPag, buscadaMinus, setLibrosDisponibles, setActualizados)
    }, [buscada, actualizados, numPag])

    return(
        <>
        </>
    )
}