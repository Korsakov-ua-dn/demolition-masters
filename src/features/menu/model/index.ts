import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type MenuState = {
  isOpen: boolean;
};

const initialState: MenuState = {
  isOpen: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setOpen(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const menuActions = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
