import { useState } from 'react'
import Image from 'next/image'
import { css } from '@emotion/react'
import Input from './input'
import Button from './button'

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
    <section className='contactSection'>
      <div className='container'>
        <h2 className='contactTitle'>How Can We Help?</h2>
        <div className='telephoneContainer'>
          Call us at
          <a href='tel:123-456-7890' className='telephoneLink'>
            (123) 456-7890
          </a>
          or submit a message.
        </div>

        <form className='form'>
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
          <Button text='Submit' extraClassName='submitButton' />
        </form>
      </div>
    </section>
  )
}
