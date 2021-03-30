import Image from 'next/image'
import { css } from '@emotion/react'
import Button from '../button'
import { title2, title4 } from '../../styles/title-styles'
import container from '../../styles/container'

export default function FocusSection () {
  return (
    <section css={focusSection}>
      <div css={container}>
        <h2 css={focusTitle}>Our Focus</h2>

        <div className='row' css={row}>
          <div className='col-5' xs={12} sm={5} css={rowContent}>
            <h3 css={rowTitle}>Business Law</h3>
            <div css={divider} />
            <p variant='body1' css={rowParagraph}>
              From startups to larger corporations, we provide a range of legal
              services to help your business grow.
            </p>
            <Button isLink text='Learn More' extraCss={button} />
          </div>
          <div className='col-7' xs={12} sm={7} css={rowImgContainer}>
            <Image
              src={`/images/focus/focus-1.jpg`}
              alt='Business Law'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
        </div>

        <div className='row' css={row}>
          <div className='col-7' xs={12} sm={7} css={rowImgContainer}>
            <Image
              src={`/images/focus/focus-2.jpg`}
              alt='Entertainment Law'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>

          <div className='col-5' xs={12} sm={5} css={rowContent}>
            <h3 css={rowTitle}>Entertainment Law</h3>
            <div css={divider} />
            <p variant='body1' css={rowParagraph}>
              We’re here to provide guidance to production companies, producers,
              talent and other industry professionals as you build your career.
            </p>
            <Button isLink text='Learn More' extraCss={button} />
          </div>
        </div>

        <div className='row' css={row}>
          <div className='col-5' xs={12} sm={5} css={rowContent}>
            <h3 css={rowTitle}>Business Disputes</h3>
            <div css={divider} />
            <p variant='body1' css={rowParagraph}>
              Our experienced team of attorneys can help you navigate a
              disagreement, business divorce or recover a debt. We can assist
              with the litigation or defense of commercial matters in state,
              federal bankruptcy, federal district and federal appellate courts.
            </p>
            <Button isLink text='Learn More' extraCss={button} />
          </div>
          <div className='col-7' xs={12} sm={7} css={rowImgContainer}>
            <Image
              src={`/images/focus/focus-3.jpg`}
              alt='Business Disputes'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const focusSection = css`
  padding: 12rem 0;
`

const focusTitle = css`
  ${title2}
`

const row = css`
  margin-bottom: 10rem;
`

const rowContent = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 5rem;
  height: 43.6rem;
`

const rowTitle = css`
  ${title4};
  text-align: center;
  margin-bottom: 4rem;
`

const divider = theme => css`
  width: 100%;
  height: 2px;
  background-color: ${theme.colors.secondary.main};
`

const rowParagraph = css`
  margin: 4rem 0 8rem;
`

const button = css`
  margin: 0 auto;
`

const rowImgContainer = css`
  padding: 2.3rem;
  position: relative;
  height: 43.6rem;
`
