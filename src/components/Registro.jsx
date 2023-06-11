import SocialButton from "./SocialButton.jsx";
import Formulario from "./Formulario.jsx";
import Alerta from "./Alerta.jsx"
import { useState } from "react";
const Registro = ({messages, status, setStatus }) => {
  return (
    <>
      <div className="box">
        <h1>Crea una cuenta</h1>
        <div className="d-flex gap-3">
          <SocialButton icon={"facebook"} />
          <SocialButton icon={"github"} />
          <SocialButton icon={"linkedin-in"} />
        </div>
        <p className="text-muted">O usa tu email para registrarte</p>
        <Formulario setStatus={setStatus}/>
        <Alerta messages={messages} status={status}/>
      </div>
    </>
  );
};

export default Registro;
