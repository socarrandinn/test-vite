import { CajaInfo } from './CajaInfo'
import { Card } from './Card'
import { CardInfo } from './CardInfo'
import { List } from './List'

import { Box } from './Box'

import image1 from '../assets/pictures/image1.png'
import image2 from '../assets/pictures/image2.png'

export const Top = () => {
  const listbox = [
    {
      title: 'B2B',
      button: 'Explorar negocio',
      image: image1
    },
    {
      title: 'B2B',
      button: 'Reclamar tu empresa',
      image: image2
    }
  ]
  return (
    <>
      <div className="bg-azul-claro h-auto">
        <div className="container py-10 mx-auto w-3/4 lg:w-3/5" >
          <h1 className="text-lg text-azul-oscuro font-semibold">Últimas licitaciones</h1>
          <div class="grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-2">
            <Card />
            <Card />
            <Card />
            <Card />
            <CardInfo />
            <Card />
          </div>
        </div>
      </div>
      <div className="container py-10 mx-auto w-3/5" >
        <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-x-8">
          <CajaInfo />
          <List />
        </div>
      </div>

      <div className="container py-10 mx-auto w-3/5" >
        <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-x-8">
          {
            listbox?.map(m => (<Box title = {m.title} titleButton = {m.button} image = {m.image }/>))
          }
        </div>
      </div>
    </>

  )
}
