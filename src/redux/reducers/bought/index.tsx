import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Bought, IBoughtStore } from './types';

const initialState: IBoughtStore = { tickets: [] };

export const boughtSlice = createSlice({
  name: 'bought',
  initialState: initialState,
  reducers: {
    boughtTickets: (state, action: PayloadAction<Bought[]>) => {
      state.tickets = [...state.tickets, ...action.payload];
    },
  },
});

export const { boughtTickets } = boughtSlice.actions;
export const { reducer: BoughtReducer } = boughtSlice;
