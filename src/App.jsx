import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sessao1 from './Componentes/Sessão_1'
import SessaoEtapas from './Componentes/Sessão Etapas'
import SessaoSolucao from './Componentes/Sessão solução'
import Formulario from './Componentes/Sessão Formulário'
import Rodape from './Componentes/Rodapé'


function App() {

  return (
    <div>
      <header>
        <Sessao1 />
      </header>
      <main>
        <SessaoEtapas />
        <SessaoSolucao />
        <Formulario />
      </main>
      <footer>
        <Rodape />
      </footer>

    </div>
  )
}

export default App
