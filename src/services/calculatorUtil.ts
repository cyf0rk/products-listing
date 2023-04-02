export function calculateDiscount(price:number, discount: number) {
    const discountedPrice = price - (price * (discount / 100));
    return Math.round(discountedPrice * 100) / 100;
}
