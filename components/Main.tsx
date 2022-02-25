import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../services/store'
import Editor from './Editor'
import { clearLog, Log } from '../services/editorSlice'
import { Right } from './svg/Arrows'

const Main = () => {
  const isRow = useSelector<RootState>((state) => state.config.rowLayout)
  const list = useSelector<RootState>((state) => state.editor.log)
  const dark = useSelector<RootState>((state) => state.config.mode)
  const dispatch = useDispatch()

  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [(list as Log[]).length])

  return (
    <div
      className={`flex flex-1 ${
        isRow ? 'flex-row left-0 right-0' : 'flex-col min-h-full top-0 bottom-0'
      } flex-nowrap h-full w-full border-t border-gray-200 dark:border-gray-800 outline-none overflow-hidden select-text`}
    >
      <div
        className={`flex flex-shrink-0 flex-grow-0 basis-auto ${
          isRow ? 'h-full w-1/2' : 'h-[320px] w-full'
        } -mt-1px outline-none`}
      >
        <Editor />
      </div>
      <div
        className={`flex flex-1 flex-col flexno ${
          isRow ? 'w-1/2' : 'w-full'
        } h-full -mt-1px p-2  outline-none bg-gray-100 dark:bg-gray-700 text-lg`}
      >
        <div className="flex flex-nowrap flex-row justify-between items-center h-10 px-6 py-4 border-b-2 select-none font-semibold leading-6">
          <span className="text-2xl ">Console</span>
          <button className="text-2xl" onClick={() => dispatch(clearLog())}>
            Clear
          </button>
        </div>
        <div className="flex flex-col justify-start items-center h-[29rem] w-full overflow-y-scroll font-mono">
          {(list as Log[]).map((item) => (
            <div
              className={`flex flex-row justify-start items-center w-full px-4 mt-2
            ${
              item.isError ? 'text-red-500' : 'text-gray-500'
            } leading-8 border-b border-white`}
            >
              <div className="mr-2">
                {dark ? <Right /> : <Right color="black" />}
              </div>
              {item.value}
            </div>
          ))}
          <div ref={scrollRef}></div>
        </div>
      </div>
    </div>
  )
}

export default Main
