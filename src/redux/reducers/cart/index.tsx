import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Cart, ICartStore } from './types';

const initialState: ICartStore = { tickets: [] };

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addTicketToCart: (state, action: PayloadAction<Cart>) => {
      state.tickets.push(action.payload);
    },
    removeTicketFromCart: state => {
      state.tickets = [];
    },
  },
});

export const { addTicketToCart } = cartSlice.actions;
export const { removeTicketFromCart } = cartSlice.actions;
export const { reducer: CartReducer } = cartSlice;
