import Head from 'next/head'
import {
  getContentfulEntryById,
  getAllEntriesByContentType
} from '../lib/contentful'

// export async function getStaticProps () {
//   // const contentfulEntry = await getContentfulEntryById('4E5RmU2Xmzz8VGO68T3l4p')
//   const allInnerPageEntries = await getAllEntriesByContentType(
//     'romanoInnerPage'
//   )
//   return {
//     props: {
//       allInnerPageEntries
//     }
//   }
// }

export default function Home () {
  return (
    <div>
      <Head>
        <title>Romana Law</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>romano law</main>
    </div>
  )
}
