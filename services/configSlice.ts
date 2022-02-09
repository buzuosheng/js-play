import { createSlice } from '@reduxjs/toolkit'

const configSlice = createSlice({
  name: 'mode',
  initialState: {
    mode: '',
    rowLayout: true
  },
  reducers: {
    changeMode(state) {
      state.mode = state.mode ? '' : 'dark'
    },
    changeRowLayout(state) {
      state.rowLayout = !state.rowLayout
    }
  }
})

export default configSlice.reducer
export const { changeMode, changeRowLayout } = configSlice.actions
