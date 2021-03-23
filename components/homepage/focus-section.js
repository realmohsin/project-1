import Image from 'next/image'
import { css } from '@emotion/react'

export default function FocusSection () {
  return (
    <section className='focusSection'>
      <div className='container'>
        <h2 className='focusTitle'>Our Focus</h2>
        <div container className='row'>
          <div item xs={12} sm={5} className='rowContent'>
            <h3 className='rowTitle'>Business Law</h3>
            <div className='divider' />
            <p variant='body1' className='rowParagraph'>
              From startups to larger corporations, we provide a range of legal
              services to help your business grow.
            </p>
            <button isLink text='Learn More' extraClassName='button' />
          </div>
          <div item xs={12} sm={7} className='rowImgContainer'>
            <Image
              src={`/images/focus/focus-1.jpg`}
              alt='Business Law'
              className='featuredCompanyImg'
              layout='intrinsic'
              width={500}
              height={500}
            />
          </div>
        </div>

        <div container className='row'>
          <div item xs={12} sm={7} className='rowImgContainer'>
            <Image
              src={`/images/focus/focus-2.jpg`}
              alt='Entertainment Law'
              className='featuredCompanyImg'
              layout='intrinsic'
              width={500}
              height={500}
            />
          </div>

          <div item xs={12} sm={5} className='rowContent'>
            <h3 className='rowTitle'>Entertainment Law</h3>
            <div className='divider' />
            <p variant='body1' className='rowParagraph'>
              We’re here to provide guidance to production companies, producers,
              talent and other industry professionals as you build your career.
            </p>
            <button isLink text='Learn More' extraClassName='button' />
          </div>
        </div>

        <div container className='row'>
          <div item xs={12} sm={5} className='rowContent'>
            <h3 className='rowTitle'>Business Disputes</h3>
            <div className='divider' />
            <p variant='body1' className='rowParagraph'>
              Our experienced team of attorneys can help you navigate a
              disagreement, business divorce or recover a debt. We can assist
              with the litigation or defense of commercial matters in state,
              federal bankruptcy, federal district and federal appellate courts.
            </p>
            <button isLink text='Learn More' extraClassName='button' />
          </div>
          <div item xs={12} sm={7} className='rowImgContainer'>
            <Image
              src={`/images/focus/focus-3.jpg`}
              alt='Business Disputes'
              className='featuredCompanyImg'
              layout='intrinsic'
              width={500}
              height={500}
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
