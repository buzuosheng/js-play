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

export interface Log{
  isError: boolean,
  value: string
}

const editorSlice = createSlice({
  name: 'code',
  initialState: {
    theme: 'light',
    language: 'javascript',
    text: '',
    log: [] as Log[]
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
    },
    addLog(state, action: PayloadAction<Log[]>) {
      state.log = [...state.log, ...action.payload]
    },
    clearLog(state) {
      state.log = []
    }
  }
})

export const {
  changeTheme,
  changeLanguage,
  changeCode,
  addLog,
  clearLog
} = editorSlice.actions
export default editorSlice.reducer
