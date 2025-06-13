import './style.css'
import Line from './Line.svg'
import { useState, useEffect } from 'react';
import Modal from './modal';


export default function SessaoSolucao() {
    const [isModal1Open, setIsModal1Open] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);

    return (
        <>
            <div className="d-block d-lg-flex gap-4 mx-5 row conteiner">
                <div className="caixas col text-center">
                    <img src={Line} alt="" />
                    <h3>Qual o problema?</h3>
                    <p>A comunicação entre as crianças e profissionais de saúde, já que muitas crianças têm dificuldade em descrever seus sintomas com clareza. Limitações na comunicação verbal das crianças dificultam o relato confiável de sintomas, especialmente no caso de dores e sintomas mais difíceis de explicar, como náusea...</p>
                    <button onClick={() => setIsModal1Open(true)}>Ver mais</button>
                </div>

                <div className="caixas col text-center">
                    <img src={Line} alt="" />
                    <h3>Solução!</h3>
                    <p>O Mapa da Dor utiliza uma tela com ilustração do corpo humano de forma interativa. As crianças podem tocar nas áreas onde estão sentindo os incômodos, isso leva para uma tela ativando animações didáticas que ajudam na seleção de sintomas de forma acessível e compreensível. Após a criança completar o processo...</p>
                    <button onClick={() => setIsModal2Open(true)}>Ver mais</button>
                </div>
            </div>
            <Modal isOpen={isModal1Open} onClose={() => setIsModal1Open(false)}>
                <h3>Qual o problema?</h3>
                <p>
                    A comunicação entre as crianças e profissionais de saúde, já que muitas crianças têm dificuldade em descrever seus sintomas com clareza. Limitações na comunicação verbal das crianças dificultam o relato confiável de sintomas, especialmente no caso de dores e sintomas mais difíceis de explicar, como náusea ou fadiga. Isso pode gerar diagnósticos imprecisos e atrasos em tratamentos que podem ser vitais.
                </p>
            </Modal>
            <Modal isOpen={isModal2Open} onClose={() => setIsModal2Open(false)}>
                <h3>Solução!</h3>
                <p>
                    O Mapa da Dor utiliza uma tela com ilustração do corpo humano de forma interativa. As crianças podem tocar nas áreas onde estão sentindo os incômodos, isso leva para uma tela ativando animações didáticas que ajudam na seleção de sintomas de forma acessível e compreensível. Após a criança completar o processo, o sistema realiza uma validação ao revisar alguns sintomas já selecionados para confirmar sua consistência. Garantindo a precisão das informações coletadas. Essas informações serão enviadas aos profissionais que cuidarão desse paciente para que o diagnóstico seja feito da melhor forma possível
                </p>
            </Modal>
        </>
    )
}