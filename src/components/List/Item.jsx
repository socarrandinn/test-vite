export const Item = (props) => {

  return (
    <li className="p-6 mx-auto hover:bg-white hover:cursor-pointer rounded-xl hover:shadow-xl flex items-center gap-x-2">
      <div className="shrink-0">
        <img className="h-12 w-12" src={props.icon} />
      </div>
      <div>
        <div className="text-xl font-bold text-gray-700">{props.title}</div>
        <p className="text-slate-500 text-xs">{props.description}</p>
      </div>
    </li>
  )
}