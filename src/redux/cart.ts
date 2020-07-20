import {createSlice} from '@reduxjs/toolkit';

interface Product {
    productId: number;
    productName: string;
    shortDescription: string;
    detail: string;
    calories: number;
    price: number;
    productImage: string;
    timeToMake: number;
    categoryId: number;
}

interface cartProduct {
    product: Product,
    quality: number,
}

interface Cart {
    products: cartProduct[],
    total: number,
}

const initialState: Cart = {
  products: [
    {
      product: {
        productId: 1,
        productName: "A",
        shortDescription: "HAha",
        detail: "HAhsdf",
        calories: 1000,
        productImage: "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg",
        timeToMake: 10,
        categoryId: 1,
        price: 10,
      },
      quality: 5,
    },
    {
      product: {
        productId: 2,
        productName: "B",
        shortDescription: "HAha",
        detail: "HAhsdf",
        calories: 1000,
        productImage: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
        timeToMake: 10,
        categoryId: 1,
        price: 10,
      },
      quality: 2,
    },
  ],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state.products.push({
        product: action.payload.product,
        quality: action.payload.quality,
      });
      state.total = state.products.reduce((a, b) => {
        return a + b.product.price * b.quality;
      }, 0);
    },
  },
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
