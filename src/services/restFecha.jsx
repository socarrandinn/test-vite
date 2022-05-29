export const restFecha = (date1, date2) => {

  var fecha1 = new Date(date1)
  var fecha2 = new Date(date2)

  var dias = fecha2 - fecha1
  var diff = dias/(1000*60*60*24)

  return Math.round(diff)
}