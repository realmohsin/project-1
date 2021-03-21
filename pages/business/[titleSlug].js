import Head from 'next/head'
import {
  getContentfulEntryById,
  getEntryByTitleSlug,
  getAllEntriesByContentType
} from '../../lib/contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'

export async function getStaticPaths () {
  const allInnerPageEntries = await getAllEntriesByContentType(
    'romanoInnerPage'
  )

  const paths = allInnerPageEntries.items
    .filter(({ fields: { slug } }) => slug.startsWith('business/'))
    .map(({ fields: { slug } }) => ({
      params: {
        titleSlug: slug.replace('business/', '')
      }
    }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  const entry = await getEntryByTitleSlug(
    'romanoInnerPage',
    `business/${params.titleSlug}`
  )
  return {
    props: {
      titleSlug: params.titleSlug,
      fields: {
        ...entry.fields
      }
    }
  }
}

export default function Home ({ titleSlug, fields }) {
  console.log('fields: ', fields)
  const mainBlurbDocument = fields.mainBlurb
  const pageContentDocument = fields.pageContent

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 style={{ color: 'red' }}>{children}</h2>
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p style={{ color: 'green' }}>{children}</p>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul style={{ color: 'blue' }}>{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ol style={{ color: 'blue' }}>{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li style={{ color: 'blue' }}>{children}</li>
      ),
      [INLINES.HYPERLINK]: node => (
        <a href={node.data.uri} style={{ color: 'pink' }}>
          {node.content[0].value}
        </a>
      )
    }
  }
  return (
    <div>
      <Head>
        <title>{`Romano Law - ${fields.title}`}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>{fields.title}</h1>
        <p>{fields.slug}</p>
        <img src={fields.heroImage.fields.file.url} />

        <p>
          <b>Main Blurb: </b>
          <br />
          {documentToReactComponents(mainBlurbDocument, options)}
        </p>
        <p>
          <b>Page Content: </b>
          <br />
          {documentToReactComponents(pageContentDocument, options)}
        </p>
      </main>
    </div>
  )
}
