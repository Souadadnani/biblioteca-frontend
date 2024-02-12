import { useState } from "react";
import {login} from "../../services/usuarios.services";

export default function Login(){

    const [dato, setDato] = useState("");
    const [password, setPassword] = useState("");

    const doLogin = (e) =>{
        e.preventDefault();
        login(dato, password);
    }

    return(
        <form onSubmit={doLogin}>
            <input type="text" placeholder="email o alias" value={dato} onChange={(e)=>setDato(e.target.value)}/><br />
            <input type="password" placeholder="contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
            <button type="submit">Iniciar Sesión</button>
        </form>
    )
}