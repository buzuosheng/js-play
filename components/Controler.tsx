import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useBeforeunload } from 'react-beforeunload'

import { RootState } from '../services/store'
import {
  Language,
  changeLanguage,
  changeTheme,
  Theme,
  changeCode,
  addLog,
  clearLog
} from '../services/editorSlice'
import { useConfig } from '../hooks/useConfig'

const Controler = () => {
  const theme = useSelector<RootState>((state) => state.editor.theme)
  const language = useSelector<RootState>((state) => state.editor.language)
  const code = useSelector<RootState>((state) => state.editor.text)
  const dispatch = useDispatch()

  function run(str: string): void {
    const log = `
      let temp = []
      const log = console.log
      console.log = function(str) {
        log(str)
        temp.push(str)
      }
      ${str}
      return temp
      `
    const codeRun = new Function(log)
    try {
      const res: any[] = codeRun()
      dispatch(
        addLog(
          res.map((value) =>
            value === undefined
              ? { isError: false, value: 'undefined' }
              : { isError: false, value: JSON.stringify(value) }
          )
        )
      )
    } catch (e) {
      const err = e as Error
      dispatch(addLog([{ isError: true, value: err.message }]))
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
              <button className="relative flex-none rounded-md text-sm font-semibold leading-6 py-1.5 px-3 w-20 bg-sky-500 hover:bg-sky-400 text-white dark:bg-gray-800 dark:text-white/40 cursor-printer shadow-sm dark:shadow-none">
                {theme as string}
              </button>
            }
          >
            <div
              className="px-4 pb-1 border-solid border-t-2 outline-none text-center hover:bg-green-300 cursor-pointer"
              onClick={() => dispatch(changeTheme('light'))}
            >
              light
            </div>
            <div
              className="px-4 pb-1 border-solid border-t-2 outline-none text-center hover:bg-green-300 cursor-pointer"
              onClick={() => dispatch(changeTheme('vs-dark'))}
            >
              vs-dark
            </div>
          </Popup>
        )}
      </div>
      <div className="ml-6" suppressHydrationWarning={true}>
        <button className="relative flex-none rounded-md text-sm font-semibold leading-6 py-1.5 px-1 w-20 bg-sky-500 hover:bg-sky-400 text-white dark:bg-gray-800 dark:text-white/40 cursor-printer shadow-sm dark:shadow-none">
          Javascript
        </button>
        {/* {process.browser && (
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
        )} */}
      </div>
      <div className="ml-6">
        <button
          onClick={() => run(code as string)}
          // disabled={language === 'javascript' ? false : true}
          className="relative flex-none rounded-md text-sm font-semibold leading-6 py-1.5 px-3 w-20 bg-sky-500 hover:bg-sky-400 text-white dark:bg-gray-800 dark:text-white/40 cursor-printer shadow-sm dark:shadow-none"
        >
          run
        </button>
      </div>
    </div>
  )
}

export default Controler
