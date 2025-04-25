import './style.css'
import Boneca from './assets/boneca.png'
import React, { useState } from 'react';

export default function Formulario() {
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
          <form action="">
            <div class="area">
              <input type="text" placeholder='Nome completo' />
            </div>
            <div class="area">
              <input type="email" placeholder='E-mail' />
            </div>
            <div class="area">
              <input type="number" placeholder='Número de telefone' />
            </div>
            <div class="areatexto">
              <textarea id="mensagem" name="mensagem" placeholder="Digite sua mensagem"></textarea>
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
