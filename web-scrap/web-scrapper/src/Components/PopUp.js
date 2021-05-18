import axios from 'axios'
import React, { useState } from 'react'
import './PopUp.css'

const Popup = (props) => {
  const [enteredZip, setEnteredZip] = useState('')
  const [enteredZipTouched, setEnteredZipTouched] = useState(false)
  const [containsLetter, setLetter] = useState(false)
  const regExp = /[a-zA-Z_]/g
  const enteredZipIsValid = (enteredZip.trim() !== '' && !regExp.test(enteredZip) && enteredZip.length <= 5)
  const zipEnteredIsInvalid = ((!enteredZipIsValid && enteredZipTouched) || enteredZip.length > 5)

  let formIsValid = false
  if (enteredZipIsValid && !containsLetter) {
    formIsValid = true
  }

  function zipPostHandler (event) {
    event.preventDefault()
    axios.post('/reroute', { enteredZip }).then(res => {
      window.location.href = 'choices'
    })
  }

  const zipInputChangeHandler = event => {
    setEnteredZip(event.target.value)
    // console.log('in')
    const cont = regExp.test(event.target.value)
    if (cont === true) {
      setLetter(true)
      console.log('contains:', containsLetter)
    } else setLetter(false)
  }

  const zipInputBlurHandler = _ => {
    setEnteredZipTouched(true)
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()
    setEnteredZipTouched(true)
    // send zip to backend here
    // set if valid or not
    if (!enteredZipIsValid) {
      return
    }
    setEnteredZip('')
    setEnteredZipTouched(false)
  }

  const nameInputClasses = zipEnteredIsInvalid || containsLetter
    ? 'box form-control invalid'
    : 'box form-control'

  return (
    <form onSubmit={formSubmissionHandler} method='POST' className='zipForm'>
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
        {/* on click send info to backend */}
        <button className='getZip' disabled={!formIsValid} onClick={zipPostHandler}/* onClick={} */>
          Submit
        </button>
        {/* formIsValid ? <p className='error-text'>Zip must be a number</p> : null */}
        {(zipEnteredIsInvalid || containsLetter)
          ? <p className='error-text'>Invalid Zipcode</p>
          : null}
      </div>
    </form>
  )
}

export default Popup
