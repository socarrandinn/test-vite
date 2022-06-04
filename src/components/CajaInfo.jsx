import { useState } from 'react'
import { ExternalLinkIcon } from '@heroicons/react/solid'

export const CajaInfo = () => {

  const [change, setChange] = useState(false)
  return (
    <div className="flex flex-col gap-y-3">
      <blockquote className="text-4xl font-semibold text-left mr-auto text-slate-900">
        <span className="text-azul-medio leading-normal">Ventajas <span className="text-gray-700">de usar la plataforma</span></span>
      </blockquote>

      <div className='flex justify-between gap-x-2 items-center bg-azul-medio mt-5 px-1.5 py-1 rounded-full text-xs font-bold bg-opacity-80 mr-auto cursor-pointer'>
        <span className={`${change === true ? 'bg-white py-2  px-1 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer' : 'text-white'} px-2 overflow-ellipsis overflow-hidden whitespace-nowrap`}
          onClick={() => setChange(!change)}
        >Personas naturales</span>
        <span className={`${change === false ? 'bg-white py-2 px-1 rounded-full shadow-lg hover:bg-gray-100 cursor-pointer' : 'text-white'} px-2 overflow-ellipsis overflow-hidden whitespace-nowrap  `}
          onClick={() => setChange(!change)}
        >Público Empresarial</span>
      </div>

      {change === true ?
        <>
          <p>
            Encuentre en este sitio el espacio idóneo para <strong className="text-azul-medio">promocionarte de forma gartuita</strong>
          </p>
          <p>Potencie el encadenamiento productivo a través del
            acceso a las informaciones más relevantes del entramado
            empresarial cubano.</p>
        </> :  
        <>
        <p>
          Encuentre en este sitio el espacio idóneo para <strong className="text-azul-medio">promocionarte de forma gartuita</strong>
        </p>
        <p>lorente el encadenamiento productivo a través del acceso a través del acceso a través del acceso a través del.</p>
      </>
    }
      <button className="bg-white hover:bg-azul-medio flex gap-x-2 hover:text-white shadow-lg rounded-md text-sm font-bold border-2 border-azul-oscuro mr-auto px-3 py-2">Perfil empresarial <ExternalLinkIcon className='w-5 h-5' /> </button>
    </div>
  )
}
