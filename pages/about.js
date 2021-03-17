import Head from 'next/head'
import {
  getContentfulEntryById,
  getAllEntriesByContentType,
  getEntryByTitleSlug
} from '../lib/contentful'

export async function getStaticProps ({ params }) {
  const entry = await getEntryByTitleSlug('romanoAboutPage', `about`)
  console.log('about entry: ', entry)
  return {
    props: {
      ...entry.fields
    }
  }
}

export default function About ({ heroImage }) {
  return (
    <div>
      <Head>
        <title>About Page</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>About Page</h1>
        <img src={heroImage.fields.file.url} />
      </main>
    </div>
  )
}
