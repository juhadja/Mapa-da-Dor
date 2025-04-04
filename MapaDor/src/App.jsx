import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sessao1 from './Componentes/Sessão_1'
import SessaoArtigo from './Componentes/Sessão_artigo'


function App() {

  return (
    <div>
      <Sessao1 />
      <SessaoArtigo />
    </div>
  )
}

export default App
