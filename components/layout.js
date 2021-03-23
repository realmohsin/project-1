import Head from 'next/head'
import Navbar from './navigation/navbar'

export default function Layout ({ children }) {
  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta
          name='description'
          content='Learn how to build a personal website using Next.js'
        />
        <meta
          property='og:image'
          content={`https://og-image.vercel.app/site.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name='og:title' content='content' />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>

      <header>
        <Navbar />
      </header>

      <main>{children}</main>
    </div>
  )
}
