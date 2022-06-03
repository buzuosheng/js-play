import { Provider,useSelector } from 'react-redux'

import Header from '../components/Header'
import Main from '../components/Main'
import { store, RootState } from '../services/store'

function Home() {
  const mode = useSelector<RootState>((state) => state.config.mode)
  return (
    <div className={mode as string}>
      <div className="fixed overflow-hidden w-full min-h-full flex text-gray-900 dark:text-white bg-white dark:bg-gray-900">
        <div className="w-full flex flex-nowrap flex-col">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  )
}

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
)
