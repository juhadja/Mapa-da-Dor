import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sessao1 from './Componentes/Sessão_1'
import SessaoArtigo from './Componentes/Sessão_artigo'
import SessaoEtapas from './Componentes/Sessão Etapas'
import SessaoSolucao from './Componentes/Sessão solução'
import Dashboard from './Componentes/Sessão Dashboard'
import Microexpressao from './Componentes/Sessão Microexpressão'
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
        <Dashboard />
        {/* <Microexpressao />  */}
        <Formulario />
      </main>
      <footer>
        <Rodape />
      </footer>

    </div>
  )
}

export default App
