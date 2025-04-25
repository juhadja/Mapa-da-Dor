import './style.css'
import Boneca from './assets/boneca.png'
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Formulario() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [feedback, setFeedback] = useState({ tipo: '', texto: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!nome || !email || !telefone || !mensagem) {
      setFeedback({ tipo: 'erro', texto: 'Por favor, preencha todos os campos.' });
      return;
    }
  
    const templateParams = {
      nome,
      email,
      telefone,
      mensagem,
    };
  
    emailjs.send(
      'service_66etgts',
      'template_trkj0n9',
      templateParams,
      'kGRfK8hvzyAf_FeZG'
    )
    .then(() => {
      setFeedback({ tipo: 'sucesso', texto: 'Mensagem enviada com sucesso!' });
      setNome('');
      setEmail('');
      setTelefone('');
      setMensagem('');
    })
    .catch((error) => {
      console.error('Erro ao enviar:', error);
      setFeedback({ tipo: 'erro', texto: 'Erro ao enviar mensagem. Tente novamente mais tarde.' });
    });
  };
  

  return (
    <div>

      <div className='linha_azul'></div>

      <div className='d-flex formulario'>
        <div className='textos'>
          <h3>Para mais informações</h3>
          <h2>Entre em contato <br></br> conosco!</h2>
          <img src={Boneca} alt="" />
        </div>

        <div className='area_formulario'>
          <h2>Entre em contato conosco!</h2>
          <p className='preencha_campos'>Preencha todos os campos</p>
          {feedback.texto && (
            <div className='feedback' style={{
              ...styles.mensagem,
              ...(feedback.tipo === 'erro' ? styles.erro : styles.sucesso),
            }}>
              {feedback.texto}
            </div>
          )}
          <form onSubmit={handleSubmit} action="">
            <div class="area">
              <input type="text" placeholder='Nome completo' value={nome}
          onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div class="area">
              <input type="email" placeholder='E-mail' value={email}
          onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="area">
              <input type="number" placeholder='Número de telefone' value={telefone}
          onChange={(e) => setTelefone(e.target.value)}/>
            </div>
            <div class="areatexto">
              <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem" value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}></textarea>
            </div>
            <div>
              <button className='botaoEnviar' type="submit"><p>Enviar</p></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
const styles = {
  erro: {
    backgroundColor: '#ffe5e5',
    color: '#c20000',
  },
  sucesso: {
    backgroundColor: '#e6ffe5',
    color: '#007c00',
  },
}
