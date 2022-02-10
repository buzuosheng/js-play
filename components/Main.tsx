import { useSelector } from 'react-redux'

import { RootState } from '../services/store'
import Editor from './Editor'


const Main = () => {
  const isRow = useSelector<RootState>((state) => state.config.rowLayout)
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
        className={`flex flex-1 ${
          isRow ? 'w-1/2' : 'w-full'
        } -mt-1px p-4  outline-none overflow-y-auto bg-gray-100`}
      >
        buzuosheng
      </div>
    </div>
  )
}

export default Main
