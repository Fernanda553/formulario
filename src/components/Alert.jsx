import { Alert as EasterEgg } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Alert({ variant, text }) {
  const handleClick = () => {
    if (variant === "danger") {
      toast.error(text);
      return;
    }
    if (variant === "success") {
      toast.success(text);
      return;
    }

    toast(text);
  };

  return (
    <>
      <EasterEgg variant={variant} onClick={handleClick}>
        {text}
      </EasterEgg>
      <ToastContainer />
    </>
  );
}

export default Alert;
