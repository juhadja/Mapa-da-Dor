import './style.css'
import MenuNav from "../menuNavegacao";
import SessaoArtigo from '../Sessão_artigo';
import { useEffect, useState } from 'react';

export default function Sessao1 (){
    const [isStick, setIsStick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsStick(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    return(
        <div className='sessao_1' id='home'>
            <div className='listra-azul'>
            </div>
            <div className={`div ${isStick ? 'ajuste' : ''}`}></div>
            <MenuNav />
            <div className='area_titulos'>
                <p className='fw-semibold cor-azul-destaque mx-0 mx-md-5'>Hospital Sabará</p>
                <h1 className='titulo cor-azul fw-semibold'>Seu diagnóstico<br></br> <strong className='titulo_destaque'>interativo!</strong></h1>
                <div className='botao_teste'>
                    <a href="https://lucaspieretidev.github.io/mapa-da-dor-animacoes/">Teste você mesmo</a>
                    <i class="bi bi-arrow-up-right fs-3 cor-branco"></i>
                </div>
            </div>
            <SessaoArtigo />
        </div>
        
    )
}