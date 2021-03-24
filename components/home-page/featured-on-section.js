import Image from 'next/image'
import { css } from '@emotion/react'

export default function FeaturedOnSection () {
  return (
    <section className='featuredOnSection'>
      <div className='container'>
        <div className='divider' />
        <h2 className='featuredOnTitle'>Featured On</h2>
        <div className='featuredGrid' style={{ display: 'flex' }}>
          {Array(10)
            .fill()
            .map((_, i) => (
              <div className='gridItem' style={{ width: '400px' }}>
                <Image
                  src={`/images/featured-on/featured-${i + 1}.${
                    i + 1 === 3 ? 'jpg' : 'png'
                  }`}
                  alt='Logo of company Romano Law has been featured in'
                  className='featuredCompanyImg'
                  layout='responsive'
                  width={191}
                  height={102.31}
                />
              </div>
            ))}
        </div>
        <div className='divider bottomDivider' />
        <h2 className='featuredOnTitle'>Recognition</h2>
        <div className='recognitionGrid' style={{ display: 'flex' }}>
          <div className='gridItem' style={{ width: '400px' }}>
            <Image
              layout='responsive'
              src='/images/featured-on/recognition-1.png'
              width={142}
              height={136}
              alt='Award of Recognition for Romano Law'
            />
          </div>
          <div className='gridItem' style={{ width: '400px' }}>
            <Image
              layout='responsive'
              src='/images/featured-on/recognition-2.png'
              width={156}
              height={124}
              alt='Award of Recognition for Romano Law'
            />
          </div>
          <div className='gridItem' style={{ width: '400px' }}>
            <Image
              layout='responsive'
              src='/images/featured-on/recognition-3.jpg'
              width={191}
              height={156.27}
              alt='Award of Recognition for Romano Law'
              className='superLawyersImg'
            />
          </div>
          <div className='gridItem' style={{ width: '400px' }}>
            <Image
              layout='responsive'
              src='/images/featured-on/recognition-4.jpg'
              width={191}
              height={156.27}
              alt='Award of Recognition for Romano Law'
              className='superLawyersImg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const testStyles = theme => css`
  color: ${theme.colors.primary};
`
