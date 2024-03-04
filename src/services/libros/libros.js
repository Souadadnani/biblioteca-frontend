import {URL_SERVER} from "../../constantes";

const getLibrosDisp = (numPag, setLibrosDisp, setActualizados) => {
    fetch(`${URL_SERVER}libros/${numPag}`)
        .then(response=>{
            if(response.ok){
                setActualizados(false);
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .then(libros=>{
            setLibrosDisp(libros);
        })
        .catch(error=>{
            console.error(error);
        })
}

const getNumPag = () =>{
    fetch(`${URL_SERVER}libros/paginas`)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .catch(error=>{
            console.error(error);
        })
}

const getNumPagBuscada = (buscada) =>{
    fetch(`${URL_SERVER}libros/${buscada}/paginas`)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .catch(error=>{
            console.error(error);
        })
}
const getLibrosBuscados = (numPag, buscada, setLibrosDisp, setActualizados) =>{
    fetch(`${URL_SERVER}libros/${buscada}/${numPag}`)
        .then(response=>{
            if(response.ok){
                setActualizados(false);
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .then(libros=>{
            setLibrosDisp(libros);
        })
        .catch(error=>{
            console.error(error);
        })
}

export {getLibrosDisp, getNumPag, getLibrosBuscados, getNumPagBuscada};