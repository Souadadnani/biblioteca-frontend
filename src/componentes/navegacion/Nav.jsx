import { Link } from "react-router-dom";
import Login from "../usuarios/Login";
import Logout from "../usuarios/Logout";

export default function Nav(lector, setLector){


    return(
        <div>
           <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <Link to="/registrar">Registrarse</Link>
                    <Link to="/login">Iniciar Sesión</Link>
                    <Link to="/catalogo">Catalogo</Link>
                    <Link to="/prestados">Prestar Libro</Link>
                </ul>
            </nav> 
        </div>
        
    )
}