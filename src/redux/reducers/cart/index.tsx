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
    removeTicketFromCart: (state, action: PayloadAction<number>) => {
      state.tickets.splice(action.payload, 1);
    },
    resetTickets: state => {
      state.tickets = [];
    },
  },
});

export const { addTicketToCart, removeTicketFromCart, resetTickets } =
  cartSlice.actions;
export const { reducer: CartReducer } = cartSlice;
