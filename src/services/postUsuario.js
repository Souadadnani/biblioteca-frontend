import {URL_SERVER} from "../constantes";

const registrar = (usuario, {setLector}) =>{

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
            localStorage.setItem("email", JSON.stringify(usuario.email));
         

        })
        .catch(error=>{
            console.error(error);
        })
}


export {registrar};