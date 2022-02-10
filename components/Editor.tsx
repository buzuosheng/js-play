import Monaco from '@monaco-editor/react'
import { useSelector, useDispatch } from 'react-redux'

import { changeCode } from '../services/editorSlice'
import { RootState } from '../services/store'
import { Loading } from './Loading'

const Editor = () => {
  const dispatch = useDispatch()
  const text = useSelector<RootState>((state) => state.editor.text)
  const theme = useSelector<RootState>((state) => state.editor.theme)
  const language = useSelector<RootState>((state) => state.editor.language)

  return (
    <Monaco
      theme={theme as string}
      defaultLanguage="javascript"
      defaultValue="// some comment"
      value={text as string}
      language={language as string}
      loading={<Loading />}
      onChange={(value) => {
        if (value) dispatch(changeCode(value))
      }}
    />
  )
}

export default Editor
