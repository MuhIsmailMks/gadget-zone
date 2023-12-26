// bagSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BagState {
  isOpen: boolean;
}

const initialState: BagState = {
  isOpen: false,
};

const bagSlice = createSlice({
  name: 'bag',
  initialState,
  reducers: {
    openBag(state) {
      state.isOpen = true;
    },
    closeBag(state) {
      state.isOpen = false;
    },
  },
});

export const { openBag, closeBag } = bagSlice.actions;
export default bagSlice.reducer;
