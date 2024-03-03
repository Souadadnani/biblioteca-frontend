import { useEffect, useState } from "react"
import { devolverEjemplar, getLibrosPrestados } from "../../services/prestados/prestados"

export default function Prestamos() {

    const [prestados, setPrestados] = useState([]);
    const [cargados, setCargados] = useState(false);

    useEffect(()=>{
        getLibrosPrestados(setPrestados, setCargados);
    }, [cargados]);

    const devolver = (ejemplar) =>{
        devolverEjemplar(ejemplar, setCargados);
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
                    </tr>
                </thead>
                <tbody>
                    {prestados.map(prestado=>{
                        return(
                            <tr key={prestado.ejemplar.id}>
                                <td>{prestado.ejemplar.libro.titulo}</td>
                                <td>{prestado.ejemplar.libro.autor}</td>
                                <td>{new Date(prestado.fechaPrestamo).toLocaleDateString()}</td>
                                <td><button onClick={()=>devolver(prestado.ejemplar.id)}>Devolver</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}