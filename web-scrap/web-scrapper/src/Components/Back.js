import React from 'react'
// BACK Button Code sourced from https://stackoverflow.com/questions/52039083/handle-back-button-with-react-route
const Back = () => {
  function changeHandler (event) {
    event.preventDefault()
    window.location.href = "http://127.0.0.1:5000/"
  }
  return (
    <div>
      <button onClick={() => window.location.href = "http://127.0.0.1:5000/"}>Back</button>
    </div>
  )
}

export default Back
