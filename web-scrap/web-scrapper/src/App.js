import './App.css'
import Header from './Components/Header'
import GetArea from './Components/PopUp'
//  import React, { useState } from 'react'

/* function Submit () {

} */

function App () {
  return (
    <div className='App'>
      <Header />
      <GetArea
        content={<p>Please Enter Your Zip Code</p>}
        // onClick={Submit()}
      />
    </div>
  )
}

export default App
