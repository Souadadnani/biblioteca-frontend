import { Outlet } from 'react-router-dom';
import Nav from "./componentes/navegacion/Nav";
import { useState } from 'react';

function App() {

  const [lector, setLector] = useState(null);
  return (
    <>
      <Nav lector={lector} setLector={setLector}></Nav>
      <Outlet context={[lector, setLector]}></Outlet>
    </>
  )
}

export default App;
