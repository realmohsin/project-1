import Image from 'next/image'
import { css } from '@emotion/react'

export default function InstagramSection () {
  return (
    <section className='instagramSection'>
      <div className='container'>
        <h2 className='instagramTitle'>Romano Law Instagram</h2>
        <div container className='instagramGrid'>
          {Array(6)
            .fill()
            .map((_, i) => (
              <div item className='divItem' xs={12} sm={6} md={4}>
                <Image
                  src={`/images/instagram/instagram-${i + 1}.jpg`}
                  layout='intrinsic'
                  width={400}
                  height={400}
                  className='instagramImg'
                />
              </div>
            ))}
        </div>
        <button
          isLink
          href='https://www.instagram.com'
          text={'Visit our Instagram'}
          extraClassName='instagramButton'
        />
      </div>
    </section>
  )
}

const testStyles = theme => css`
  color: ${theme.colors.primary};
`
