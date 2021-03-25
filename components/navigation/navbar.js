import Link from 'next/link'

export default function Navbar () {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/business/internet-law'>
            <a>Business Law</a>
          </Link>
        </li>
        <li>
          <Link href='/entertainment/internet-law'>
            <a>Entertainment Law</a>
          </Link>
        </li>
        <li>
          <Link href='/business-disputes/internet-law'>
            <a>Business Disputes</a>
          </Link>
        </li>
        <li>
          <Link href='/careers'>
            <a>Careers</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
