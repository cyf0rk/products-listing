import axios from 'axios';

const productsApiUrl = 'http://localhost:3003/products';

export function fetchProducts(productsAmount: number, lastProductId: number) {
    return axios.get(`${productsApiUrl}?_start=${lastProductId}&_end=${productsAmount}`);
}
