import Image from 'next/image'
import { css } from '@emotion/react'
import { title3 } from '../../styles/title-styles'
import container from '../../styles/container'

export default function FeaturedOnSection () {
  return (
    <section css={featuredOnSection}>
      <div css={container}>
        <div css={divider} />
        <h2 css={featuredOnTitle}>Featured On</h2>
        <div css={featuredGrid}>
          {Array(10)
            .fill()
            .map((_, i) => (
              <div css={gridItem}>
                <Image
                  src={`/images/featured-on/featured-${i + 1}.${
                    i + 1 === 3 ? 'jpg' : 'png'
                  }`}
                  alt='Logo of company Romano Law has been featured in'
                  css='featuredCompanyImg'
                  layout='intrinsic'
                  width={191}
                  height={102.31}
                />
              </div>
            ))}
        </div>
        <div css={[divider, bottomDivider]} />
        <h2 css={featuredOnTitle}>Recognition</h2>
        <div css={recognitionGrid}>
          <div css={gridItem}>
            <Image
              layout='intrinsic'
              src='/images/featured-on/recognition-1.png'
              width={142}
              height={136}
              alt='Award of Recognition for Romano Law'
            />
          </div>
          <div css={gridItem}>
            <Image
              layout='intrinsic'
              src='/images/featured-on/recognition-2.png'
              width={156}
              height={124}
              alt='Award of Recognition for Romano Law'
            />
          </div>
          <div css={gridItem}>
            <Image
              layout='intrinsic'
              src='/images/featured-on/recognition-3.jpg'
              width={191}
              height={156.27}
              alt='Award of Recognition for Romano Law'
              css='superLawyersImg'
            />
          </div>
          <div css={gridItem}>
            <Image
              layout='intrinsic'
              src='/images/featured-on/recognition-4.jpg'
              width={191}
              height={156.27}
              alt='Award of Recognition for Romano Law'
              css='superLawyersImg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const featuredOnSection = css`
  padding: 12rem 0;
  background-color: white;
`

const featuredOnTitle = css`
  ${title3};
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const featuredGrid = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 3rem;

  ${'' /* [theme.breakpoints.down('md')]: {
    gridtemplatecolumns: 'repeat(4, 1fr)';
  }
  ,
  [theme.breakpoints.down('sm')]: {
    gridtemplatecolumns: 'repeat(3, 1fr)';
  }
  ,
  [theme.breakpoints.down('xs')]: {
    gridtemplatecolumns: 'repeat(2, 1fr)';
  } */}
`

const gridItem = css`
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* height: 30rem; */}
`

const featuredCompanyImg = css`
  width: 19.1rem;
`

const divider = theme => css`
  width: 100%;
  height: 2px;
  background-color: ${theme.colors.secondary.main};
  margin-bottom: 2rem;
`

const bottomDivider = css`
  margin-top: 8rem;
`

const recognitionGrid = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 3rem;
  ${'' /* [theme.breakpoints.down('sm')]: {
    gridtemplatecolumns: 'repeat(3, 1fr)';
  }
  ,
  [theme.breakpoints.down('xs')]: {
    gridtemplatecolumns: 'repeat(2, 1fr)';
  } */}
`

const superLawyersImg = css`
  width: 19.1rem;
`
