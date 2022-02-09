import { useDispatch } from 'react-redux'
import {
  changeLanguage,
  Language,
  LanguageState
} from '../services/languageSlice'

const Language: React.FC<LanguageState> = (props: { language: Language }) => {
  const dispatch = useDispatch()
  return (
    <div
      className="px-4 pb-1 border-solid border-t-2 outline-none hover:bg-green-300 cursor-pointer"
      onClick={() => dispatch(changeLanguage(props.language))}
    >
      {props.language}
    </div>
  )
}

export default Language
