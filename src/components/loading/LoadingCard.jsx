export const LoadingCard = (props) => {

  return (
    <>
      {
        [1, 2, 3, 4, 5, 6].map(m => <div hey={m} className="h-auto w-full relative rounded-md shadow-lg shadow-slate-200 bg-white px-3 pt-8 pb-3 mt-2 flex flex-col gap-y-2">
          <h1 className="font-titulo-licitacion w-2/4 h-2 bg-slate-300 animate-pulse"></h1>
          <p className="text-xs font-normal overflow-hidden overflow-ellipsis break-all w-full h-3 bg-slate-300 animate-pulse "></p>
          <p className="text-xs font-normal overflow-hidden overflow-ellipsis break-all w-full h-3 bg-slate-300 animate-pulse "></p>
          <p className="text-xs font-normal overflow-hidden overflow-ellipsis break-all w-3/4 h-3 bg-slate-300 animate-pulse "></p>
        </div>)
      }
    </>
  )
}
