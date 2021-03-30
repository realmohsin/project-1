import Head from 'next/head'
import Layout from '../components/layout'
import HeroSection from '../components/home-page/hero-section'
import { getContentfulEntryById } from '../lib/contentful'
import FeaturedOnSection from '../components/home-page/featured-on-section'
import IntroSection from '../components/home-page/intro-section'
import FocusSection from '../components/home-page/focus-section'
import InstagramSection from '../components/home-page/instagram-section'
import BlogMediaSection from '../components/home-page/blog-media-section'
import ContactForm from '../components/contact-form'
import Footer from '../components/footer'

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

export default function HomePage ({ fields }) {
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
      {/* <BlogMediaSection /> */}
      <ContactForm />
      <Footer />
    </Layout>
  )
}
