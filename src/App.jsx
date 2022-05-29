import { Top } from './components/Top'
import { SWRConfig } from 'swr'
import { intanceAxios } from './services/axios'

// import { Suspense } from 'react'

function App () {
  return (
    <SWRConfig
      value={{
        refreshInterval: 2000,
        fetcher: (url) => intanceAxios.get(url).then(res => res.data)
      }}>
      <Top />
    </SWRConfig>
  )
}

export default App
