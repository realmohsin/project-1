import Image from 'next/image'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <section className='aboutSection'>
      <div className='container'>
        <h1 className='aboutTitle'>About Our Firm</h1>
        <div container>
          <div item xs={12} md={6} className='gridItem'>
            <h2 className='aboutSubTitle'>
              Innovative Legal Counsel for Business, Professionals & Creative
              People
            </h2>
            <Image
              src='/images/about/about-1.jpg'
              width={400}
              height={400}
              alt='About Romana'
            />
          </div>
          <div item xs={12} md={6} className='gridItem'>
            <Image
              src='/images/about/about-2.jpg'
              width={400}
              height={400}
              alt='Romana building'
            />
            <div className='symbolDivider' />
            <h5 className='contentTitle'>We Love What We Do</h5>
            <p variant='body1' gutterBottom>
              We are committed to providing practical legal services.
            </p>
            <p variant='body1' gutterBottom>
              Whether you’re scaling a business, negotiating a contract or
              trying to resolve a dispute – your goals become our goals.
            </p>
            <p variant='body1' gutterBottom>
              We pride ourselves in being approachable and getting things done.
              We avoid legalese. We’re proactive.
            </p>
            <p variant='body1' gutterBottom>
              Focused on business, entertainment and dispute resolution, we
              represent entrepreneurs, stake-holders and creative professionals.
            </p>
            <p variant='body1' gutterBottom>
              We focus on legal strategy, so you don’t have to.
            </p>
            <p variant='body1' gutterBottom>
              We’ve got this.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
