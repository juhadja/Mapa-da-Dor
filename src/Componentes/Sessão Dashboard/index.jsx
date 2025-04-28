import './style.css'
import Linha from './assets/Line.svg'
import esteto from './assets/estetoscopio.svg'
import equipamento from './assets/equipamento-medico.svg'
import kit from './assets/kit-medico.svg'
import coracao from './assets/coracao.svg'
import exame from './assets/exame.svg'
import placa from './assets/placa.svg'

export default function Dashboard() {
    return (
        <div>
            <div className='titulo_dashboard'>
                <h3>Dashboard</h3>
                <p>O sistema de informações (dashboard) é personalizado para que os profissionais tenham o acesso facilitado às informações necessárias do paciente.</p>
            </div>
            <div className='row row-cols-auto caixa'>
                <div className='caixinha col'>
                    <img src={Linha} alt="" className='linha'/>
                    <img src={esteto} alt="" className='icone' />
                    <p>Informações sobre os sintomas declarados no Mapa da Dor após a triagem aceitar</p>
                </div>
                <div className='caixinha col'>
                    <img src={Linha} alt="" className='linha'/>
                    <img src={exame} alt="" className='icone'/>
                    <p>Por dia - Resultados de exames, exames pedidos para levarem posteriormente e o diagnóstico que foi fechado</p>
                </div>
                <div className='caixinha col'>
                    <img src={Linha} alt="" className='linha'/>
                    <img src={kit} alt="" className='icone'/>
                    <p>Por dia - Sinais vitais especificados por hora e data, e observações importantes sobre</p>
                </div>
                <div className='caixinha col'>
                    <img src={Linha} alt="" className='linha'/>
                    <img src={coracao} alt="" className='icone'/>
                    <p>Por dia - As medicações dadas no hospital e as medicações prescritas com observações</p>
                </div>
                <div className='caixinha col'>
                    <img src={Linha} alt="" className='linha'/>
                    <img src={equipamento} alt="" className='icone'/>
                    <p>Histórico completo com as últimas consultas do paciente separadas por data</p>
                </div>
                <div className='caixinha col'>
                    <img src={Linha} alt="" className='linha'/>
                    <img src={placa} alt="" className='icone'/>
                    <p>Paciente agora-  (Se estiver no hospital) O que esta fazendo no momento, horários, sintomas do momento, últimos sinais vitais tirados, tudo o que foi pedido no dia que ainda não fez</p>
                </div>
            </div>
        </div>
    )
}