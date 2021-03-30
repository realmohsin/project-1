import { useState } from 'react'
import Image from 'next/image'
import { css } from '@emotion/react'
import Input from './input'
import Button from './button'
import container from '../styles/container'
import { title2 } from '../styles/title-styles'

export default function ContactForm () {
  const initialFormState = {
    email: '',
    firstName: '',
    lastName: '',
    telephone: '',
    message: ''
  }
  const [formState, setFormState] = useState(initialFormState)

  const handleInputChange = e => {
    const { value, name } = e.target
    setFormState(formState => ({ ...formState, [name]: value }))
  }

  return (
    <section css={contactSection}>
      <div css={container}>
        <h2 css={contactTitle}>How Can We Help?</h2>
        <div css={telephoneContainer}>
          Call us at
          <a href='tel:123-456-7890' css={telephoneLink}>
            (123) 456-7890
          </a>
          or submit a message.
        </div>

        <form css={form}>
          <Input
            type='text'
            name='firstName'
            value={formState.firstName}
            label='First Name'
            onChange={handleInputChange}
          />
          <Input
            type='text'
            name='lastName'
            value={formState.lastName}
            label='Last Name'
            onChange={handleInputChange}
          />
          <Input
            type='tel'
            name='telephone'
            value={formState.telephone}
            label='Telephone'
            onChange={handleInputChange}
          />
          <Input
            type='email'
            name='email'
            value={formState.email}
            label='Email'
            onChange={handleInputChange}
          />
          <Input
            isTextarea
            rows={5}
            name='message'
            value={formState.message}
            label='Message'
            onChange={handleInputChange}
          />
          <Button text='Submit' extraCss={submitButton} />
        </form>
      </div>
    </section>
  )
}

const contactSection = css`
  padding: 12rem 0 14rem;
`

const contactTitle = css`
  ${title2};
  margin-bottom: 2rem;
`

const form = css`
  max-width: 40rem;
  margin: 0 auto;
`

const submitButton = css`
  margin: 4rem auto;
`

const telephoneContainer = css`
  margin: 0 auto;
  width: max-content;
  margin-bottom: 8rem;
`

const telephoneLink = theme => css`
  color: ${theme.colors.secondary.main};
  display: inline;
  margin: 0 0.5rem;
  font-size: 1.6rem;
  letter-spacing: 0.4px;
  transition: 0.3s all;
  :hover {
    color: ${theme.colors.primary.main};
  }
`
