import { Alert } from "react-bootstrap";

function Alerta({ messages, status }) {
  return (
    <>
      {
      messages[status] && 
      <Alert variant={messages[status].variant}>
        {messages[status].message}
      </Alert>
      }
    </>
  );
}

export default Alerta;
