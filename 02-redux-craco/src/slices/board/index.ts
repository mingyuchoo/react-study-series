import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk, RootState } from '@/store';

export interface BoardState {
  value: number;
  status: 'IDLE' | 'LOADING' | 'ERROR';
}

const initialState: BoardState = {
  value: 0,
  status: 'IDLE',
};

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    increaseByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increase, decrease, increaseByAmount } = boardSlice.actions;

export const selectCount = (state: RootState) => state.board.value;

export const increaseIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCount(getState());
    if (currentValue % 2 === 1) {
      dispatch(increaseByAmount(amount));
    }
  };

export default boardSlice.reducer;
