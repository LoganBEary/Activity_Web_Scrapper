import Header from './Header'
import { Helmet, useEffect, useState } from 'react'
import DynCard from './Card.js'
import './component_css/Output.css'
//import Back from './Back'
import axios from 'axios'
//import Loading from './Loading'

const Output = () => {
  const [sites, setData] = useState([])
  
  useEffect(() => {
    getSites()
  }, [])

  //DONT USE CONST IT DOESN'T ALLOW STATE CHANGE
  let getSites = async () => {
    await axios.get('/choices')
      .then((res) => {
        setData(res.data)
        // console.log(res.data)
        // console.log(sites)
      })
  }

  return (
    <div>
      <Header>
        <Helmet>
          <meta charSet='utf-8' />
          <title>Found Activities!</title>
        </Helmet>
      </Header>
      <div className='card-space'>
        {/* Map the data stored in the Json file to the output page */}
        {/* #TODO WORK WITH DYNCARDS TO OUTPUT CORRECTLY  */}
        {sites ? sites.map((values, key) => {
          return (<DynCard key={key} className='card' theTitle={values.title} theBody={values.body} urlLink={values.url_link}/>) }) : getSites()}
      </div>
    </div>
  )
}

export default Output
