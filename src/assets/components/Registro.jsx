import SocialButton from "./SocialButton.jsx";
import Formulario from "./Formulario.jsx";

const Registro = () => {
  return (
    <div className="box">
      <h1>Crea una cuenta</h1>
      <div className="container">
        <SocialButton icon={<i className="fa-brands fa-facebook"></i>} />
        <SocialButton icon={<i className="fa-brands fa-github"></i>} />
        <SocialButton icon={<i className="fa-brands fa-linkedin-in"></i>} />
      </div>
      <h4>O usa tu email para registrarte</h4>
      <Formulario />
    </div>
  );
};

export default Registro;
