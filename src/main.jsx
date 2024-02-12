import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Registro from './componentes/usuarios/Registro.jsx'
import Login from './componentes/usuarios/Login.jsx'


const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <h1>Biblioteca</h1>},
      {path: "registrar", element: <Registro />},
      {path: "login", element: <Login />}
     /*  {path: "catalogo", element: <Catalogo />},
      {path: "prestados", element: <Prestados />} */

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
