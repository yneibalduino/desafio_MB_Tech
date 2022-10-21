import { configureStore } from '@reduxjs/toolkit';

import { BoughtReducer } from './reducers/bought';
import { CartReducer } from './reducers/cart';

export const store = configureStore({
  reducer: {
    bought: BoughtReducer,
    cart: CartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
