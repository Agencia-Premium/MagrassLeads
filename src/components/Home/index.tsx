/* eslint-disable @next/next/no-img-element */

import Form from "../Form";
import { Container } from "./styles";
import { useState } from "react";
import NewWhatsappModal from "../../components/NewWhatsappModal";

export function HomeComponent() {
  const [isNewWhatsappModalOpen, setIsNewWhatsappModalOpen] = useState(false);

  function handleOpenNewWhatsAppModal() {
    setIsNewWhatsappModalOpen(true);
  }

  function handleCloseNewWhatsAppModal() {
    setIsNewWhatsappModalOpen(false);
  }

  return (
    <>
      <Container>
        <aside className={isNewWhatsappModalOpen ? "modalActive" : ""}>
          <img className="firstImg" src="./logo.svg" alt="Logo agenda" />
          <div className="agenda">
            <img className="sencondImg" src="./agenda.svg" alt="agenda" />
          </div>
        </aside>

        <main className={isNewWhatsappModalOpen ? "modalActive" : ""}>
          <div className="main-content">
            <img src="./logoMagrass.svg" alt="Logo agenda" />
            <Form onOpenWhatsAppModal={handleOpenNewWhatsAppModal} />
          </div>
        </main>
        {isNewWhatsappModalOpen && (
          <NewWhatsappModal
            onCloseWhatsAppModal={handleCloseNewWhatsAppModal}
          />
        )}
      </Container>
    </>
  );
}
