import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

export interface PageState {
  isLoading: boolean;
}

const initialState: PageState = {
  isLoading: true,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.page,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsLoading } = pageSlice.actions;

export default pageSlice.reducer;
