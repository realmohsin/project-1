const Input = ({ isTextarea, label, handleChange, ...inputProps }) => {
  return (
    <div className='inputContainer'>
      {isTextarea ? (
        <textarea
          className='input textarea'
          onChange={handleChange}
          {...inputProps}
        />
      ) : (
        <input className='input' onChange={handleChange} {...inputProps} />
      )}

      {label && (
        <label
          className={`label ${inputProps.value.length > 0 &&
            'shrunkLabel'} ${isTextarea && 'textareaLabel'}`}
        >
          {label}
        </label>
      )}
    </div>
  )
}

export default Input
