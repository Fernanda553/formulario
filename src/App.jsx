import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./index.css"
import Registro from "./components/Registro";
import { useState } from "react";

const MESSAGES = {
  isIncomplete: {
    variant: "warning",
    message: "Es necesario llenar todos los campos. ⚠"
  },
  emailInvalid: {
    variant: "danger",
    message: "El email ingresado no es valido ⛔"
  },
  noEqualPasswords: {
    variant: "danger",
    message: "Las contraseñas ingresadas no coinciden ⛔"
  },
  registerSuccess: {
    variant: "success",
    message: "Usuario registrado exitosamente ✅"
  }
}

function App() {
  const [status, setStatus] = useState()

  return (
    <>
      <Registro messages={MESSAGES} status={status} setStatus={setStatus}/>
    </>
  );
}

export default App;
