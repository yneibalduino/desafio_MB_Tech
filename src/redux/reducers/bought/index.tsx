import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Bought, IBoughtStore } from './types';

const initialState: IBoughtStore = { tickets: [] };

export const boughtSlice = createSlice({
  name: 'bought',
  initialState: initialState,
  reducers: {
    addTicket: (state, action: PayloadAction<Bought>) => {
      state.tickets.push(action.payload);
    },
  },
});

export const { addTicket } = boughtSlice.actions;
export const { reducer: BoughtReducer } = boughtSlice;
