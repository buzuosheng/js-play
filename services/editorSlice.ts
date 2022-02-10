import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const themes = ['light', 'vs-dark']

export type Theme = 'light' | 'vs-dark'

export interface ThemeState {
  theme: Theme
}

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

const editorSlice = createSlice({
  name: 'code',
  initialState: {
    theme: 'light',
    language: 'javascript',
    text: ''
  },
  reducers: {
    changeTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload
    },
    changeLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload
    },
    changeCode(state, action: PayloadAction<string>) {
      state.text = action.payload
    }
  }
})

export const { changeTheme, changeLanguage, changeCode } = editorSlice.actions
export default editorSlice.reducer
