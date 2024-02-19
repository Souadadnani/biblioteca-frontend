import { useNavigate, useOutletContext } from "react-router-dom";

export default function Catalogo(){
    const [lector, setLector] = useOutletContext();
    return(
        <h2>Catalogo</h2>
        /* {lector?<BotonPrestar/>:""} */
    )
}