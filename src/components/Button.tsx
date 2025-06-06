import { useNavigate, type NavigateFunction } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/button.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

function clicked(text: string, navigate: NavigateFunction) {
  if(text === "Lets Build Something Together!"){
    navigate("/contact-me");
  }
}

const Button = ({ text }: ButtonProps) => {
  const navigate = useNavigate();
  return (
    <button className="about-btn" onClick={() => clicked(text,navigate)}>
      {text}
    </button>
  );
};
export default Button;
