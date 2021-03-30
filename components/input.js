import { css } from '@emotion/react'

const Input = ({ isTextarea, label, handleChange, ...inputProps }) => {
  return (
    <div css={inputContainer}>
      {isTextarea ? (
        <textarea
          css={[input, textarea]}
          onChange={handleChange}
          {...inputProps}
        />
      ) : (
        <input css={input} onChange={handleChange} {...inputProps} />
      )}

      {label && (
        <label
          css={[
            labelCss,
            inputProps.value.length > 0 && shrunkLabel,
            isTextarea && textareaLabel
          ]}
        >
          {label}
        </label>
      )}
    </div>
  )
}

const inputContainer = css`
  position: relative;
  margin: 2rem 0;
`

const input = theme => css`
  color: ${theme.colors.primary.main};
  font-size: 1.6rem;
  padding: 1rem 1rem 1rem 0.5rem;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${theme.colors.secondary.main};
  background: transparent;
  margin: 2.5rem 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    top: -1.4rem;
    font-size: 1.1rem;
    color: ${theme.colors.secondary.main};
  }
`

const labelCss = theme => css`
  color: #757575;
  color: ${theme.colors.secondary.main};
  position: absolute;
  left: 0.5rem;
  top: 1.4rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 300ms ease all;
  pointer-events: none;
`

const shrunkLabel = theme => css`
  top: -1.4rem;
  font-size: 1.1rem;
  color: ${theme.colors.secondary.main};
`

const textarea = theme => css`
  border: 1px solid ${theme.colors.secondary.main};
  margin-top: 5rem;
  padding: 1rem;
`

const textareaLabel = css`
  left: 1.5rem;
`

export default Input
