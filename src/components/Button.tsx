import React from 'react';
import './Button.scss';

type ButtonType = {
    text: string,
    color: string,
    onClick: () => void,
    disabled: boolean
}

const Button: React.FC<ButtonType> = ({ text, color, onClick, disabled }): JSX.Element => {
    return (
        <div className="button-container">
            <button className="button" style={{ backgroundColor: color }} onClick={onClick} disabled={disabled}>{text}</button>
        </div>
    );
}

export default Button;
