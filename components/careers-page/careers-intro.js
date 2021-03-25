import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaGoogle, FaStar } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const CareersIntro = () => {
  return (
    <section className='careersIntroSection'>
      <div className='container' maxWidth='md'>
        <p variant='h1' className='careersTitle'>
          Careers
        </p>
        <p variant='h2' className='joinSubtitle'>
          Join Our Team
        </p>
        <div>
          <p variant='body1' gutterBottom>
            We are Innovative Problem Solvers.
          </p>
          <p variant='body1' gutterBottom>
            Romano Law is a boutique law firm of talented and diverse people.
            Located in Downtown Manhattan, we are focused on Business Law,
            Entertainment, Employment and Dispute Resolution. Whatever
            “traditional” thoughts you might have about a law firm, that’s not
            us. We do things differently. Our team-oriented culture is
            professional, but modern – always working on growing and improving.{' '}
          </p>
          <p variant='body1' gutterBottom>
            We are all about getting things done and having fun along the way.
            We’re looking for intelligent, dynamic and thoughtful people.
          </p>
          <p variant='body1' gutterBottom>
            The following positions are available:
          </p>
          <a href='#' className='positionLink'>
            Office Manager
          </a>
          <a href='#' className='positionLink'>
            Experienced Corporate Attorney
          </a>
          <a href='#' className='positionLink'>
            Client Development Director
          </a>
          <a href='#' className='positionLink'>
            Virtual Assistant
          </a>
          <a href='#' className='positionLink'>
            Experienced Business Litigation Attorney
          </a>
        </div>
      </div>
    </section>
  )
}

export default CareersIntro
