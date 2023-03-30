import React from 'react';
import './Card.scss';

const Card: React.FC<{className: string, children: JSX.Element | JSX.Element[]}> = ({ className, children }) => {
    return (
        <div className={`card-container ${className}`}>
            {children}
        </div>
    );
}

export default Card;
