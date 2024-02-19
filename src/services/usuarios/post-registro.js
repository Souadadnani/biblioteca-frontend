import {URL_SERVER} from "../../constantes";

const registrar = (usuario, navigate) =>{

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
            navigate("/login");
        })
        .catch(error=>{
            console.error(error);
        })
}

export {registrar};