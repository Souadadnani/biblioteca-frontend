import { Link } from "react-router-dom";
import Login from "../usuarios/Login";
import Logout from "../usuarios/Logout";

export default function Nav(lector, setLector){


    return(
        <div>
           <nav>
                <Link to="/">Inicio</Link>
                <Link to="/registrar">Registrarse</Link>
                <Link to="/login">Iniciar Sesión</Link>
                <Link to="/catalogo">Catalogo</Link>
                <Link to="/prestados">Prestar Libro</Link>
            </nav> 
        </div>
        
    )
}