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

  //DONT USE CONST IT DOESNT ALLOW STATE CHANGE
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

      {/*
          possibly do a div and insert Dynamic cards with parsed data?
          Main Progress block -> inserting new DynCards with data from scrapped data
          7/25 - Workaround found -> take data from Beautiful Soup and format in json file
          which would be read by Output and place those cards into card-space
        */}
      <div className='card-space'>
        {/* Map the data stored in the Json file to the output page */}
        {/* TODO WORK WITH DYNCARDS TO OUTPUT CORRECTLY THEN GOOD  */}
        {sites ? sites.map((values, key) => {
          // console.log(sites.length)
          // console.log(sites)
          return (<DynCard key={key} className='card' theTitle={values.title} imgLink={values.img_link} urlLink={values.url_link}/>) }) : null}
      </div>
    </div>
  )
}

export default Output
