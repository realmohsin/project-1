import Link from 'next/link'
import { useState } from 'react'

export default function Navbar () {
  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)
  const [dropdown3, setDropdown3] = useState(false)

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
        <li onMouseLeave={() => setDropdown1(false)}>
          <div onMouseEnter={() => setDropdown1(true)}>Business Law</div>
          {dropdown1 && (
            <ul>
              <li>
                <Link href='/business/small-business-law'>
                  <a>Small Business Law</a>
                </Link>
              </li>
              <li>
                <Link href='/business/mergers-and-acquisitions'>
                  <a>Mergers and Acquisitions</a>
                </Link>
              </li>
              <li>
                <Link href='/business/secured-transactions'>
                  <a>Secured Transactions</a>
                </Link>
              </li>
              <li>
                <Link href='/business/insolvency'>
                  <a>Insolvency</a>
                </Link>
              </li>
              <li>
                <Link href='/business/internet-law'>
                  <a>Internet Law</a>
                </Link>
              </li>
              <li>
                <Link href='/business/saas-agreements'>
                  <a>SaaS Agreements</a>
                </Link>
              </li>
              <li>
                <Link href='/business/startup-lawyers'>
                  <a>Startup Law</a>
                </Link>
              </li>
              <li>
                <Link href='/business/business-agreements-partnership-operating-shareholder'>
                  <a>Business Agreements</a>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li onMouseLeave={() => setDropdown2(false)}>
          <div onMouseEnter={() => setDropdown2(true)}>Entertainment Law</div>
          {dropdown2 && (
            <ul>
              <li>
                <Link href='/entertainment/copyright-lawyer-nyc'>
                  <a>Copyright Registration</a>
                </Link>
              </li>
              <li>
                <Link href='/entertainment/art-law'>
                  <a>Art Law</a>
                </Link>
              </li>
              <li>
                <Link href='/entertainment/comedy-law'>
                  <a>Comedy Law</a>
                </Link>
              </li>
              <li>
                <Link href='/entertainment/fashion-law'>
                  <a>Fashion Law</a>
                </Link>
              </li>
              <li>
                <Link href='/entertainment/film-financing'>
                  <a>Film Financing</a>
                </Link>
              </li>
              <li>
                <Link href='/entertainment/music-lawyer'>
                  <a>Music Law</a>
                </Link>
              </li>
              <li>
                <Link href='/entertainment/sports-law-attorney'>
                  <a>Sports Law</a>
                </Link>
              </li>
              <li>
                <Link href='/entertainment/trademark-law'>
                  <a>Trademark Registration</a>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li onMouseLeave={() => setDropdown3(false)}>
          <div onMouseEnter={() => setDropdown3(true)}>Business Disputes</div>
          {dropdown3 && (
            <ul>
              <li>
                <Link href='/business-disputes/arbitration'>
                  <a>Arbitration</a>
                </Link>
              </li>
              <li>
                <Link href='/business-disputes/breach-of-contract'>
                  <a>Breach of Contract</a>
                </Link>
              </li>
              <li>
                <Link href='/business-disputes/breach-of-fiduciary-duty'>
                  <a>Breach of Fiduciary Duty</a>
                </Link>
              </li>
              <li>
                <Link href='/business-disputes/business-torts-in-new-york'>
                  <a>Business Torts</a>
                </Link>
              </li>
              <li>
                <Link href='/business-disputes/copyright-infringement'>
                  <a>Copyright Infringement</a>
                </Link>
              </li>
              <li>
                <Link href='/business-disputes/debt-collection-lawyer'>
                  <a>Debt Collection</a>
                </Link>
              </li>
              <li>
                <Link href='/business-disputes/defamation-attorney-nyc'>
                  <a>Defamation</a>
                </Link>
              </li>
              <li>
                <Link href='/business-disputes/shareholder-disputes'>
                  <a>Shareholder Disputes</a>
                </Link>
              </li>
            </ul>
          )}
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
