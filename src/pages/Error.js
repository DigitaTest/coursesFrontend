import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './../components/header/navbar'

const Error = () => {
  return (
    <>
      <Navbar />
      <main id='page-wrapper'>
        <div id='featured'>
          <h1>Odradi me :D </h1>
          <p>desired page, doesnt exist</p>
          <Link to='/' className='btn'>
            Pocetna
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
