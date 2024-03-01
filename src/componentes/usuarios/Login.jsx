import { useState } from "react";
import {login} from "../../services/usuarios/post-login";
import { useNavigate, useOutletContext } from "react-router-dom";

export default function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [lector, setLector] = useOutletContext();
    const usuario = {
        email,
        password
    }

    const doLogin = (e) =>{
        e.preventDefault();
        login(usuario, navigate, setLector);
    }

    return(
        <form onSubmit={doLogin}>
            <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <input type="password" placeholder="contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
            <button type="submit">Iniciar Sesión</button>
        </form>
    )
}