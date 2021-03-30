import { css } from '@emotion/react'
import Button from '../button'

const StickyCTA = () => {
  return (
    <div css={stickyCta}>
      <h5 css={stickyCtaText}>Contact an Experienced Business Lawyer Now</h5>
      <button css={[ctaButton, callButton]}>(212) 865-8989</button>
      <button css={[ctaButton, bookNowButton]}>Book Now</button>
    </div>
  )
}

const stickyCta = theme => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.primary.dark};
  width: 100%;
  padding: 0.95rem;
  position: fixed;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  z-index: 100;
`

const stickyCtaText = css`
  text-transform: uppercase;
  color: white;
  font-size: 1.6rem;
  letter-spacing: 1px;
  font-weight: normal;
`

const ctaButton = theme => css`
  background-color: transparent;
  color: white;
  border: 2px solid ${theme.colors.secondary.main};
  border-radius: 1rem;
  padding: 0.75rem 1.5rem;
  transition: 0.3s all;
  &:hover {
    color: ${theme.colors.secondary.main};
    background-color: ${theme.colors.primary.main};
  }
`

const callButton = css`
  margin-left: 2rem;
  letter-spacing: 0.5px;
  font-size: 1.3rem;
`

const bookNowButton = css`
  margin-left: 2rem;
  font-size: 1.3rem;
`

export default StickyCTA
