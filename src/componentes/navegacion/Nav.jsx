import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/registrar">Registrarse</Link></li>
                <li><Link to="/login">Iniciar Sesión</Link></li>
                <li><Link to="/prestamos">Préstamos</Link></li>
            </ul>
        </nav> 
    )
}