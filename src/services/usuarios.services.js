import { redirect } from "react-router-dom";
import {URL_SERVER} from "../constantes";
import Catalogo from "../componentes/libros/catalogo"

const registrar = (nombre, apellidos, email, alias, password) =>{
    const usuario = {   
        "email": email,
        "alias": alias,
        "password": password,
        "nombre": nombre,
        "apellidos": apellidos
    };

    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    };

    fetch(`${URL_SERVER}usuarios`, options)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{ throw new Error(`Error en la solicitud ${response.status}`)}
        })
        .then(usuario=>{
            console.log(usuario);
            console.log("usuario registrado");
        })
        .catch(error=>{
            console.error(error);
        })
}

const login = async (dato, password) =>{
   
    fetch(`${URL_SERVER}usuarios?alias_like=${dato}`)
    .then(response=>{
        if(response.ok){
            return response.json();
        }else{ throw new Error(`Error en la solicitud ${response.status}`)}
    })
    .then(usuarios=>{
        console.log(usuarios);
        if(usuarios.length === 1){
            const usuario = usuarios[0];
            if(password === usuario.password){
                localStorage.setItem("alias", JSON.stringify(usuario.alias));
                console.log(usuario.nombre);
                return redirect("../componentes/libros/catalogo");
            }          
        }
    })
    .catch(error=>{
        console.error(error);
    })
}






export {registrar, login};