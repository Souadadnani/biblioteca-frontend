import { useNavigate, useOutletContext } from "react-router-dom";

export default function Logout(){

    const [lector, setLector] = useOutletContext();
    return(
        <>
            <button onClick={localStorage.removeItem('lector')}>Cerrar Sesión</button>
        </>
    )
}