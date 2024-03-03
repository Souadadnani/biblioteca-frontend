export default function BarraBusqueda({buscada, setBuscada}){
    return(
        <div>
            <input type="text" placeholder="Buscar por título" value={buscada} onChange={(e)=>{setBuscada(e.target.value)}}/>
        </div>
    )
}