import showdown from 'showdown'

const buildShowdown = () => {
  const classMap = {
    h1: 'text-2xl mb-4',
    a: 'underline font-bold',
    ul: 'ui list',
    li: 'ui item'
  }

  const bindings = Object.keys(classMap)
    .map(key => ({
      type: 'output',
      regex: `<${key}(.*)>`,
      replace: `<${key} class="${classMap[key]}" $1>`
    }))

  const conv = new showdown.Converter({
    extensions: [...bindings],
    metadata: true,
    tables: true,
    ghCodeBlocks: true
  })

  return conv
}

export default buildShowdown
