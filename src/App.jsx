import { Top } from './components/Top'
import { SWRConfig } from 'swr'
import { intanceAxios } from './services/axios'

function App () {
  return (
    <SWRConfig
      value={{
        refreshInterval: 2000,
        fetcher: (url) => intanceAxios.get(url).then(res => res.data).catch(error => console.log(error))
      }}>
      <Top />
    </SWRConfig>
  )
}

export default App
