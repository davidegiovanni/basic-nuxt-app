import home from '@/static/website/pages/it-IT/home.json'
import shared from '@/static/website/pages/it-IT/shared.json'
import schema from '@/static/website/pages/it-IT/schema.json'
import portfolio from '@/static/website/pages/it-IT/portfolio.json'
import about from '@/static/website/pages/it-IT/me.json'
import brand from '@/static/website/pages/it-IT/brand.json'
import communication from '@/static/website/pages/it-IT/communication.json'

const data = {
  home,
  shared,
  schema,
  portfolio,
  about,
  brand,
  communication
}

export default () => {
  return new Promise(function (resolve) {
    resolve(data)
  })
}
