import React from 'react';
import './Button.scss';

type ButtonType = {
    text: string
}

const Button: React.FC<ButtonType> = ({ text }): JSX.Element => {
    return (
        <div className="button-container">
            <button className="button">{text}</button>
        </div>
    );
}

export default Button;
