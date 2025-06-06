import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/button.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button = ({ text }: ButtonProps) => {
  return <button className="about-btn">{text}</button>;
};
export default Button;
