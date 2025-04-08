import './style.css'

export default function SessaoSolucao() {
    return (
        <div className="d-block d-lg-flex gap-4 mx-5">
            <div className="caixas">
                <div className="titulo_caixa">
                    <h3>Qual o problema?</h3>
                </div>
                <p>A comunicação entre as crianças e profissionais de saúde, já que muitas crianças têm dificuldade em descrever seus sintomas com clareza. Limitações na comunicação verbal das crianças dificultam o relato confiável de sintomas, especialmente no caso de dores e sintomas mais difíceis de explicar, como náusea ou fadiga. Isso pode gerar diagnósticos imprecisos e atrasos em tratamentos que podem ser vitais.</p>
            </div>
            <div className="caixas">
                <div className="titulo_caixa">
                    <h3>Solução!</h3>
                </div>
                <p>O Mapa da Dor utiliza uma tela com ilustração do corpo humano de forma interativa. As crianças podem tocar nas áreas onde estão sentindo os incômodos, isso leva para uma tela ativando animações didáticas que ajudam na seleção de sintomas de forma acessível e compreensível. Após a criança completar o processo, o sistema realiza uma validação ao revisar alguns sintomas já selecionados para confirmar sua consistência. Garantindo a precisão das informações coletadas. Essas informações serão enviadas aos profissionais que cuidarão desse paciente para que o diagnóstico seja feito da melhor forma possível</p>
            </div>
        </div>
    )
}