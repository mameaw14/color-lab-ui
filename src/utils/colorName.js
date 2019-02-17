const pant = require('nearest-pantone')

const formatColorName = s => s.split('-').map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ')
const getColorName = hex => formatColorName(pant.getClosestColor(hex).name)

export default getColorName
