import { useLocalStorage } from '@buzuosheng/use-localstorage'
import { Dispatch } from 'react'

import { Theme, Language } from '../services/editorSlice'

export interface Config {
  theme: Theme
  language: Language
  code: string
}

const defaultConfig = {
  theme: 'light',
  language: 'javascript',
  code: ''
} as Config

export const useConfig = (): [Config, Dispatch<Config>] => {
  const [config, setConfig] = useLocalStorage('editor-config', {
    initialValue: defaultConfig,
    prefix: 'js-play:'
  })

  return [config as typeof defaultConfig, setConfig]
}
