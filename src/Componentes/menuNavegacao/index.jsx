import './style.css'
import Logo from './assets/logo.png'
import { useEffect, useState } from 'react';

export default function MenuNav() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <nav className="navbar navbar-expand-md " >
        <div class="container-fluid">
          <a href="#home"><img className="logo mx-3 mx-lg-5" src={Logo} alt="logo do sabará" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto gap-4 mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link fw-medium cor-texto-azul fs-6" aria-current="page" href="#home">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-medium cor-texto-azul fs-6" href="#solucao">Solução</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-medium cor-texto-azul fs-6" href="#dashboard">Dashboard</a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-medium cor-texto-azul fs-6" href="#contatos">Contatos</a>
              </li>
            </ul>
            <div>
              <div className='botao_mapa' ><a href="#">Mapa da Dor</a></div>
            </div>
          </div>
        </div>
      </nav>
    </header>

  )
}