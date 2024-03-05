import { useNavigate } from "react-router-dom";

export default function Logout({lector, setLector}){

    const navigate = useNavigate();
    const cerrarSesion = () =>{
        setLector(null);
        localStorage.removeItem('token');
        navigate("/");
    }
    return(
        <>
            {lector? <button onClick={cerrarSesion}>Cerrar Sesión</button> : " "}
        </>
    )
}