import './App.css'
import GetArea from './Components/PopUp'
import { Route } from 'react-router-dom'
import { React } from 'react'
// import data from '../src/Components/data/data.json';

function App () {
  return (
    <div className='App'>
      <Route exact path='/'>
        <GetArea
          content={<p>Please Enter Your Zip Code</p>}
        />
      </Route>
    </div>
  )
}
// TODO get rid of Redirect and fetch data from JSON
// Need to fetch json from here,
// then after submission change
// it to allow output to show
export default App
