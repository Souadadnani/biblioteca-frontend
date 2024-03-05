import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Nav from "./componentes/navegacion/Nav";
import Header from './componentes/header/Header';
import './styles/globals.css'
import Footer from './componentes/footer/Footer';

function App() {

  const [lector, setLector] = useState(null);
  
  return (
    <>
      <Header></Header>
      <Nav lector={lector} setLector={setLector}></Nav>
      <Outlet context={[lector, setLector]}></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App;
