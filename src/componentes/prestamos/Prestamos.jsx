import { useEffect, useState } from "react"
import { useOutletContext } from "react-router-dom";
import { devolverEjemplar, getLibrosPrestados } from "../../services/prestados/prestados"

export default function Prestamos() {

    const [lector, setLector] = useOutletContext();
    const [prestados, setPrestados] = useState([]);
    const [devueltos, setDevueltos] = useState(false);

    useEffect(()=>{
        getLibrosPrestados(lector, setPrestados, setDevueltos);
    }, [devueltos]);

    const devolver = (ejemplar) =>{
        devolverEjemplar(ejemplar, setDevueltos);
    }

    return(
        <>
            <h2>Préstamos</h2>        
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Fecha préstamo</th>
                        <th>Fecha devolución</th>
                    </tr>
                </thead>
                <tbody>
                    {prestados.map(prestado=>{
                        return(
                            <tr key={prestado.ejemplar.id}>
                                <td>{prestado.ejemplar.libro.titulo}</td>
                                <td>{prestado.ejemplar.libro.autor}</td>
                                <td>{new Date(prestado.fechaPrestamo).toLocaleDateString()}</td>
                                <td>{new Date(prestado.fechaDevolucion).toLocaleDateString()}</td>
                                <td><button onClick={()=>devolver(prestado.ejemplar.id)}>Devolver</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}