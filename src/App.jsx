import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './componentes/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Prueba1 } from './vistas/Prueba1'
import { Prueba2 } from './vistas/Prueba2'
import { Home } from './vistas/Home'
import { ContextoProvider } from './context/GlobalContext'


function App() {
  

  return (
    <>
     <ContextoProvider>

    
     <Router>
        <div>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prueba1" element={<Prueba1 />} />
            <Route path="/prueba2" element={<Prueba2 />} />
          </Routes>
        </div>
      </Router>
      </ContextoProvider>
    </>
  )
}

export default App
