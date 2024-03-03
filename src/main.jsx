import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Registro from './componentes/usuarios/Registro.jsx'
import Login from './componentes/usuarios/Login.jsx'
import Catalogo from './componentes/libros/Catalogo.jsx'
import Prestamos from './componentes/prestamos/Prestamos.jsx'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <Catalogo />},
      {path: "registrar", element: <Registro />},
      {path: "login", element: <Login />},
      {path: "prestamos", element: <Prestamos />}
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
