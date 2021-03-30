import Image from 'next/image'
import { css } from '@emotion/react'
import Button from '../button'
import container from '../../styles/container'
import { title2 } from '../../styles/title-styles'

export default function InstagramSection () {
  return (
    <section css={instagramSection}>
      <Image
        src='/images/light-bg.png'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className='light-bg'
      />
      <div css={container}>
        <h2 css={instagramTitle}>Romano Law Instagram</h2>
        <div className='row' css={instagramGrid}>
          {Array(6)
            .fill()
            .map((_, i) => (
              <div className='col-4' css={gridItem} xs={12} sm={6} md={4}>
                <Image
                  src={`/images/instagram/instagram-${i + 1}.jpg`}
                  layout='fill'
                  objectFit='cover'
                  objectPosition='center'
                  css={instagramImg}
                />
              </div>
            ))}
        </div>
        <Button
          isLink
          href='https://www.instagram.com'
          text={'Visit our Instagram'}
          extraCss={instagramButton}
        />
      </div>
    </section>
  )
}

const instagramSection = css`
  padding: 7rem 0 12rem;
  position: relative;
  background: radial-gradient(
    circle,
    rgba(239, 249, 249, 0.9) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
  & .light-bg {
    z-index: -10;
  }
`

const instagramTitle = css`
  ${title2};
  margin-bottom: 6rem;
`

const instagramGrid = css`
  padding: 0 7rem;
  margin-bottom: 5rem;
`

const gridItem = css`
  padding: 1.75rem;
  width: 30.9rem;
  height: 30.9rem;
  position: relative;
  margin-bottom: 3rem !important;
`

const instagramImg = css``

const instagramButton = css`
  margin: 0 auto;
`
