import {URL_SERVER} from "../../constantes";

const login = (usuario, navigate, setLector) =>{

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(usuario)
   }
    fetch(`${URL_SERVER}usuarios?email_like=${usuario.email}`)
    .then(response=>{
        if(response.ok){
            return response.json();
        }else{ throw new Error(`Error en la solicitud ${response.status}`)}
    })
    .then(usuarios=>{
        console.log(usuarios);
        if(usuarios.length === 1){
            const user = usuarios[0];
            if(usuario.password === user.password){
                localStorage.setItem("token", JSON.stringify(usuario.token));
                const usuarioL = {
                    email: user.email,
                    nombre: user.nombre,
                    apellidos: user.apellidos
                }
                setLector(usuarioL);
                navigate("/catalogo");
            }          
        }
    })
    .catch(error=>{
        console.error(error);
    })
}

export {login};