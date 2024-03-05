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
            alert(`${usuario.nombre} te has registrado correctamente`);
            navigate("/login");
        })
        .catch(error=>{
            console.error(error);
        })
}

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
        setLector(user);
        navigate("/");        
    })
    .catch(error=>{
        alert(`Datos de login incorrectos`);
        console.error(error);
    })
}

export {registrar, login};