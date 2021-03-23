import Head from 'next/head'
import Layout from '../components/layout'
import HeroSection from '../components/homepage/hero-section'
import { getContentfulEntryById } from '../lib/contentful'
import FeaturedOnSection from '../components/homepage/featured-on-section'
import IntroSection from '../components/homepage/intro-section'
import FocusSection from '../components/homepage/focus-section'
import InstagramSection from '../components/homepage/instagram-section'
import BlogMediaSection from '../components/homepage/blog-media-section'

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
    <Layout>
      <Head>
        <title>Romana Law</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HeroSection
        heroImgTitle={fields.heroImageTitle}
        heroImgSrc={fields.heroImage1.fields.file.url}
      />
      <FeaturedOnSection />
      <IntroSection />
      <FocusSection />
      <InstagramSection />
      <BlogMediaSection />
      {/* <h1>{fields.heroImageTitle}</h1>
        <img src={fields.heroImage1.fields.file.url} />
        <img src={fields.heroImage2.fields.file.url} />
        <img src={fields.heroImage3.fields.file.url} /> */}
    </Layout>
  )
}
