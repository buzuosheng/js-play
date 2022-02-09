import { useLocalStorage } from '@buzuosheng/use-localstorage'
import { Dispatch } from 'react'

import { Theme } from '../services/themeSlice'
import { Language } from '../services/languageSlice'

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
  const [config, setConfig] = useLocalStorage('config', {
    initialValue: defaultConfig,
    prefix: 'js-play:'
  })

  return [config as typeof defaultConfig, setConfig]
}
