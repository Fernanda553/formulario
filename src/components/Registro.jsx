import SocialButton from "./SocialButton.jsx";
import Formulario from "./Formulario.jsx";

const Registro = () => {
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
        <Formulario />
      </div>
    </>
  );
};

export default Registro;
