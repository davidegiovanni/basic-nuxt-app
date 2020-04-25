import home from './_en-EN/home.json'
import shared from './_en-EN/shared.json'
import schema from './_en-EN/schema.json'

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
