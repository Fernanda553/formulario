import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Formulario = ({ setStatus }) => {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const [user, setUser] = useState({
    name: "",
    email: "", 
    password: "",
    confirmPassword: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( 
      user.name.trim() == "" || 
      user.email.trim() == "" || 
      user.password.trim() == "" || 
      user.confirmPassword.trim() == ""
      ) {
      setStatus("isIncomplete")
      return;
    }
    /* hacer que el email tenga formato correcto */
    if (!emailRegex.test(user.email)) {
      setStatus("emailInvalid")
      return;
    }

    if (user.password !== user.confirmPassword) {
      setStatus("noEqualPasswords")
      return;
    }

    setStatus("registerSuccess")
  }
  

  return (
    <>
      <Form onSubmit={handleSubmit} className="w-50">
        <div className="form-group ">
          <Form.Group className="mb-3">
            <Form.Control
              type="Nombre"
              placeholder="Nombre"
              onChange={(e) => setUser({...user, name: e.target.value})}
              value={user.name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              placeholder="tuemail@ejemplo.com"
              onChange={(e) => setUser({...user, email: e.target.value})}
              value={user.email}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setUser({...user, password: e.target.value})}
              value={user.password}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Confirma tu contraseña"
              onChange={(e) => setUser({...user, confirmPassword: e.target.value})}
              value={user.confirmPassword}
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
    </>
  );
};
export default Formulario;
