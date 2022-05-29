import { compactNumber } from '../services/compactNumber'
import { restFecha } from '../services/restFecha'

export const Card = (props) => {
  const { title, description, fechaCreacion, fechaPublicacion, presupuesto, categoria } = props
  const compactPresupuesto = compactNumber(presupuesto)

  return (
    <div className="h-auto w-full relative rounded-md shadow-lg shadow-slate-200 bg-white px-3 pt-8 pb-3 mt-2 flex flex-col gap-y-1">
      {props.urgente === true && <span className="text-xs bg-amarillo-pollito mr-auto absolute top-0 left-3 font-light text-white p-1 " >Se precisa urgente</span>}
      <h1 className="font-titulo-licitacion">{title}</h1>
      <p className="text-xs font-normal overflow-hidden overflow-ellipsis break-all">{description}</p>

      <label className="text-[0.5em] xl:text-xs  flex flex-row gap-1 pt-2 items-center mr-auto">
        <ol className="text-xs xl:text-xs flex gap-x-2 items-center justify-center">
          <li className="text-slate-500">CUP {compactPresupuesto}</li>
          <li className="bg-azul-oscuro h-0.5 w-0.5 rounded-full"></li>
          <li className="text-slate-500">{categoria}</li>
          <li className="bg-azul-oscuro h-0.5 w-0.5 rounded-full"></li>
          <li className='text-slate-500'>{restFecha(fechaCreacion, fechaPublicacion)}</li>
        </ol>        
      </label>

    </div>
  )
}
