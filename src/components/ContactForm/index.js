import React, { useState } from 'react';
import { FaAt } from 'react-icons/fa';
import { MdSend, MdChat } from 'react-icons/md';

import { Container, ContainerInput, BtnContri } from './styles';

const ContactForm = () => {
  const [isFocused, setIsFocused] = useState({
    email: false, message: false
  });

  const [messageInput, setMessageInput] = useState('');

  return (
    <Container>

      <BtnContri to="/contribua">
        Criar um painel para o seu Município
      </BtnContri>

      <h1> Deixe aqui seu FeedBack(Sugestões/Críticas/Elogios)</h1>
      <form name="Contact Form" method="POST" data-netlify="true" action="/obrigado">
        <input type="hidden" name="form-name" value="Contact Form" />

        <label>Texto</label>
        <ContainerInput isFocus={isFocused.message}>
          <MdChat />
          <textarea
            rows="3"
            cols="50"
            name="message"
            onChange={(e) => setMessageInput(e.target.value)}
            onFocus={() => setIsFocused({ email: false, message: true })}
            onBlur={() => setIsFocused({ email: false, message: false })}
            placeholder="Digite aqui sua mensagem"
          />
        </ContainerInput>

        <label>Email</label>
        <ContainerInput isFocus={isFocused.email}>
          <FaAt />
          <input
            type="email"
            name="email"
            onFocus={() => setIsFocused({ email: true, message: false })}
            onBlur={() => setIsFocused({ email: false, message: false })}
            placeholder="Digite seu email"
          />
        </ContainerInput>
        {messageInput && (
          <button type="submit" disabled={!messageInput}>
            ENVIAR
            <MdSend size={20} />
          </button>
        )}
      </form>
    </Container>
  );
};

export default ContactForm;
