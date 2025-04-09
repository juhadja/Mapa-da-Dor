import './style.css'
import imagem1 from './assets/1.svg'
import imagem2 from './assets/2.svg'
import imagem3 from './assets/3.svg'

export default function SessaoEtapas() {
    return (
        <div>
            <div className='sessoes_etapas d-block d-md-flex row'>
                <div className='sessao_etapa col'>
                    <img src={imagem1} alt="" className='icones' />
                    <h3>Primeira etapa</h3>
                    <p>Com o login efetuado pelo responsável, o paciente poderá usar o Mapa da Dor identificando seus sintomas de forma interativa e lúdica</p>
                </div>
                <div className='sessao_etapa col'>
                    <img src={imagem2} alt="" className='icones' />
                    <h3>Segunda etapa</h3>
                    <p>Oferecendo ao profissional da triagem informações detalhadas sobre o local e o tipo de queixa que serão analisados e se necessário editados conforme o profissional que estiver na triagem achar importante. Assim, os dados serão encaminhados para o dashboard</p>
                </div>
                <div className='sessao_etapa col'>
                    <img src={imagem3} alt="" className='icones' />
                    <h3>Terceira etapa</h3>
                    <p>O sistema de informações (dashboard) é personalizado para que os profissionais tenham o acesso facilitado às informações necessárias do paciente. Como: sintomas, sinais vitais, resultados de exames, histórico</p>
                </div>
            </div>
            <div className='listra_azul'></div>
        </div>
    )
}