import Image from 'next/image'
import Link from 'next/link'

const AboutHeroSection = ({ aboutHeroImgSrc }) => {
  console.log('aboutHeroImgSrc', aboutHeroImgSrc)
  return (
    <section className='aboutHeroSection'>
      <Image
        layout='responsive'
        width={500}
        height={500}
        src={`https:${aboutHeroImgSrc}`}
        alt={'Romano Law Lawyers'}
        className='heroImage'
      />
    </section>
  )
}

export default AboutHeroSection
