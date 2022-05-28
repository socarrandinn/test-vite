import image3 from '../assets/pictures/image3.png'

export const CardInfo = () => {
  return (
    <div className={'h-auto w-full bg-local bg-no-repeat rounded-md shadow-lg bg-center from-azul-medio shadow-slate-200 p-3 mt-2 flex flex-col gap-y-1 justify-between'} style={{
      backgroundImage: `linear-gradient(135deg, rgba(29, 157, 219, 0.85) 30%, rgba(16, 24, 52, 0.50) 90%),
      url(${image3})
      `
    }}>
      <h1 className="text-lg w-2/3 text-white font-blod">Aquí puede encontrar su próximo cliente</h1>
      <button className="bg-azul-medio text-sm font-blod text-[#cfecf9] hover:bg-[#18244e] px-5 py-2 rounded-md mr-auto">Ver más licitaciones</button>
    </div>
  )
}
