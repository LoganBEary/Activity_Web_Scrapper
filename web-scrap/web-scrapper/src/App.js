import './App.css'
import Header from './Components/Header'
import GetArea from './Components/PopUp'
import Output from './Components/Output'
import {Route, Redirect} from 'react-router-dom'
import {Helmet} from 'react'

function App () {
  return (
    <div className='App'>
      <Header/>
      <Route exact path="/">
        <Redirect to="/getarea"/>
      </Route>
      <Route path="/getarea">
        <GetArea
          content={<p>Please Enter Your Zip Code</p>}/>
      </Route>
      <Route path="/output">
        <Output/>
      </Route>
    </div>
  )
}

export default App
