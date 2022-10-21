import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Cart, ICartStore } from './types';

const initialState: ICartStore = { tickets: [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<Cart>) => {
      state.tickets.push(action.payload);
    },
  },
});

export const { addTicket } = cartSlice.actions;
export const { reducer: CartReducer } = cartSlice;
