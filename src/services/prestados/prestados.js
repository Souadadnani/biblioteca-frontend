import {URL_SERVER} from "../../constantes";

const prestarLibro = (idLibro, email, setActualizado) =>{
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem(("token"))}`
        },
        body: JSON.stringify({email})
    }
    fetch(`${URL_SERVER}libros/${idLibro}`, options)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .catch(error=>{
            console.error(error);
        })
        setActualizado(true);
}


const getLibrosPrestados = (setPrestados) =>{
    fetch(`${URL_SERVER}libros`)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{throw new Error(`error en la solicitud "${response.statusText}`)}
        })
        .then(data=>{
            setPrestados(data);
        })
        .catch(error=>{
            console.error(error);
        })
        setActualizado(false);
}


export {prestarLibro, getLibrosPrestados};
