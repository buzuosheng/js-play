import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const languages = [
  'c',
  'cpp',
  'css',
  'dockerfile',
  'go',
  'graphql',
  'java',
  'javascript',
  'json',
  'markdown',
  'pgsql',
  'php',
  'powershell',
  'python',
  'redis',
  'ruby',
  'rust',
  'shell',
  'sql',
  'xml',
  'yaml'
] as Language[]

export type Language =
  | 'c'
  | 'cpp'
  | 'css'
  | 'dockerfile'
  | 'go'
  | 'graphql'
  | 'java'
  | 'javascript'
  | 'json'
  | 'markdown'
  | 'pgsql'
  | 'php'
  | 'powershell'
  | 'python'
  | 'redis'
  | 'ruby'
  | 'rust'
  | 'shell'
  | 'sql'
  | 'xml'
  | 'yaml'

export interface LanguageState {
  language: Language
}

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    language: 'javascript'
  } as LanguageState,
  reducers: {
    changeLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload
    }
  }
})

export const { changeLanguage } = languageSlice.actions
export default languageSlice.reducer
