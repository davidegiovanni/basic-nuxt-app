import home from './_it-IT/home.json'

const data = {
  home
}

export default () => {
  return new Promise(function (resolve) {
    resolve(data)
  })
}
