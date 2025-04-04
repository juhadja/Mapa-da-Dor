import './style.css'
import Imagem from './assets/menina.png'

export default function SessaoArtigo() {
    return (

        <div className='d-flex sessoes'>
            <div className='sessao_imagem'>
                <img src={Imagem} alt="foto de uma menina brincando com seu urso de pelúcia" />
            </div>
            <div className='sessao_artigo'>

                <div id="carouselExampleDark" class="carousel carousel-dark slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <div className='artigo'>
                                <h2>Artigo</h2>
                                <p>A falta de uma comunicação clara entre médicos e crianças pode levar a erros de diagnóstico ou tratamentos inadequados. Em um estudo publicado no Pediatric Clinics of North America, os pesquisadores observaram que as limitações na comunicação verbal das crianças dificultam o relato confiável de sintomas, especialmente no caso de dores e sintomas subjetivos, como náusea ou fadiga.</p>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                            <div className='artigo'>
                                <h2>Artigo</h2>
                                <p>Estudos da American Academy of Pediatrics indicam que essa limitação na comunicação pode levar a diagnósticos imprecisos, tratamentos inadequados ou atrasos nos cuidados. A dificuldade em comunicar sintomas faz com que médicos precisem recorrer mais aos relatos dos pais, observação comportamental e técnicas específicas de comunicação para entender o que a criança está sentindo.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className='artigo'>
                                <h2>Artigo</h2>
                                <p>Pesquisas em ambientes pediátricos documentaram que técnicas de comunicação adaptadas, como o uso de painéis visuais de "carinhas de dor", brinquedos, e perguntas direcionadas, melhoram a compreensão dos sintomas comunicados pelas crianças. Por exemplo, o uso da escala visual analógica (VAS) para medir a dor permite que crianças indiquem a intensidade de sua dor apontando para imagens, e foi demonstrado que isso aumenta a precisão dos relatos em comparação com uma comunicação puramente verbal.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>




            </div>
        </div>

    )
}