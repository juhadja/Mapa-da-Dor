import './style.css'

export default function Cabecalho() {
    return (
        <div>
            <div className='d-flex gap-5 bg-white px-1 px-md-5 px-sm-2 d-none d-md-flex'>
                <ul className="nav justify-content-center ">
                    <li className='mt-1 '><i class="bi bi-telephone-fill cor-azul"></i></li>
                    <li className="nav-item">
                        <a className="nav-link cor-texto-azul fw-medium" aria-current="page" href="#">11 3155-2800</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link cor-texto-azul fw-medium" href="#">11 3235-2800</a>
                    </li>
                </ul>
                <ul className="nav justify-content-center">
                    <li className='mt-1'><i class="bi bi-headset cor-azul"></i></li>
                    <li className="nav-item">
                        <a className="nav-link cor-texto-azul fw-medium" href='#'>SAC</a>
                    </li>
                </ul>

                <ul className='nav justify-content-center gap-4 mt-1 pe-5 position-absolute top-0 end-0 d-none d-md-flex'>
                    <li><a href="#"><i class="bi bi-instagram cor-texto-azul fs-6"></i></a></li>
                    <li><a href="#"><i class="bi bi-facebook cor-texto-azul fs-6"></i></a></li>
                    <li><a href="#"><i class="bi bi-youtube cor-texto-azul fs-6"></i></a></li>
                    <li><a href="#"><i class="bi bi-linkedin cor-texto-azul fs-6"></i></a></li>
                </ul>
            </div>



            <div className='d-flex gap-5 fundo-azul px-4 d-md-block d-md-none'>
                <ul className="nav ">
                    <li className='mt-1 '><i class="bi bi-telephone-fill cor-texto-branco"></i></li>
                    <li className="nav-item">
                        <a className="nav-link cor-texto-branco fw-medium" aria-current="page" href="#">11 3155-2800</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link cor-texto-branco fw-medium" href="#">11 3235-2800</a>
                    </li>
                </ul>
                <ul className="nav justify-content-center  position-absolute top-0 end-0">
                    <li className='mt-1'><i class="bi bi-headset cor-texto-branco"></i></li>
                    <li className="nav-item">
                        <a className="nav-link cor-texto-branco fw-medium" href='#'>SAC</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}