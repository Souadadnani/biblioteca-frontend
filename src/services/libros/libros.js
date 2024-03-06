import {URL_SERVER} from "../../constantes";

const getTotalPag = (setTotalPaginas) =>{
    fetch(`${URL_SERVER}libros/paginas`)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .then(data=>{
            setTotalPaginas(data.numPaginas);
        })
        .catch(error=>{
            console.error(error);
        })
}

const getLibrosDisp = (pagActual, setLibrosDisp, setActualizados) => {
    fetch(`${URL_SERVER}libros/${pagActual}`)
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

const getTotalPagBuscada = (buscada, setTotalPaginas) =>{
    fetch(`${URL_SERVER}libros/${buscada}/paginas`)
        .then(response=>{
            if(response.ok){
                return response.json();
            }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
        })
        .then(data=>{
            setTotalPaginas(data.numPaginas);
        })
        .catch(error=>{
            console.error(error);
        })
}
const getLibrosBuscados = (pagActual, buscada, setLibrosDisp, setActualizados) =>{
    fetch(`${URL_SERVER}libros/${buscada}/${pagActual}`)
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

export {getLibrosDisp, getTotalPag, getLibrosBuscados, getTotalPagBuscada};