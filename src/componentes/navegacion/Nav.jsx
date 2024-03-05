import { Link } from "react-router-dom";
import Bienvenida from "../usuarios/Bienvenida";

export default function Nav({lector, setLector}){
    return(
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                {lector? "" : <li><Link to="/registrar">Registrarse</Link></li>}
                {lector? "" : <li><Link to="/login">Iniciar Sesión</Link></li>}
                {lector? <li><Link to="/prestamos">Préstamos</Link></li> : ""}
            </ul>
            {lector? <Bienvenida lector={lector} setLector={setLector}/> : ""}
        </nav> 
    )
}