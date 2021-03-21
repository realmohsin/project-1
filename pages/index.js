import Head from 'next/head'
import { getContentfulEntryById } from '../lib/contentful'

export async function getStaticProps () {
  const entry = await getContentfulEntryById('3nn5zUNgvTdYFATlxaunTU')

  return {
    props: {
      fields: {
        ...entry.fields
      }
    }
  }
}

export default function Home ({ fields }) {
  console.log('fields - ', fields)
  return (
    <div>
      <Head>
        <title>Romana Law</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>{fields.heroImageTitle}</h1>
        <img src={fields.heroImage1.fields.file.url} />
        <img src={fields.heroImage2.fields.file.url} />
        <img src={fields.heroImage3.fields.file.url} />
      </main>
    </div>
  )
}
