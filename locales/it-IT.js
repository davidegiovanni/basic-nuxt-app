import home from './_it-IT/home.json'
import shared from './_it-IT/shared.json'
import schema from './_it-IT/schema.json'
import portfolio from './_it-IT/portfolio.json'

const data = {
  home,
  shared,
  schema,
  portfolio
}

export default () => {
  return new Promise(function (resolve) {
    resolve(data)
  })
}
