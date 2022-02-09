import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './themeSlice'
import languageSlice from './languageSlice'
import codeSlice from './codeSlice'
import configSlice from './configSlice'

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    language: languageSlice,
    code: codeSlice,
    config: configSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
