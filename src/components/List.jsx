import img1 from '../assets/img1.svg'
import img2 from '../assets/img2.svg'
import img3 from '../assets/img3.svg'

export const List = () => {
  const list = [
    { title: 'Llega a más clientes', description: 'Actualiza la información de tu negocio que ven tus potenciales clientes y destaca sobre la competencia', icon: img1 },
    { title: 'Descube nuevos proveedores', description: 'Encuentra los proveedores nacionales que puedan satisfacer las necesidades de tu negocio', icon: img2 },
    { title: 'Conecta con otros negocios', description: 'Conocer el mercado te ayuda a idear oportunidades de negocio que no contemplabas', icon: img3 }
  ]

  return (
    <ul className="flex flex-col mx-auto gap-y-2">
      {
        list?.map((item, index) => (
          <li key={index} className="p-6 mx-auto hover:bg-white hover:cursor-pointer rounded-xl hover:shadow-xl flex items-center gap-x-2">
          <div className="shrink-0">
            <img className="h-12 w-12" src={item.icon} />
          </div>
          <div>
            <div className="text-xl font-bold text-gray-700">{item.title}</div>
            <p className="text-slate-500 text-xs">{item.description}</p>
          </div>
        </li>
        )
        )
    }
    </ul>
  )
}
