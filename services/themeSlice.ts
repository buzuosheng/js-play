import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const themes = ['light', 'vs-dark']

export type Theme = 'light' | 'vs-dark'

export interface ThemeState {
  theme: Theme
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light'
  } as ThemeState,
  reducers: {
    changeTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload
    }
  }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer
