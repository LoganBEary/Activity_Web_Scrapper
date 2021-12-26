import Header from './Header'
import React, { Helmet, useEffect, useState } from 'react'
import DynCard from './Card.js'
import './Output.css'
// import Back from './Back'
import axios from 'axios'

const Output = () => {
  const [siteData, setData] = useState([])

  useEffect(() => {
    getSites()
  }, [])

  const getSites = async () => {
    await axios.get('/choices')
      .then((res) => {
        setData(res.data)
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
        {siteData && siteData.length > 2 ? siteData.map((someData, key) => <DynCard key={key} className='card' Dtitle={someData.title} imglink={someData.img_link} subt={someData.subtxt} bodytxt={someData.body} link={someData.html_link} />) : console.log('Nope')}
      </div>
    </div>
  )
}

export default Output
