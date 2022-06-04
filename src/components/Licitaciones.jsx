import useSWR from 'swr'
import { Card } from './Card'
import { CardInfo } from './CardInfo'
import { LoadingCard } from './loading/LoadingCard'


export const Licitaciones = () => {

  const { data: licitaciones, error } = useSWR('licitacions', { suspense: true })

  if(error){
    return error
  }
  
  return (
    <>
      {
        licitaciones?.map((m, index) => (
          index == 3 ? <><Card key={m._id} {...m} /> <CardInfo /></> : <Card key={m._id} index={index} {...m} />
        ))
      }
    </>
  )
}