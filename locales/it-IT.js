import home from './_it-IT/home.json'
import shared from './_it-IT/shared.json'
import schema from './_it-IT/schema.json'

const data = {
  home,
  shared,
  schema
}

export default () => {
  return new Promise(function (resolve) {
    resolve(data)
  })
}
