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

export default function Footer () {
  return (
    <footer
      className='footer'
      // style={{ backgroundImage: 'url(/images/dark-bg.gif)' }}
    >
      <div className='container'>
        <div container>
          <div item xs={12} sm={6} md={4} className='leftSide'>
            <p variant='body1' className='addressTitle'>
              Address
            </p>
            <p variant='body1' className='address'>
              ROMANO LAW PLLC <br /> 55 BROAD STREET, 18TH FL. <br />
              NEW YORK, NY 10004
            </p>
            <p variant='body1' className='joinOurTeam'>
              JOIN OUR TEAM
            </p>
            <div>
              <p variant='body1' className='socialIconsTitle'>
                Get Social With Us
              </p>
              <div className='socialIconsContainer'>
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
          <div item xs={12} sm={6} md={4} className='middleSide'>
            <p variant='body1' className='contactMessage'>
              Contact an Experienced Business Lawyer Now:
            </p>
            <a href='tel:123-456-7890' className='telephoneLink'>
              (123) 456-7890
            </a>
            <p variant='body1' className='helpLink'>
              How Can We Help?
            </p>
            <p variant='body1' className='reviewsLink'>
              Client Reviews
            </p>
          </div>
          <div item xs={12} sm={6} md={4} className='rightSide'>
            <p variant='body2' className='blurb'>
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
