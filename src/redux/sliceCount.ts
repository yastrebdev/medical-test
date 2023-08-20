import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  acc: number
}

const initialState: CounterState = {
  acc: 0,
}

export const sliceCount = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setPoint: (state, action: PayloadAction<number>) => {
      state.acc += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPoint } = sliceCount.actions

export default sliceCount.reducer