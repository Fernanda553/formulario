import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "./Alert";

const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [variantAlert, setVariantAlert] = useState("");

  function resetForm() {
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  const AlertInput = (e) => {
    e.preventDefault();

    if (name == "" || email == "" || password == "" || confirmPassword == "") {
      setMessageAlert("Todos los campos son obligatorios ❌");
      setShowAlert(true);
      setVariantAlert("danger");
      return;
    }
    /* hacer que el email tenga formato correcto */
    if (!email.includes("@")) {
      setShowAlert(true);
      setMessageAlert("El email no es válido ❌");
      setVariantAlert("danger");
      return;
    }

    if (password !== confirmPassword) {
      setShowAlert(true);
      setMessageAlert("Las contraseñas no son iguales ❌");
      setVariantAlert("danger");
      return;
    }
    setMessageAlert("Registro realizado con éxito ✅");
    setShowAlert(true);
    setVariantAlert("success");
    resetForm();
  };

  return (
    <>
      <Form onSubmit={AlertInput} className="w-50">
        <div className="form-group ">
          <Form.Group className="mb-3">
            <Form.Control
              type="Nombre"
              placeholder="Nombre"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="tuemail@ejemplo.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Confirma tu contraseña"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </Form.Group>

          <Button
            className="btn btn-success btn-block w-100 pt-1 pb-1"
            type="submit"
          >
            Registrarse
          </Button>
        </div>
      </Form>

      {showAlert ? <Alert text={messageAlert} variant={variantAlert} /> : null}
    </>
  );
};
export default Formulario;
