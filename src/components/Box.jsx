export const Box = (props) => {
  return (
    <div className="bg-azul-medio text-white pl-6 pr-16 lg:pr-32 py-14 bg-cover bg-center rounded-md flex flex-col gap-y-3" style={{
      backgroundImage: `linear-gradient(135deg, rgba(29, 157, 219, 0.85) 30%, rgba(16, 24, 52, 0.50) 90%),
      url(${props.image})
      `
    }}>
      <h2>{ props.title}</h2>
      <h1 className="text-lg lg:text-2xl">Contacta con nuevos proveedores de tu zona</h1>
      <p className="text-sm font-light">lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      <button onClick={ () => alert('esto es un bottom') } className="bg-azul-medio text-xs block items-center text-gris-claro rounded-md p-2 mr-auto hover:bg-azul-oscuro ">{props.titleButton}</button>
    </div>
  )
}
