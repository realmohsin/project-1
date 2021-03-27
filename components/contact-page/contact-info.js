import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaGoogle, FaStar } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { FaPhone } from 'react-icons/fa'

const SubwayIcon = ({ symbol, color }) => {
  return (
    <span className='subwayIcon' style={{ backgroundColor: color }}>
      {symbol}
    </span>
  )
}

const ContactInfo = () => {
  return (
    <section className='contactSection'>
      <div className='container'>
        <h1 className='contactTitle'>Contact</h1>
        <div container>
          <div item xs={12} sm={6} className='leftSide'>
            <p variant='body1' className='subsectionTitle'>
              Hours
            </p>
            <p variant='body1' className='daysTitle'>
              Mondays through Friday:
            </p>
            <p variant='body1' className='timesAndAddress'>
              9:00AM - 7:00PM
            </p>
            <p variant='body1' className='daysTitle'>
              Saturday:
            </p>
            <p variant='body1' className='timesAndAddress'>
              9:00AM - 7:00PM
            </p>
            <a className='telephoneNumber'>
              <FaPhone color='red' className='phoneIcon' />
              212.865.9848
            </a>
            <p variant='body1' className='contactMessage'>
              Click
              <a href='https://calendly.com/' className='outsideLink'>
                HERE
              </a>
              to schedule a complimentary call.
            </p>
          </div>
          <div item xs={12} sm={6} className='rightSide'>
            <p variant='body1' className='subsectionTitle'>
              Address
            </p>
            <p variant='body1' className='timesAndAddress'>
              Romano Law PLLC <br />
              55 Broad Street, 18th Fl. <br />
              New York, NY 10004
            </p>
            <p variant='body1' className='addressSubtitle'>
              For directions click{' '}
              <a href='https://google.com/maps' className='outsideLink'>
                HERE
              </a>
            </p>
            <p variant='body1' className='subsectionTitle'>
              Subway Stops
            </p>
            <p variant='body1' className='subwayDirections'>
              We are located in the Financial District of New York City, two
              blocks south of Wall Street.
            </p>
            <ul className='subwayStopsUL'>
              <li className='subwayStopLi'>
                <SubwayIcon color='#ee352e' symbol={2} />
                <SubwayIcon color='#ee352e' symbol={3} />
                <p variant='body1' className='subwayStopText'>
                  Wall St.
                </p>
              </li>
              <li className='subwayStopLi'>
                <SubwayIcon color='#00933c' symbol={4} />
                <SubwayIcon color='#00933c' symbol={5} />
                <p variant='body1' className='subwayStopText'>
                  Bowling Green (or Wall)
                </p>
              </li>
              <li className='subwayStopLi'>
                <SubwayIcon color='#996633' symbol={'J'} />
                <SubwayIcon color='#996633' symbol={'Z'} />
                <p variant='body1' className='subwayStopText'>
                  Broad St.
                </p>
              </li>
              <li className='subwayStopLi'>
                <SubwayIcon color='#fccc0a' symbol={'R'} />
                <SubwayIcon color='#fccc0a' symbol={'W'} />
                <p variant='body1' className='subwayStopText'>
                  Rector St. (or Whitehall)
                </p>
              </li>
              <li className='subwayStopLi'>
                <SubwayIcon color='#ee352e' symbol={1} />
                <p variant='body1' className={'subwayStopText singleTrainText'}>
                  Rector St. (or South Ferry)
                </p>
              </li>
              <li className='subwayStopLi'>
                <SubwayIcon color='#0039a6' symbol={'A'} />
                <SubwayIcon color='#0039a6' symbol={'C'} />
                <p variant='body1' className='subwayStopText'>
                  Fulton St.
                </p>
              </li>
              <li className='subwayStopLi'>
                <SubwayIcon color='#0039a6' symbol={'E'} />

                <p variant='body1' className={'subwayStopText singleTrainText'}>
                  World Trade Center
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
