import React, { useEffect, useState } from 'react'
import './PopUp.css'

const Popup = (props) => {
  const [enteredZip, setEnteredZip] = useState('')
  const [enteredZipTouched, setEnteredZipTouched] = useState(false)

  const enteredZipIsValid = enteredZip.trim() !== ''
  const zipEnteredIsInvalid = !enteredZipIsValid && enteredZipTouched

  const zipInputChangeHandler = event => {
    setEnteredZip(event.target.value)
  }

  const zipInputBlurHandler = event => {
    setEnteredZipTouched(true)
  }

  const formSubmissionHandler = event => {
    event.preventDefault()

    setEnteredZipTouched(true)

    if (!enteredZipIsValid) {
      return
    }
    setEnteredZip('')
    setEnteredZipTouched(false)
  }

  const nameInputClasses = zipEnteredIsInvalid
    ? 'box form-control invalid'
    : 'box form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='zipcode' className='label-cover'>{props.content}</label>
        <input
          className='zip-entry'
          type='text'
          id='zip'
          onBlur={zipInputBlurHandler}
          onChange={zipInputChangeHandler}
          value={enteredZip}
        />
        <button className='getZip'>
          Submit
        </button>
        {/* {enteredZipIsValid ? <p className='error-text'>Zip must be a number</p> : null} */}
        {zipEnteredIsInvalid && (
          <p className='error-text'>Invalid Zipcode</p>
        )}
      </div>
    </form>
  )
}

export default Popup
