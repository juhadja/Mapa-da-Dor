import './style.css'
import Logo from './assets/logo.svg'

export default function MenuNav() {
  return (

    <nav class="navbar navbar-expand-md">
      <div class="container-fluid">
        <img className="logo m-3 mx-3 mx-lg-5" src={Logo} alt="logo do sabará" />
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto gap-4 mb-2 mb-lg-0 justify-content-center">
            <li class="nav-item">
              <a class="nav-link fw-medium cor-texto-azul fs-6" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-medium cor-texto-azul fs-6" href="#">Solução</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-medium cor-texto-azul fs-6" href="#">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-medium cor-texto-azul fs-6" href="#">Contatos</a>
            </li>
          </ul>
          <div>
            <div className='botao_mapa' ><a href="#">Mapa da Dor</a></div>
          </div>
        </div>
      </div>
    </nav>

  )
}