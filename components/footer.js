import { useState } from 'react'
import Image from 'next/image'
import { css } from '@emotion/react'
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa'
import container from '../styles/container'

export default function Footer () {
  return (
    <footer css={footer}>
      <Image
        src='/images/dark-bg.gif'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        className='dark-bg'
      />
      <div css={container}>
        <div className='row'>
          <div className='col-4' xs={12} sm={6} md={4} css={leftSide}>
            <p variant='body1' css={addressTitle}>
              Address
            </p>
            <p variant='body1' css={address}>
              ROMANO LAW PLLC <br /> 55 BROAD STREET, 18TH FL. <br />
              NEW YORK, NY 10004
            </p>
            <p variant='body1' css={joinOurTeam}>
              JOIN OUR TEAM
            </p>
            <div>
              <p variant='body1' css={socialIconsTitle}>
                Get Social With Us
              </p>
              <div css={socialIconsContainer}>
                <a href='https://facebook.com'>
                  <FaFacebook size='1.5em' title='Facebook icon link' />
                </a>

                <a href='https://twitter.com'>
                  <FaTwitter size='1.5em' title='Twitter icon link' />
                </a>

                <a href='https://youtube.com'>
                  <FaYoutube size='1.5em' title='Youtube icon link' />
                </a>

                <a href='https://instagram.com'>
                  <FaInstagram size='1.5em' title='Instagram icon link' />
                </a>

                <a href='https://linkedin.com'>
                  <FaLinkedin size='1.5em' title='Linkedin icon link' />
                </a>
              </div>
            </div>
          </div>
          <div className='col-4' xs={12} sm={6} md={4} css={middleSide}>
            <p variant='body1' css={contactMessage}>
              Contact an Experienced Business Lawyer Now:
            </p>
            <a href='tel:123-456-7890' css={telephoneLink}>
              (123) 456-7890
            </a>
            <p variant='body1' css={helpLink}>
              How Can We Help?
            </p>
            <p variant='body1'>Client Reviews</p>
          </div>
          <div className='col-4' xs={12} sm={6} md={4} css={rightSide}>
            <p variant='body2' css={blurb}>
              OUR BUSINESS LAWYERS WORK WITH CLIENTS THROUGHOUT THE WORLD. IN
              NEW YORK, WE REPRESENT PEOPLE AND BUSINESSES BASED IN MANHATTAN,
              BROOKLYN, QUEENS, BRONX, STATEN ISLAND, LONG ISLAND, NASSAU,
              SUFFOLK, WESTCHESTER, UPSTATE AND WESTERN NEW YORK. OUR
              ENTERTAINMENT LAWYERS ALSO REPRESENT INDIVIDUALS AND ORGANIZATIONS
              LOCATED IN LOS ANGELES, TORONTO, LONDON, SYDNEY AND HONG KONG.
            </p>
            <p variant='body1'>
              ©2003–2020 ROMANO LAW PLLC. <br /> ALL RIGHTS RESERVED. NYC
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const footer = theme => css`
  padding: 12rem 0 12rem;
  text-transform: uppercase;
  color: ${theme.colors.common.gold};
  position: relative;
  & .dark-bg {
    z-index: -10;
  }
`

const leftSide = css`
  padding: 0 5rem;
`

const middleSide = css`
  padding: 0 6rem;
`

const rightSide = css`
  padding: 0 4rem;
`

const addressTitle = css`
  margin-bottom: 3rem;
`

const address = css`
  margin-bottom: 3rem;
`

const joinOurTeam = css`
  margin-bottom: 6rem;
`

const socialIconsTitle = css`
  margin-bottom: 2rem;
`

const socialIconsContainer = css`
  width: 24rem;
  display: flex;
  padding-right: 5rem;
  justify-content: space-between;
`

const contactMessage = css`
  margin-bottom: 3rem;
  width: 24rem;
`

const telephoneLink = theme => css`
  width: 22rem;
  border: 2px solid ${theme.colors.common.gold};
  padding: 0.8rem 0rem;
  text-align: center;
  margin-bottom: 5rem;
`

const helpLink = css`
  margin-bottom: '3rem';
`

const blurb = css`
  margin-bottom: 3rem;
  font-size: 1.2rem;
`
