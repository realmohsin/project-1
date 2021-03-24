import Image from 'next/image'
import { css } from '@emotion/react'

export default function IntroSection () {
  return (
    <section
      className='introSection'
      style={{ backgroundImage: `url(/images/light-bg.gif);` }}
    >
      <div className='container'>
        <h2 className='introTitle'>Innovative Legal Counsel</h2>
        <div container className='introGrid'>
          <div item xs={12} md={6} className='firstGridItem'>
            <h3 className='introSecondaryTitle'>
              For Businesses, Professionals & Creative People
            </h3>
          </div>
          <div item xs={12} md={6} className='secondGridItem'>
            <div className='symbolDivider' />
            <p variant='body1' className='paragraph'>
              <strong className='highlightedText'>
                BASED IN NEW YORK CITY
              </strong>
              , Romano Law is a cutting edge firm, with a passion for making a
              difference in our clients’ lives.
            </p>
            <p variant='body1' className='paragraph'>
              Our legal team takes pride in developing meaningful relationships
              with our clients. Our mission is to deliver cost-effective and
              efficient solutions to help you or your company thrive.
            </p>
            <p variant='body1' className='paragraph'>
              We’re more than just attorneys – we’re trusted advisors. We love
              what we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const testStyles = theme => css`
  color: ${theme.colors.primary};
`
