import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const codeSlice = createSlice({
  name: 'code',
  initialState: {
    text: ''
  },
  reducers: {
    changeCode(state, action: PayloadAction<string>) {
      state.text = action.payload
    }
  }
})

export const { changeCode } = codeSlice.actions
export default codeSlice.reducer
