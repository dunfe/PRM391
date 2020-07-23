export interface Product {
    productId: number;
    productName: string;
    shortDescription: string;
    detail: string;
    calories: number;
    price: number;
    productImage: string;
    timeToMake: number;
    categoryId: number;
    isFavourite: boolean;
}

export interface cartProduct {
    product: Product,
    quality: number,
}

export interface Cart {
    products: cartProduct[],
    total: number,
}

export interface CartState {
    cart: Cart
}
