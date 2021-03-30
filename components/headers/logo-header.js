import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'

const LogoHeader = () => {
  return (
    <div css={logoHeader}>
      <Image
        width={200}
        height={67}
        layout='intrinsic'
        src={'/images/logo.png'}
        alt={'Romano Law Logo'}
        css={logo}
      />
    </div>
  )
}

const logoHeader = theme => css`
  background-color: ${theme.colors.primary.main};
  padding: 10rem 0 7rem;
  display: flex;
  justify-content: center;
`

const logo = css`
  margin: 0 auto;
`

export default LogoHeader
