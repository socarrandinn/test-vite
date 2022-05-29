import img1 from '../../assets/img1.svg'
import img2 from '../../assets/img2.svg'
import img3 from '../../assets/img3.svg'
import { Item } from './Item'

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
          <Item key={index} {...item} />
        )
        )
    }
    </ul>
  )
}
