import { useNavigate, useOutletContext } from "react-router-dom";

export default function Logout({lector, setLector}){

    const cerrarSesion = () =>{
        setLector(null);
        localStorage.removeItem('token');
    }
    return(
        <>
            {lector? <button onClick={cerrarSesion}>Cerrar Sesión</button> : " "}
        </>
    )
}