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

const getLibrosPrestados = (setPrestados, setCargados) =>{
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
                return response.json();
            }else{throw new Error(`error en la solicitud "${response.statusText}`)}
        })
        .then(data=>{
            setPrestados(data);
        })
        .catch(error=>{
            console.error(error);
        })
        setCargados(false);
}

const devolverEjemplar = (ejemplar, setCargados) =>{
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem(("token"))}`
        }
    }
    fetch(`${URL_SERVER}libros/${ejemplar}`, options)
        .then(response=>{
            if(response.ok) return response.json();
            else{throw new Error(`Error en la solicitud ${response.status}`)}
        })
        .catch(error=>{
            console.error(error);
        })
        setCargados(true);
}

export {prestarLibro, getLibrosPrestados, devolverEjemplar};
