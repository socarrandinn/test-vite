export const Spinner = (props) => {
  return (
  <div className="flex min-h-screen justify-center items-center" >
  <span className={`border-4 w-${props.size} h-${props.size} rounded-full border-l-green-600 animate-spin`} ></span>
  </div>
  )
}
