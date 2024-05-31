import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './componentes/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import { Prueba1 } from './vistas/Prueba1'
// import { Prueba2 } from './vistas/Prueba2'
// import { Home } from './vistas/Home'
import { ContextoProvider } from './context/GlobalContext'
import { Panel } from './vistas/Panel'
import { Login } from './vistas/Login'
import { Registro } from './vistas/Registro'


function App() {
  

  return (
    <>
     <ContextoProvider>

    
     <Router>
        <div>
          <Header></Header>
          <Routes>
            <Route path="/panel" element={<Panel />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
          </Routes>
        </div>
      </Router>
      </ContextoProvider>
    </>
  )
}

export default App
