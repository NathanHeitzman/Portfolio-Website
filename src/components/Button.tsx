import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/button.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}
function clicked() {
  
}

const Button = ({ text }: ButtonProps) => {
  return <button className="about-btn" onClick={clicked}>{text}</button>;
};
export default Button;
