import { configureStore } from '@reduxjs/toolkit';

import { reactotron } from '../tools/reactotron';
import { BoughtReducer } from './reducers/bought';
import { CartReducer } from './reducers/cart';

export const store = configureStore({
  reducer: {
    bought: BoughtReducer,
    cart: CartReducer,
  },
  enhancers: __DEV__ ? [reactotron.createEnhancer!()] : undefined,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
