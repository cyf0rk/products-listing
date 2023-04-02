import React from 'react';
import Card from './Card';
import Button from './Button';
import './ProductCard.scss';

type ProdcutCardType = {
    title: string,
    description: string,
    image: string,
    price: number,
    currency: string,
    ageRestriction: number,
    color: string,
    buttonText: string
}

const ProductCard: React.FC<ProdcutCardType> = ({ title, description, image, price, currency, ageRestriction, color, buttonText }): JSX.Element => {
    return (
        <Card className="product-card">
            <div className="card-top-content">
                <img src={image} />
            </div>
            <div className="card-bottom-content">
                <div className="card-content-description">
                    <h2 style={{color: color}}>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="product-price" style={{color: color}}>{currency}{price}</div>
                <div className="card-content-cta">
                    <Button text={buttonText} color={color} onClick={() => {}} disabled={false} />
                    <div className="product-age-restriction" style={{backgroundColor: color}}>
                        <span className="product-age-restriction-label">AGES</span>
                        <span className="product-age-restriction-number">{ageRestriction}+</span>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default ProductCard;
