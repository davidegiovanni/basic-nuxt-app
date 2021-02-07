import index from '@/static/website/pages/it-IT/index/index.yaml'
import shared from '@/static/website/pages/it-IT/shared/shared.yaml'

const data = {
    index,
    shared
  }
  
export default () => {
return new Promise(function (resolve) {
    resolve(data)
})
}