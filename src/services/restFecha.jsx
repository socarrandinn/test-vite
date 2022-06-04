export const restFecha = (date) => {

  var fecha1 = new Date()
  var fecha2 = new Date(date)

  var dias = fecha1 - fecha2
  var diff = dias/(1000*60*60*24)

  return (Math.round(diff) + ' días')
}