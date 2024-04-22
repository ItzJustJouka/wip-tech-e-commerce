import React, { FormEventHandler } from 'react'
import './Form.css'

interface FormProps {
    title: string
    children: React.ReactNode
    onSubmit: (event: FormData) => void
}

const Form: React.FC<FormProps> = ({ title, children, onSubmit }) => {
    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
        onSubmit(formData);
    };

    return (
        <div className="form-container">
            <form className="input-form" onSubmit={handleSubmit}>
                <h3>{title}</h3>
                <fieldset className="field-container">{children}</fieldset>
            </form>
        </div>
    );
};

export default Form
