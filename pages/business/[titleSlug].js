import Head from 'next/head'
import {
  getContentfulEntryById,
  getEntryByTitleSlug,
  getAllEntriesByContentType
} from '../../lib/contentful'

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
      ...entry.fields
    }
  }
}

export default function Home ({
  titleSlug,
  slug,
  heroImage,
  title,
  mainBlurb,
  pageContent
}) {
  console.log(heroImage)
  return (
    <div>
      <Head>
        <title>Romano Law</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>{title && title}</h1>
        <p>{slug && slug}</p>
        <img src={heroImage && heroImage.fields.file.url} />
      </main>
    </div>
  )
}
