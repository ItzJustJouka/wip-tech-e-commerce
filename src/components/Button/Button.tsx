import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import { ComponentProps } from "react";
import './Button.css'

type ButtonProps = ComponentProps<'button'>

const Button = (props: ButtonProps) => {
    const { children, ...attrs } = props;
    return <button {...attrs} className="btn-style">{children}</button>
}

export default Button;