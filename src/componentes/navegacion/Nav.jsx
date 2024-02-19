import { Link } from "react-router-dom";

export default function Nav(){


    return(
        <div>
           <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/registrar">Registrarse</Link></li>
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                    <li><Link to="/catalogo">Catalogo</Link></li>
                    <li><Link to="/prestados">Prestar Libro</Link></li>
                </ul>
            </nav> 
        </div>
        
    )
}