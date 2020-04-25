export default ({ title, description, image, url }) => {
  const meta = []

  meta.push({
    hid: 'twitter:card',
    name: 'twitter:card',
    content: 'summary'
  }, {
    hid: 'og:type',
    property: 'og:type',
    content: 'website'
  })

  if (title && title !== '') {
    meta.push({
      hid: 'title',
      name: 'title',
      content: title
    }, {
      hid: 'og:title',
      property: 'og:title',
      content: title
    }, {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: title
    })
  }

  if (description && description !== '') {
    meta.push({
      hid: 'description',
      name: 'description',
      content: description
    }, {
      hid: 'og:description',
      property: 'og:description',
      content: description
    }, {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description
    })
  }

  if (image && image !== '') {
    meta.push({
      hid: 'image',
      name: 'image',
      content: image
    }, {
      hid: 'og:image',
      property: 'og:image',
      content: image
    }, {
      hid: 'twitter:image',
      name: 'twitter:image',
      content: image
    })
  }

  if (url && url !== '') {
    meta.push({
      hid: 'url',
      name: 'url',
      content: url
    }, {
      hid: 'og:url',
      property: 'og:url',
      content: url
    })
  }

  return meta
}
