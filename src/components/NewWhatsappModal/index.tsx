/* eslint-disable @next/next/no-img-element */
import { Container } from "./styles";
import React, { FormEvent, useState } from "react";

interface NewWhatsappModalProps {
  onCloseWhatsAppModal: () => void;
}

export default function NewWhatsappModal({
  onCloseWhatsAppModal,
}: NewWhatsappModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
  };

  function handleSendWhatsApp(e: FormEvent) {
    e.preventDefault();

    window.location.href = `https://api.whatsapp.com/send?phone=69985006100&text=${encodeURIComponent(
      `Olá! Meu nome é ${name}. Eu gostaria de saber mais sobre a depilação a laser.`
    )}`;
  }

  return (
    <Container>
      <div className="header">
        <h1>
          Preencha os campos abaixo para <br /> iniciar a conversa no WhatsApp
        </h1>
        <button
          type="button"
          onClick={onCloseWhatsAppModal}
          className="react-modal-close"
        >
          <img src="./close.svg" alt="Fechar modal" />
        </button>
      </div>

      <div className="content">
        <form onSubmit={handleSendWhatsApp}>
          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(maskPhone(e.target.value))}
            required
          />

          <button type="submit">
            <img src="./whatsapp.svg" alt="Botão agendamento" /> Iniciar
            conversa
          </button>
        </form>
      </div>
    </Container>
  );
}
