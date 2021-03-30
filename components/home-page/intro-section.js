import Image from 'next/image'
import { css } from '@emotion/react'
import { title2, title3, title4 } from '../../styles/title-styles'
import container from '../../styles/container'

export default function IntroSection () {
  return (
    <section css={introSection}>
      <Image
        src='/images/light-bg.png'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className='light-bg'
      />
      <div css={container}>
        <h2 css={introTitle}>Innovative Legal Counsel</h2>
        <div className='row' css={introGrid}>
          <div className='col-6' xs={12} md={6} css={firstGridItem}>
            <h3 css={introSecondaryTitle}>
              For Businesses, Professionals & Creative People
            </h3>
          </div>
          <div className='col-6' xs={12} md={6} css={secondGridItem}>
            <div css={symbolDivider} />
            <p variant='body1' css={paragraph}>
              <strong css={highlightedText}>BASED IN NEW YORK CITY</strong>,
              Romano Law is a cutting edge firm, with a passion for making a
              difference in our clients’ lives.
            </p>
            <p variant='body1' css={paragraph}>
              Our legal team takes pride in developing meaningful relationships
              with our clients. Our mission is to deliver cost-effective and
              efficient solutions to help you or your company thrive.
            </p>
            <p variant='body1' css={paragraph}>
              We’re more than just attorneys – we’re trusted advisors. We love
              what we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const introSection = css`
  padding: 12rem;
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

const introTitle = css`
  ${title2}
`

const introSecondaryTitle = css`
  ${title3}
`

const introGrid = css``

const firstGridItem = css`
  padding-left: 4rem;
  padding-right: 4rem;
`

const secondGridItem = css`
  padding-left: 7rem;
  padding-right: 4rem;
`

const paragraph = css`
  margin-bottom: 2.5rem;
`

const highlightedText = theme => css`
  color: ${theme.colors.secondary.main};
  letter-spacing: 0.7px;
  font-weight: normal;
`

const symbolDivider = theme => css`
  width: 3.5rem;
  height: 2px;
  background-color: ${theme.colors.secondary.main};
  margin-bottom: 2rem;
`
