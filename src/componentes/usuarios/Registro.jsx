import { useState } from "react";
import { registrar } from "../../services/usuarios.services";

export default function Registro(){
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [alias, setAlias] = useState("");
    const [password, setPassword] = useState("");

    const registrarse = (e) =>{
        e.preventDefault();
        registrar(nombre, apellidos, email, alias, password);
    }
    return (
        <form onSubmit={registrarse}>
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}/><br />
            <input type="text" placeholder="Apellidos" value={apellidos}  onChange={(e)=>setApellidos(e.target.value)}/><br />
            <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
            <input type="text" placeholder="alias" value={alias} onChange={(e)=>setAlias(e.target.value)}/><br />
            <input type="password" placeholder="contraseña" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
            <button type="submit">Registrarse</button>
        </form>
    )
}