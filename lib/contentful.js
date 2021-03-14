const contentful = require('contentful')

const client = contentful.createClient({
  space: '4hxkdre0xo68',
  accessToken: 'avOjUveSl5G9nXgY7vItmJsbdUBoKJzmEPl1hBsi5FY'
})

export const getContentfulEntryById = async id => {
  const entry = await client.getEntry(id)
  console.log(entry)
  return entry
}

export const getEntryByTitleSlug = async (contentType, titleSlug) => {
  const entries = await client.getEntries({
    content_type: contentType,
    'fields.slug': titleSlug
  })
  console.log('entries: ', entries)
  return entries.items[0]
}

export const getAllEntriesByContentType = async contentType => {
  const entries = await client.getEntries({
    content_type: contentType
  })

  return entries
}
