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
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      if (state.products
          .some((item: cartProduct) =>
            item.product.productId === action.payload.product.productId)) {
        console.log("in");
        const newList = state.products.map((product: cartProduct) => {
          if (product.product.productId === action.payload.product.productId) {
            return {
              ...product,
              product: product.product,
              quality: product.quality + action.payload.quality,
            };
          } else return product;
        });
        state.products = [...newList];
      } else {
        state.products.push({
          product: action.payload.product,
          quality: action.payload.quality,
        });
      }
    },
    totalCalculator(state) {
      state.total = state.products.reduce((a, b) => {
        return a + b.product.price * b.quality;
      }, 0);
    },
    changeQuality(state, action) {
      state.products = state.products.map((item: cartProduct) => {
        if (item.product.productId === action.payload.id) {
          return {...item, quality: action.payload.quality};
        } else return item;
      });
    },
    removeFromCart(state, action) {
      state.products = state.products
          .filter(
              (item) => {
                if (item.product.productId !== action.payload.productId) {
                  return item;
                }
              });
    },
    removeAllCart(state) {
      state.products = [];
    },
  },
});

export const {
  addToCart,
  changeQuality,
  totalCalculator,
  removeAllCart,
  removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
