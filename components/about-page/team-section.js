import Image from 'next/image'
import Link from 'next/link'

const TeamSection = () => {
  return (
    <section className='teamSection'>
      <div className='container'>
        <h2 className='teamSectionTitle'>Legal Team</h2>
        <div container>
          {Array(6)
            .fill()
            .map((_, i) => (
              <div item xs={12} sm={6} md={4} className='gridItem'>
                <figure>
                  <Image
                    layout='intrinsic'
                    width={300}
                    height={300}
                    src={`/images/legal-team/legal-team-${i + 1}.jpg`}
                    alt='Legal Team Member'
                  />
                  <figcaption>
                    <p variant='body1' marginBottom className='name'>
                      {'teamNameFromDataArr'}
                    </p>
                    <p variant='body1' marginBottom className='title'>
                      {'TeamNameFromDataArr'}
                    </p>
                  </figcaption>
                </figure>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
