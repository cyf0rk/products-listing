import React from 'react';
import Card from './Card';
import Button from './Button';
import './ProductCard.scss';
import { Product } from './ProductsListing';

type ProdcutCardType = Product & {
    buttonText: string
}

const ProductCard: React.FC<ProdcutCardType> = ({ title, description, image, price, discount, currency, ageRestriction, color, buttonText }): JSX.Element => {
    function calculateDiscount(price:number, discount: number) {
        const discountedPrice = price - (price * (discount / 100));
        return Math.round(discountedPrice * 100) / 100;
    }

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
                <div className="product-price" style={{color: color}}>
                    {  discount ?
                        <>
                            <span className="product-price-new">{currency}{calculateDiscount(price, discount)}</span>
                            <span className="product-price-discounted">{currency}{price}</span>
                            <span className="product-discount-description">Limited {discount}% discount</span>
                        </>
                        :
                        <span>{currency}{price}</span>
                    }
                </div>
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
