import Head from 'next/head'
import Layout from '../components/layout'
import AboutHeroSection from '../components/about-page/about-hero-section'
import AboutSection from '../components/about-page/about-section'
import TeamSection from '../components/about-page/team-section'
import ReviewsSection from '../components/about-page/reviews-section'
import ContactForm from '../components/contact-form'
import Footer from '../components/footer'
import { getContentfulEntryById } from '../lib/contentful'
import CareersIntro from '../components/careers-page/careers-intro'
import JobListings from '../components/careers-page/job-listings'

// export async function getStaticProps () {
//   const entry = await getContentfulEntryById('tD3Q4aMYSr6jXLqugNHM8')

//   return {
//     props: {
//       fields: {
//         ...entry.fields
//       }
//     }
//   }
// }

export default function About () {
  return (
    <Layout>
      <Head>
        <title>Romana Law</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <CareersIntro />
      <JobListings />
      <Footer />
    </Layout>
  )
}
