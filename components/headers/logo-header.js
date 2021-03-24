import Image from 'next/image'
import Link from 'next/link'

const LogoHeader = () => {
  return (
    <div className='logoHeader'>
      <Image
        width={300}
        height={300}
        src={'/images/logo.png'}
        layout='intrinsic'
        alt={'Romano Law Logo'}
        className='logo'
      />
    </div>
  )
}

export default LogoHeader
