import './style.css'
import ImagemBonecos from './assets/imagem-bonecos.svg'

export default function Microexpressao() {
    return (
        <div>
            <div className='d-flex caixa_azul'>
                <img src={ImagemBonecos} alt="" />
                <div className='textos_principais'>
                    <h2>Reconhecimento de microexpressões faciais</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices quam est, vitae ornare purus faucibus vitae. Sed ligula magna, molestie eu libero id, feugiat porttitor massa. Aenean faucibus ex eros, eu auctor eros ultrices ac. Nulla varius pharetra pellentesque. Praesent dolor risus, condimentum dictum sapien ut, convallis tempor turpis. Maecenas efficitur ultrices ligula. Nam vestibulum vitae eros eget semper.</p>
                </div>
            </div>
            <div className='d-flex caixa_azul_claro' id='contatos'>
                <div className='mini_textos'>
                    <h3>Lorem ipsum</h3>
                    <p>dolor sit amet</p>
                </div>
                <div className='mini_textos'>
                    <h3>Lorem ipsum</h3>
                    <p>dolor sit amet</p>
                </div>
                <div className='mini_textos desaparece'>
                    <h3>Lorem ipsum</h3>
                    <p>dolor sit amet</p>
                </div>
            </div>
        </div>
    )
}