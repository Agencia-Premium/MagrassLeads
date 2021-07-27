/* eslint-disable @next/next/no-img-element */
import React, { FormEvent, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";

import { citysMatoGrosso, citysRondonia, states } from "../../Mock/index";

import { Container } from "./styles";

type FormData = {
  nome: string;
  telefone: string;
  estado: string;
  cidade: string;
};

interface FormProps {
  onOpenWhatsAppModal: () => void;
}

export default function Form({ onOpenWhatsAppModal }: FormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
  };

  let listCitys = [];

  if (state == "Mato Grosso") {
    listCitys = citysMatoGrosso;
  } else if (state == "Rondônia") {
    listCitys = citysRondonia;
  }

  async function sendToExcell() {
    const formData: FormData = {
      nome: name,
      telefone: phone,
      estado: state,
      cidade: city,
    };

    await axios
      .post(
        "https://sheet.best/api/sheets/2ee7cddf-6504-4de6-a723-e8043e1b13dc",
        formData
      )
      .then(() => {
        toast.success("Formulário enviado com sucesso!");
        setName("");
        setPhone("");
        setState("");
        setCity("");
      });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    await sendToExcell();
  }

  return (
    <>
      <Container>
        <form id="formMagrass" onSubmit={handleSubmit}>
          <h2>Formulário para agendamento</h2>

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

          <select
            required
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option value=""> Selecione o estado </option>
            {states.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>

          <select
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value=""> Selecione uma cidade </option>
            {listCitys.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </select>

          <div className="buttoncheck">
            <input className="botaoCheck" type="checkbox" id="check" required />
            <label className="check" htmlFor="check">
              Concordo com os
              <a href="./politica-privacidade" target="_blank">
                Termos e Políticas
              </a>
              deste Website.
            </label>
          </div>

          <button type="submit">
            <img src="./buttonEnviar.svg" alt="Botão agendamento" /> Realizar
            agendamento
          </button>

          <div className="separator">OU</div>

          <button id="sendWhatsapp" type="button" onClick={onOpenWhatsAppModal}>
            <img src="./whatsapp.svg" alt="Botão whatsapp" /> Entre em contato
            via whatsapp
          </button>
        </form>
      </Container>
    </>
  );
}
