import { useEffect, Suspense } from 'react'

import { CajaInfo } from './CajaInfo'
import { List } from './List/List'

import { Box } from './Box'


import image1 from '../assets/pictures/image1.png'
import image2 from '../assets/pictures/image2.png'

import { Licitaciones } from './Licitaciones'
import { LoadingCard } from './loading/LoadingCard'

export const Top = () => {

  const listbox = [
    { title: 'B2B', button: 'Explorar negocio', image: image1 },
    { title: 'B2B', button: 'Reclamar tu empresa', image: image2 }
  ]

  return (
    <>

      <div className="bg-[#eff7ff] h-auto">
        <div className="container py-10 mx-auto w-3/4 lg:w-3/5" >
          <h1 className="text-lg text-azul-oscuro font-semibold">Últimas licitaciones</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 justify-items-center gap-x-2">

            <Suspense fallback={<LoadingCard />}>
              <Licitaciones />
            </Suspense>

          </div>
        </div>
      </div>


      <div className="container py-10 mx-auto w-3/5" >
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-x-8">
          <CajaInfo />
          <List />
        </div>
      </div>

      <div className="container py-10 mx-auto w-3/5" >
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-x-8">
          {
            listbox?.map((m, index) => (<Box key={index} title={m.title} titleButton={m.button} image={m.image} />))
          }
        </div>
      </div>
    </>

  )
}
