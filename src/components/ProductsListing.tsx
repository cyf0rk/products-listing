import React from 'react';
import ProductCard from './ProductCard';
import './ProductsListing.scss';

const ProductsListing: React.FC = (): JSX.Element => {
    return (
        <div className="products-listing">
            <ProductCard title="Retro Bundle" description="Chatter & ByteBoi will teach you about retro gaming" price={149.99} currency="$" buttonText="Shop now"/>
            <ProductCard title="Retro Bundle" description="Chatter & ByteBoi will teach you about retro gaming" price={149.99} currency="$" buttonText="Shop now"/>
            <ProductCard title="Retro Bundle" description="Chatter & ByteBoi will teach you about retro gaming" price={149.99} currency="$" buttonText="Shop now"/>
        </div>
    );
}

export default ProductsListing;
