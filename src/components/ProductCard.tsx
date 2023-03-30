import React from 'react';
import Card from './Card';
import Button from './Button';
import './ProductCard.scss';

type ProdcutCardType = {
    title: string,
    description: string,
    price: number,
    currency: string,
    buttonText: string
}

const ProductCard: React.FC<ProdcutCardType> = ({ title, description, price, currency, buttonText }): JSX.Element => {
    return (
        <Card className="product-card">
            <div className="card-top-content">
            </div>
            <div className="card-bottom-content">
                <div className="card-content-description">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="card-content-cta">
                    <div className="product-price">{currency}{price}</div>
                    <Button text={buttonText} />
                </div>
            </div>
        </Card>
    );
}

export default ProductCard;
