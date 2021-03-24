import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../button'
import Review from './review'
import reviews from '../../data/reviews'

const ReviewsSection = () => {
  const [moreOpen, setMoreOpen] = useState(false)

  const toggleOpenMore = e => {
    setMoreOpen(moreOpen => !moreOpen)
  }
  return (
    <section className='teamSection'>
      <div className='container'>
        <h2 className='teamSectionTitle'>Reviews</h2>
        <div container>
          {reviews.slice(0, 6).map(review => (
            <Review review={review} />
          ))}
          {moreOpen &&
            reviews.slice(5, 11).map(review => <Review review={review} />)}
        </div>
        <Button
          handleClick={toggleOpenMore}
          extraClassName='moreReviewsButton'
          text={`See ${moreOpen ? 'Less' : 'More'} Reviews`}
        />
      </div>
    </section>
  )
}

export default ReviewsSection
