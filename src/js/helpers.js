
// Genereate unique ids
export function uuidv4 () {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}
// Generate random colors
export function getRandColor (brightness) {
  var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256]
  var mix = [brightness * 51, brightness * 51, brightness * 51]
  var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function (x) { return Math.round(x / 2.0) })
  return 'rgb(' + mixedrgb.join(',') + ')'
}
// Get Date
export function getDate () {
  return Date.now()
}
// Today
export function getToday () {
  const today = new Date()
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const dayOfWeek = weekday[today.getDay()]
  const dd = today.getDate()
  const monthList = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  const mm = monthList[today.getMonth() + 1]
  return (
    `${dayOfWeek} ${dd} ${mm}`
  )
}
