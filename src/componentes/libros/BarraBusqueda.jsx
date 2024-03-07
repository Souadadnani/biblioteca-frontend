export default function BarraBusqueda({buscada, setBuscada, setPagActual}){
    return(
        <div>
            <input type="text" placeholder="Buscar por título" value={buscada} onChange={(e)=>{setBuscada(e.target.value); setPagActual(0)}}/>
        </div>
    )
}