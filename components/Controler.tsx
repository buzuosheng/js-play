import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useBeforeunload } from 'react-beforeunload'

import { RootState } from '../services/store'
import LanguageComponent from './Language'
import {
  languages,
  Language,
  changeLanguage,
  changeTheme,
  Theme,
  changeCode
} from '../services/editorSlice'
import { useConfig } from '../hooks/useConfig'

const Controler = () => {
  const theme = useSelector<RootState>((state) => state.editor.theme)
  const language = useSelector<RootState>((state) => state.editor.language)
  const code = useSelector<RootState>((state) => state.editor.text)
  const dispatch = useDispatch()

  function run(str: string): void {
    const codeRun = new Function(str)
    try {
      codeRun()
    } catch (e) {
      console.log(e)
    }
  }

  const [config, setConfig] = useConfig()

  useEffect(() => {
    if (config) {
      dispatch(changeCode(config.code))
      dispatch(changeTheme(config.theme))
      dispatch(changeLanguage(config.language))
    }
  }, [])

  useBeforeunload(() => {
    setConfig({
      theme: theme as Theme,
      language: language as Language,
      code: code as string
    })
  })

  return (
    <div className="flex flex-row flex-nowrap">
      <div suppressHydrationWarning={true}>
        {process.browser && (
          <Popup
            on="hover"
            position="bottom center"
            trigger={
              <button className="relative flex-none rounded-md text-sm font-semibold leading-6 py-1.5 px-3 w-20 bg-sky-500/40 text-white dark:bg-gray-800 dark:text-white/40 cursor-printer shadow-sm dark:shadow-none">
                {theme as string}
              </button>
            }
          >
            <div
              className="px-4 pb-1 border-solid border-t-2 outline-none hover:bg-green-300 cursor-pointer"
              onClick={() => dispatch(changeTheme('light'))}
            >
              'light'
            </div>
            <div
              className="px-4 pb-1 border-solid border-t-2 outline-none hover:bg-green-300 cursor-pointer"
              onClick={() => dispatch(changeTheme('vs-dark'))}
            >
              'vs-dark'
            </div>
          </Popup>
        )}
      </div>
      <div className="ml-6" suppressHydrationWarning={true}>
        {process.browser && (
          <Popup
            on="hover"
            position="bottom center"
            trigger={
              <button className="relative flex-none rounded-md text-sm font-semibold leading-6 py-1.5 px-3 w-20 bg-sky-500/40 text-white dark:bg-gray-800 dark:text-white/40 cursor-printer shadow-sm dark:shadow-none">
                {language as string}
              </button>
            }
          >
            <div className="h-40 text-gray-700 text-center overflow-y-auto">
              {languages.map((i: Language) => (
                <LanguageComponent key={i} language={i} />
              ))}
            </div>
          </Popup>
        )}
      </div>
      <div className="ml-6">
        <button
          onClick={() => run(code as string)}
          disabled={language === 'javascript' ? false : true}
          className="relative flex-none rounded-md text-sm font-semibold leading-6 py-1.5 px-3 w-20 bg-sky-500/40 text-white dark:bg-gray-800 dark:text-white/40 cursor-printer shadow-sm dark:shadow-none"
        >
          run
        </button>
      </div>
    </div>
  )
}

export default Controler
