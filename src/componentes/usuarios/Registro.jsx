import { useState } from "react";
import { registrar } from "../../services/postUsuario";

export default function Registro({setLector}){
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const usuario = {
        "email": email,
        "password": password,
        "nombre": nombre,
        "apellidos": apellidos
    };

    const doRegistro = (e) =>{
        e.preventDefault();
        registrar(usuario, setLector);
    };

    return (
        <form onSubmit={doRegistro}>
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/><br />
            <input type="text" placeholder="Apellidos" value={apellidos}  onChange={(e)=>setApellidos(e.target.value)}/><br />
            <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <input type="password" placeholder="contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
            <button type="submit">Registrarse</button>
        </form>
    )
}