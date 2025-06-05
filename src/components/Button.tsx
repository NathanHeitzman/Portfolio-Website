import 'bootstrap/dist/css/bootstrap.min.css'
import '../assets/styles/button.css'

interface ButtonProps {
    text: string;
    onClick?: () => void;
}

const Button = ({text, onClick}: ButtonProps) => {
    return(
        <button>{text}</button>
    )
}
export default Button;