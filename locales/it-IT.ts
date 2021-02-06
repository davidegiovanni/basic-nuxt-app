import index from '@/static/website/pages/it-IT/index/index.yaml'

const data = {
    index
  }
  
export default () => {
return new Promise(function (resolve) {
    resolve(data)
})
}