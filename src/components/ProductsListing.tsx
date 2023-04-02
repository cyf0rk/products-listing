import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductsListing.scss';
import Button from './Button';
import { Bars } from 'react-loader-spinner';
import { fetchProducts } from '../services/fetchProducts';

type Product = {
    title: string,
    image: string,
    description: string,
    price: number,
    currency: string,
    ageRestriction: number,
    color: string
}

const ProductsListing: React.FC = (): JSX.Element => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [showMore, setShowMore] = useState<boolean>(true);
    const amountOfProductsToLoad = 3;
    const [lastProductId, setLastProductIndex] = useState<number>(0);

    function loadMoreProducts() {
        setLoading(true);
        setTimeout(() =>
            fetchProducts(lastProductId + amountOfProductsToLoad, lastProductId)
                .then(res => {
                    if (res.data.length < amountOfProductsToLoad) {
                        setShowMore(false);
                    }

                    if (res.data.length !== 0) {
                        setProducts([...products, ...res.data]);
                        setLastProductIndex(lastProductId + amountOfProductsToLoad);
                    }
                })
                .catch(err => {
                    console.dir(err);
                })
                .finally(() => {
                    setLoading(false);
                })
        , 1000);
    }

    useEffect(() => {
        loadMoreProducts();
    }, []);

    return (
        <div className="products-listing-section">
            <h2>Learn electronics & coding with our best selling DIY STEM kits:</h2>
            <div className="products">
                {products && products.map((product: Product, idx: number) =>
                    <ProductCard key={idx} title={product.title} description={product.description} image={product.image}
                    price={product.price} currency={product.currency} ageRestriction={product.ageRestriction} color={product.color} buttonText="Shop now" />
                )}
            </div>
            { loading &&
                <Bars
                    height="30"
                    width="30"
                    color="#03caea"
                    ariaLabel="loader"
                    wrapperClass="loader"
                />
            }
            { showMore &&
                <Button text="Show more" color="#e4394f" onClick={loadMoreProducts} disabled={loading} />
            }
        </div>
    );
}

export default ProductsListing;
