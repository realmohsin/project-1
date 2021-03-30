import Image from 'next/image'
import { css } from '@emotion/react'

export default function HeroSection ({ heroImgTitle, heroImgSrc }) {
  console.log('heroImgSrc', heroImgSrc)
  return (
    <section css={heroSection}>
      <h1 css={heroSectionTitle}>{heroImgTitle}</h1>
      <Image
        priority
        src={`https:${heroImgSrc}`}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        alt='Romana Lawyers'
      />
    </section>
  )
}

const heroSection = css`
  margin-top: -2rem;
  position: relative;
  height: 74rem;
`

const heroSectionTitle = theme => css`
  z-index: 1;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 15%;
  color: ${theme.colors.primary.dark};
  font-family: 'Piazzolla', serif;
  font-size: 4.2rem;
`
