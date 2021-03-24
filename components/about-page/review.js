import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaGoogle, FaStar } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const Review = ({ review }) => {
  const [opened, setOpened] = useState(false)

  const toggleOpen = e => {
    setOpened(opened => !opened)
  }
  return (
    <div item xs={12} sm={6} md={4} className='gridItem'>
      <p variant='body1' className='nameAndDate'>
        <span className='nameSpan'>{review.name},</span> &nbsp;
        <span className='daysAgoSpan'>{review.daysAgo}</span>
      </p>
      <div className='starsContainer'>
        {Array(5)
          .fill(null)
          .map(() => (
            <FaStar
              className='star'
              size='1.2em'
              // color={
              //   theme.palette.common[
              //     review.type === 'facebook'
              //       ? 'facebookColor'
              //       : 'googleStarColor'
              //   ]
              // }
            />
          ))}
      </div>
      <div className='iconAndTextGrid'>
        <div>
          {review.type === 'facebook' ? (
            <FaFacebook
              // color={theme.palette.common.facebookColor}
              size='2.4em'
              className='platformIcon'
            />
          ) : (
            <FcGoogle size='2.4em' className='platformIcon' />
          )}
        </div>
        <p variant='body2' className='text'>
          {opened ? review.content : review.content.slice(0, 201)}
          {!opened && '...'} &nbsp;
          <span className='readMoreOrLess' onClick={toggleOpen}>
            Read {opened ? 'Less' : 'More'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Review
