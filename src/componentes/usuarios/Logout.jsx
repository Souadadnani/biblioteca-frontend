export default function Logout(){

    return(
        <>
            <button onClick={localStorage.removeItem('lector')}>Cerrar Sesión</button>
        </>
    )
}