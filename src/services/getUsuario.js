import {URL_SERVER} from "../constantes";


const login = (email, password, navigate) =>{
    const [lector, setLector] = useOutletContext();
   
    fetch(`${URL_SERVER}usuarios?email_like=${email}`)
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
                setLector({usuario});
                navigate("/catalogo");
            }          
        }
    })
    .catch(error=>{
        console.error(error);
    })
}

export {login};