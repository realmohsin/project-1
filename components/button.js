import Link from 'next/link'

const Button = ({ isLink, text, href, extraClassName, handleClick }) => {
  if (isLink)
    return (
      <Link href={href || '/'}>
        <a className={`button ${extraClassName || ''}`}>{text}</a>
      </Link>
    )
  return (
    <button className={`button ${extraClassName || ''}`} onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
