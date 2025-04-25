import './style.css'
import MenuNav from "../menuNavegacao";
import SessaoArtigo from '../Sessão_artigo';

export default function Sessao1 (){
    return(
        <div className='sessao_1'>
            <div className='listra-azul'>

            </div>
            <MenuNav />
            <div className='area_titulos'>
                <p className='fw-semibold cor-azul-destaque mx-0 mx-md-5'>Hospital Sabará</p>
                <h1 className='titulo cor-azul fw-semibold'>Seu diagnóstico<br></br> <strong className='titulo_destaque'>interativo!</strong></h1>
                <div className='botao_teste'>
                    <a href="#">Teste você mesmo</a>
                    <i class="bi bi-arrow-up-right fs-3 cor-branco"></i>
                </div>
            </div>
            <SessaoArtigo />
        </div>
        
    )
}