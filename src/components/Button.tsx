import { useNavigate, type NavigateFunction } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/button.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

function clicked(text: string, navigate: NavigateFunction) {
  if (text === "Lets Build Something Together!") {
    navigate("/contact-me");
  } else if (text === "Submit") {
    //TODO, add email functionality
    console.log("Email Sent!");
  }
}

const Button = ({ text,  className }: ButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      className={`about-btn ${className ?? ""}`} //if className is null append nothing
      onClick={() => clicked(text, navigate)}
    >
      {text}
    </button>
  );
};
export default Button;
