import { css } from '@emotion/react'
import theme from './theme'

export const title1 = css`
  font-family: 'Piazzolla', serif;
  font-size: 5.1rem;
  color: ${theme.colors.primary.main};
`

export const title2 = css`
  font-family: 'PT Serif', serif;
  font-size: 4.6rem;
  color: ${theme.colors.primary.main};
  font-weight: normal;
  margin-bottom: 8rem;
  text-align: center;
`

export const title3 = css`
  font-family: 'PT Serif', serif;
  font-size: 3.4rem;
  color: ${theme.colors.secondary.main};
  font-weight: normal;
`

export const title4 = css`
  font-size: 2rem;
  color: ${theme.colors.primary.main};
  text-transform: uppercase;
  word-spacing: 0.5px;
`

export const title5 = css`
  font-size: 1.5rem;
  color: ${theme.colors.secondary.main};
  text-transform: uppercase;
  font-weight: normal;
`
