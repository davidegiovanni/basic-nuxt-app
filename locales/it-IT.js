import home from './_it-IT/home.json'
import shared from './_it-IT/shared.json'
import schema from './_it-IT/schema.json'
import portfolio from './_it-IT/portfolio.json'
import about from './_it-IT/me.json'

const data = {
  home,
  shared,
  schema,
  portfolio,
  about
}

export default () => {
  return new Promise(function (resolve) {
    resolve(data)
  })
}
