import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';
import currencyReducer from './currencySlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    currency: currencyReducer,
  },
});

export default store;
