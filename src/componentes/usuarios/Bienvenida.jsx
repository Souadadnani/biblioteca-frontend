import Logout from "./Logout";

export default function Bienvenida({lector, setLector}) {
    return(
        <>
            <span>Bienvenid@ {lector.nombre}</span>
            <Logout lector={lector} setLector={setLector}></Logout>
        </>

    )
}