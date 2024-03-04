import {URL_SERVER} from "../../constantes";

const prestarLibro = (idLibro, setActualizado) =>{
    const options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem(("token"))}`
        }
    }
    fetch(`${URL_SERVER}libros/${idLibro}`, options)
        .then(response=>{
            if(response.ok){
                setActualizado(true);
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .catch(error=>{
            console.error(error);
        })
}

const getLibrosPrestados = (setPrestados, setDevueltos) =>{
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem(("token"))}`
        }
    }
    fetch(`${URL_SERVER}libros`, options)
        .then(response=>{
            if(response.ok){
                setDevueltos(false);
                return response.json();
            }else{throw new Error(`error en la solicitud "${response.statusText}`)}
        })
        .then(data=>{
            setPrestados(data);
        })
        .catch(error=>{
            console.error(error);
        })
}

const devolverEjemplar = (ejemplar, setDevueltos) =>{
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem(("token"))}`
        }
    }
    fetch(`${URL_SERVER}libros/${ejemplar}`, options)
        .then(response=>{
            if(response.ok) {
                setDevueltos(true);
                return response.json();
            }
            else{throw new Error(`Error en la solicitud ${response.status}`)}
        })
        .catch(error=>{
            console.error(error);
        })
}

export {prestarLibro, getLibrosPrestados, devolverEjemplar};
