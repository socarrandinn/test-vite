export const Card = () => {
  return (
    <div className="h-auto w-full rounded-md shadow-lg shadow-slate-200 bg-white p-3 mt-2 flex flex-col gap-y-1">
      <h1 className="font-titulo-licitacion">Informacion de sistema contable</h1>
      <p className="text-xs font-normal text-gray-500 overflow-hidden overflow-ellipsis break-all">lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      <p className="truncate">...</p>

      <label className="text-xs flex flex-row gap-2 pt-2">
      <span className="inline-block">CUP 50k - 200k</span>
      <span className="flex">Proyecto I+D</span>
      <span className="flex">Hace 12 horas</span>
      </label>

    </div>
  )
}
