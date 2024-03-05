import Logout from "./Logout";

export default function Bienvenida({lector, setLector}) {
    return(
        <div>
            <span>Bienvenid@ {lector.nombre}</span>
            <Logout lector={lector} setLector={setLector}></Logout>
        </div>

    )
}