import Link from 'next/link'
import { css } from '@emotion/react'

const Button = ({ isLink, text, href, extraCss, handleClick }) => {
  if (isLink)
    return (
      <Link href={href || '/'}>
        <a css={[button, extraCss]}>{text}</a>
      </Link>
    )
  return (
    <button css={[button, extraCss]} onClick={handleClick}>
      {text}
    </button>
  )
}

const button = theme => css`
  border: 1px solid ${theme.colors.secondary.main};
  color: ${theme.colors.primary.main};
  font-size: 1.4rem;
  text-transform: uppercase;
  padding: 0.8rem 2.7rem;
  width: max-content;
  letter-spacing: 0.5px;
  word-spacing: 0.5px;
  transition: all 0.3s;
  outline: none;
  :hover {
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.secondary.main};
  }
`

export default Button
