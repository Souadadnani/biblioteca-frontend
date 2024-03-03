import {URL_SERVER} from "../../constantes";

const getLibrosDisp = (numPag, setLibrosDisp, setActualizado) => {
    fetch(`${URL_SERVER}libros/${numPag}`)
    .then(response=>{
        if(response.ok){
            return response.json();
        }else{throw new Error(`Error en la solicitud ${response.statusText}`)}
    })
    .then(libros=>{
        setLibrosDisp(libros);
    })
    .catch(error=>{
        console.error(error);
    })
    setActualizado(false);
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

export {getLibrosDisp, getNumPag};