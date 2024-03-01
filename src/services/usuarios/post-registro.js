import {URL_SERVER} from "../../constantes";

const registrar = (usuario, navigate) =>{
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario)
    };

    fetch(`${URL_SERVER}usuarios/registro`, options)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{ throw new Error(`Error en la solicitud ${response.status}`)}
        })
        .then(usuario=>{
            alert(`${usuario.nombre} te has registrado con correctamente`);
            navigate("/login");
        })
        .catch(error=>{
            console.error(error);
        })
}

export {registrar};