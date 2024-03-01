import {URL_SERVER} from "../../constantes";

const login = (usuario, navigate, setLector) =>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(usuario)
   }
    fetch(`${URL_SERVER}usuarios/login`, options)
    .then(response=>{
        if(response.ok){
            return response.json();
        }else{ throw new Error(`Error en la solicitud ${response.status}`)}
    })
    .then(userBD=>{
        localStorage.setItem("token", userBD.Token);
        const user ={
            email: userBD.Usuario.email,
            nombre: userBD.Usuario.nombre
        }
        console.log(user.email);
        setLector(user);
        navigate("/Catalogo");        
    })
    .catch(error=>{
        console.error(error);
    })
}

export {login};