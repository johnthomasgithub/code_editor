import { createSlice } from '@reduxjs/toolkit'

export const loader = createSlice({
  name: 'loader',
  initialState: {
    loader: false,
  },
  reducers: {
    toggleLoader: (state, action) => {
      state.loader = action.payload
    },
  },
})

export const { toggleLoader } = loader.actions

export const loaderReducer = loader.reducer
