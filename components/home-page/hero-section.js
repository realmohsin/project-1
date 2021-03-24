import Image from 'next/image'
import { css } from '@emotion/react'

export default function HeroSection ({ heroImgTitle, heroImgSrc }) {
  console.log('heroImgSrc', heroImgSrc)
  return (
    <section>
      <h1 css={testStyles}>{heroImgTitle}</h1>
      <Image
        priority
        src={`https:${heroImgSrc}`}
        className={'placeholder'}
        height={144}
        width={144}
        alt='Romana Lawyers'
      />
    </section>
  )
}

const testStyles = theme => css`
  color: ${theme.colors.primary};
`
