import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formulario = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState(false);

  const AlertInput = (e) => {
    e.preventDefault();

    if (name == "" || email == "" || password == "" || confirmPassword == "") {
      setError(true);
      return;
    }

    setError(false);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    if (password !== confirmPassword) {
      return alert("Las contraseñas no son iguales");
    }
    alert("Las contraseñas son iguales");
  };

  return (
    <>
      <Form onSubmit={AlertInput}>
        {error ? (
          <p className="error">Todos los campos son obligatorios</p>
        ) : null}
        <div className="form-group">
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
              type="confirmPassword"
              placeholder="Confirma tu contraseña"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </Form.Group>
          <Button className="btn btn-dark mt-3" type="submit">
            Registrarse
          </Button>
        </div>
      </Form>
    </>
  );
};
export default Formulario;
