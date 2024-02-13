import { useState } from "react";
import {login} from "../../services/getUsuario";
import { useNavigate } from "react-router-dom";

export default function Login({setLector}){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const doLogin = (e) =>{
        e.preventDefault();
        login(email, password, navigate);
    }

    return(
        <form onSubmit={doLogin}>
            <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <input type="password" placeholder="contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
            <button type="submit">Iniciar Sesión</button>
        </form>
    )
}