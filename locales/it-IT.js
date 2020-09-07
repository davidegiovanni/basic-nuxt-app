import home from '@/static/website/pages/it-IT/home.json'
import shared from '@/static/website/pages/it-IT/shared.json'
import schema from '@/static/website/pages/it-IT/schema.json'
import portfolio from '@/static/website/pages/it-IT/portfolio.json'
import about from '@/static/website/pages/it-IT/me.json'

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
