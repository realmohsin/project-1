import { useState } from 'react'
import Image from 'next/image'
import { css } from '@emotion/react'
import Button from '../button'

export default function BlogMediaSection () {
  const [sectionType, setSectionType] = useState('blog')

  const handleSectionType = type => {
    setSectionType(type)
  }

  const blogSection = (
    <div className={`blogSection ${sectionType === 'blog' && 'activeSection'}`}>
      <h2 className='hiddenTitle'>Blog</h2>
      <div container>
        <div item xs={12} md={6} className='blogItem'>
          <p className='itemDate'>
            <time>03.30.20</time>
          </p>
          <h5 className='blogItemTitle'>
            Are You an Employer Covered by the WARN Act? Three Questions to
            Consider.
          </h5>
          <p className='blogItemContent'>
            As the current coronavirus crisis unfolds, many employers are forced
            to consider laying off their staff, particularly those in the
            hospitality, wellness and event industries. Before you alert your
            team to the new reality, employers should determine whether they are
            covered by federal and state-level WARN laws. For background,
            Congress passed the WARN Act in the
          </p>
          <p className='blogItemReadMore'>(read more...)</p>
        </div>
        <div item xs={12} md={6} className='blogItem'>
          <p className='itemDate'>
            <time>03.30.20</time>
          </p>
          <h5 className='blogItemTitle'>
            Are You an Employer Covered by the WARN Act? Three Questions to
            Consider.
          </h5>
          <p className='blogItemContent'>
            As the current coronavirus crisis unfolds, many employers are forced
            to consider laying off their staff, particularly those in the
            hospitality, wellness and event industries. Before you alert your
            team to the new reality, employers should determine whether they are
            covered by federal and state-level WARN laws. For background,
            Congress passed the WARN Act in the
          </p>
          <p className='blogItemReadMore'>(read more...)</p>
        </div>
        <div item xs={12} md={6} className='blogItem'>
          <p className='itemDate'>
            <time>03.30.20</time>
          </p>
          <h5 className='blogItemTitle'>
            Are You an Employer Covered by the WARN Act? Three Questions to
            Consider.
          </h5>
          <p className='blogItemContent'>
            As the current coronavirus crisis unfolds, many employers are forced
            to consider laying off their staff, particularly those in the
            hospitality, wellness and event industries. Before you alert your
            team to the new reality, employers should determine whether they are
            covered by federal and state-level WARN laws. For background,
            Congress passed the WARN Act in the
          </p>
          <p className='blogItemReadMore'>(read more...)</p>
        </div>
        <div item xs={12} md={6} className='blogItem'>
          <p className='itemDate'>
            <time>03.30.20</time>
          </p>
          <h5 className='blogItemTitle'>
            Are You an Employer Covered by the WARN Act? Three Questions to
            Consider.
          </h5>
          <p className='blogItemContent'>
            As the current coronavirus crisis unfolds, many employers are forced
            to consider laying off their staff, particularly those in the
            hospitality, wellness and event industries. Before you alert your
            team to the new reality, employers should determine whether they are
            covered by federal and state-level WARN laws. For background,
            Congress passed the WARN Act in the
          </p>
          <p className='blogItemReadMore'>(read more...)</p>
        </div>
      </div>
      <Button isLink text='Visit Our Blog' extraClassName='button' />
    </div>
  )

  const mediaSection = (
    <div
      className={`mediaSection ${sectionType === 'media' && 'activeSection'}`}
    >
      <h2 className='hiddenTitle'>Media</h2>
      <div container>
        <div item xs={12} md={6} className='mediaItem leftMediaItem'>
          <div className='videoContainer'>
            <iframe
              title=''
              src='https://www.youtube.com/embed/Bva8ARJrCog'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
              className='iframeYT'
            />
          </div>
          <p className='itemDate'>
            <time>11.07.19</time>
          </p>
          <h5 className='mediaItemTitle'>
            DOMENIC ROMANO ON FOX BUSINESS NEWS – TRUMP ORDERS US COMPANIES OUT
            OF CHINA – 8/23/2019
          </h5>
        </div>
        <div item xs={12} md={6} className='mediaItem rightMediaItem'>
          <div className='videoContainer'>
            <iframe
              title=''
              src='https://www.youtube.com/embed/Bva8ARJrCog'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
              className='iframeYT'
            />
          </div>
          <p className='itemDate'>
            <time>11.07.19</time>
          </p>
          <h5 className='mediaItemTitle'>
            DOMENIC ROMANO ON FOX BUSINESS NEWS – TRUMP ORDERS US COMPANIES OUT
            OF CHINA – 8/23/2019
          </h5>
        </div>
        <div item xs={12} md={6} className='mediaItem leftMediaItem'>
          <div className='videoContainer'>
            <iframe
              title=''
              src='https://www.youtube.com/embed/Bva8ARJrCog'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
              className='iframeYT'
            />
          </div>
          <p className='itemDate'>
            <time>11.07.19</time>
          </p>
          <h5 className='mediaItemTitle'>
            DOMENIC ROMANO ON FOX BUSINESS NEWS – TRUMP ORDERS US COMPANIES OUT
            OF CHINA – 8/23/2019
          </h5>
        </div>
        <div item xs={12} md={6} className='mediaItem rightMediaItem'>
          <div className='videoContainer'>
            <iframe
              title=''
              src='https://www.youtube.com/embed/Bva8ARJrCog'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
              className='iframeYT'
            />
          </div>
          <p className='itemDate'>
            <time>11.07.19</time>
          </p>
          <h5 className='mediaItemTitle'>
            DOMENIC ROMANO ON FOX BUSINESS NEWS – TRUMP ORDERS US COMPANIES OUT
            OF CHINA – 8/23/2019
          </h5>
        </div>
      </div>
      <Button isLink text='Visit our Media Page' extraClassName='button' />
    </div>
  )

  return (
    <section className='blogMediaSection'>
      <div className='container'>
        <header>
          <ul className='titleList'>
            <li
              onClick={e => handleSectionType('blog')}
              className={`title ${sectionType === 'blog' && 'activeTitle'}`}
            >
              Blog
            </li>
            <li
              onClick={e => handleSectionType('media')}
              className={`title ${sectionType === 'media' && 'activeTitle'}`}
            >
              Media
            </li>
          </ul>
        </header>
        <div className='contentContainer'>
          {blogSection}
          {mediaSection}
        </div>
      </div>
    </section>
  )
}

const testStyles = theme => css`
  color: ${theme.colors.primary};
`
