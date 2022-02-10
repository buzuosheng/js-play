import { useLocalStorage } from '@buzuosheng/use-localstorage'
import { useEffect } from 'react'
import { useBeforeunload } from 'react-beforeunload'
import { useDispatch, useSelector } from 'react-redux'

import { changeMode, changeRowLayout } from '../services/configSlice'
import { RootState } from '../services/store'
import Controler from './Controler'
import Share from './Share'

const Header = () => {
  const dispatch = useDispatch()
  const mode = useSelector<RootState>((state) => state.config.mode)
  const isRow = useSelector<RootState>((state) => state.config.rowLayout)

  const [config, setConfig] = useLocalStorage('config', {
    prefix: 'js-play',
    initialValue: {
      mode: '',
      rowLayout: true
    }
  })

  useEffect(() => {
    if (config) {
      if (config.mode !== mode) dispatch(changeMode())
      if (config.rowLayout !== isRow) dispatch(changeRowLayout())
    }
  }, [])

  useBeforeunload(() => {
    setConfig({
      mode: mode as string,
      rowLayout: isRow as boolean
    })
  })

  return (
    <header className="relative z-20 flex-none py-3 pl-5 pr-3 sm:pl-6 sm:pr-4 md:pr-3.5 lg:px-6 flex items-center space-x-4 antialiased">
      <div className="flex-auto flex items-center min-w-0 space-x-6">
        <svg
          width="171"
          height="21"
          fill="none"
          className="flex-none text-black dark:text-white"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.414.441c-4.377 0-7.113 2.189-8.207 6.566 1.642-2.188 3.556-3.01 5.745-2.462 1.249.312 2.141 1.218 3.13 2.22 1.608 1.634 3.471 3.525 7.54 3.525 4.376 0 7.112-2.189 8.206-6.566-1.641 2.189-3.556 3.01-5.745 2.462-1.248-.312-2.14-1.218-3.129-2.22C22.345 2.332 20.482.44 16.414.44zM8.207 10.29c-4.377 0-7.113 2.189-8.207 6.566 1.641-2.189 3.556-3.01 5.745-2.463 1.249.313 2.141 1.218 3.13 2.221 1.608 1.634 3.471 3.524 7.54 3.524 4.376 0 7.112-2.188 8.206-6.565-1.641 2.188-3.556 3.009-5.745 2.462-1.248-.312-2.14-1.218-3.129-2.22-1.61-1.634-3.472-3.525-7.54-3.525z"
            fill="#38BDF8"
          ></path>
          <path
            d="M50.135 7.576v-2.36h-2.812V2.042l-2.45.726v2.45h-2.086v2.359h2.086v5.443c0 2.949 1.497 3.992 5.262 3.538v-2.2c-1.86.091-2.812.114-2.812-1.338V7.576h2.812zM60.874 5.217v1.61c-.862-1.18-2.2-1.905-3.97-1.905-3.084 0-5.647 2.586-5.647 5.965 0 3.357 2.563 5.965 5.648 5.965 1.769 0 3.107-.726 3.969-1.928v1.633h2.45V5.217h-2.45zm-3.584 9.3c-2.041 0-3.584-1.52-3.584-3.63s1.543-3.629 3.584-3.629c2.041 0 3.584 1.52 3.584 3.63 0 2.108-1.543 3.628-3.584 3.628zM67.403 3.516c.862 0 1.565-.726 1.565-1.565 0-.862-.703-1.565-1.565-1.565s-1.565.703-1.565 1.565c0 .839.704 1.565 1.565 1.565zM66.18 16.557h2.45V5.217h-2.45v11.34zM71.472 16.557h2.45V0h-2.45v16.557zM89.83 5.217l-2.222 7.825-2.359-7.825h-2.336l-2.382 7.825-2.2-7.825h-2.585l3.56 11.34h2.405l2.381-7.643 2.36 7.643h2.403l3.561-11.34h-2.585zM95.445 3.516c.862 0 1.565-.726 1.565-1.565 0-.862-.703-1.565-1.565-1.565s-1.565.703-1.565 1.565c0 .839.703 1.565 1.565 1.565zM94.22 16.557h2.45V5.217h-2.45v11.34zM105.479 4.922c-1.542 0-2.767.567-3.515 1.746V5.217h-2.45v11.34h2.45V10.48c0-2.314 1.27-3.266 2.88-3.266 1.543 0 2.541.907 2.541 2.63v6.714h2.449V9.594c0-2.948-1.814-4.672-4.355-4.672zM121.454.68v6.147c-.862-1.18-2.2-1.905-3.97-1.905-3.084 0-5.647 2.586-5.647 5.965 0 3.357 2.563 5.965 5.647 5.965 1.77 0 3.108-.726 3.97-1.928v1.633h2.449V.68h-2.449zm-3.584 13.836c-2.041 0-3.584-1.52-3.584-3.629 0-2.11 1.543-3.629 3.584-3.629 2.041 0 3.584 1.52 3.584 3.63 0 2.108-1.543 3.628-3.584 3.628z"
            fill="currentColor"
          ></path>
          <path
            d="M133.181 4.859h-4.362v11.699h2.306v-3.844h2.056c2.256 0 3.994-1.738 3.994-3.928 0-2.189-1.738-3.927-3.994-3.927zm0 5.699h-2.056V7.015h2.056c.986 0 1.705.752 1.705 1.771 0 1.003-.719 1.772-1.705 1.772zM142.654 14.352V4.859h-2.306v11.699h6.769v-2.206h-4.463zM157.945 16.558h2.507l-4.111-11.7h-2.858l-4.095 11.7h2.491l.701-2.106h4.663l.702 2.106zm-4.629-4.262l1.604-4.78 1.605 4.78h-3.209zM171 4.859h-2.607l-2.54 4.88-2.541-4.88h-2.607l3.995 7.136v4.563h2.289v-4.563L171 4.86z"
            fill="#38BDF8"
          ></path>
        </svg>
        {/* TODO 分享功能 */}
        {/* <Share /> */}
      </div>
      <Controler />
      <div className="hidden sm:block mx-6 lg:mx-4 w-px h-6 bg-gray-200 dark:bg-gray-700"></div>
      <div className="flex items-center">
        <div className="hidden lg:flex items-center rounded-md ring-1 ring-gray-900/5 shadow-sm dark:ring-0 dark:bg-gray-800 dark:shadow-highlight/4">
          <button
            type="button"
            onClick={() => {
              if (!isRow) dispatch(changeRowLayout())
            }}
            className="group focus:outline-none focus-visible:ring-2 rounded-md focus-visible:ring-sky-500 dark:focus-visible:ring-sky-400"
          >
            <span className="sr-only">Switch to vertical split layout</span>
            <svg
              width="42"
              height="36"
              viewBox="-8 -7 42 36"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={
                isRow
                  ? 'fill-sky-100 stroke-sky-500 dark:fill-sky-400/50 dark:stroke-sky-400'
                  : 'fill-gray-100 stroke-gray-400/70 hover:fill-gray-200 hover:stroke-gray-400 dark:fill-gray-400/20 dark:stroke-gray-500 dark:hover:fill-gray-400/30 dark:hover:stroke-gray-400'
              }
            >
              <path
                d="M12 3h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-9"
                fill="none"
              ></path>
              <path d="M3 17V5a2 2 0 0 1 2-2h7a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2Z"></path>
            </svg>
          </button>
          <button
            type="button"
            onClick={() => {
              if (isRow) dispatch(changeRowLayout())
            }}
            className="group focus:outline-none focus-visible:ring-2 rounded-md focus-visible:ring-gray-400/70 dark:focus-visible:ring-gray-500"
          >
            <span className="sr-only">Switch to horizontal split layout</span>
            <svg
              width="42"
              height="36"
              viewBox="-8 -7 42 36"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={
                isRow
                  ? 'fill-gray-100 stroke-gray-400/70 hover:fill-gray-200 hover:stroke-gray-400 dark:fill-gray-400/20 dark:stroke-gray-500 dark:hover:fill-gray-400/30 dark:hover:stroke-gray-400'
                  : 'fill-sky-100 stroke-sky-500 dark:fill-sky-400/50 dark:stroke-sky-400'
              }
            >
              <path d="M23 11V3H3v8h20Z" strokeWidth="0"></path>
              <path
                d="M23 17V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2ZM22 11H4"
                fill="none"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden sm:block mx-6 lg:mx-4 w-px h-6 bg-gray-200 dark:bg-gray-700"></div>
        <button
          type="button"
          onClick={() => dispatch(changeMode())}
          className="ml-4 sm:ml-0 ring-1 ring-gray-900/5 shadow-sm hover:bg-gray-50 dark:ring-0 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-highlight/4 group focus:outline-none focus-visible:ring-2 rounded-md focus-visible:ring-sky-500 dark:focus-visible:ring-2 dark:focus-visible:ring-gray-400"
        >
          <span className="sr-only">
            <span className="dark:hidden">Switch to dark theme</span>
            <span className="hidden dark:inline">Switch to light theme</span>
          </span>
          <svg
            width="36"
            height="36"
            viewBox="-6 -6 36 36"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-sky-500 fill-sky-100 group-hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:group-hover:stroke-gray-300"
          >
            <g className="dark:opacity-0">
              <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
              <path
                d="M12 4v.01M17.66 6.345l-.007.007M20.005 12.005h-.01M17.66 17.665l-.007-.007M12 20.01V20M6.34 17.665l.007-.007M3.995 12.005h.01M6.34 6.344l.007.007"
                fill="none"
              ></path>
            </g>
            <g className="opacity-0 dark:opacity-100">
              <path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"></path>
              <path
                d="M12 3v1M18.66 5.345l-.828.828M21.005 12.005h-1M18.66 18.665l-.828-.828M12 21.01V20M5.34 18.666l.835-.836M2.995 12.005h1.01M5.34 5.344l.835.836"
                fill="none"
              ></path>
            </g>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
