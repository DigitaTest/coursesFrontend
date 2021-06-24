import React from 'react'
import TeamMembers from './teamMembers'
import './team.css'
import groupPhoto from '../../assets//jpegs/groupPhoto.jpg'

const Team = () => {
  return (
    <>
      <main className='team-wrapper'>
        <div className='teamContainer'>
          <div className='imageBox'>
            <img src={groupPhoto} alt='Digital Lab tim' id='group-photo' />
          </div>
          <div className='teamInfo'>
            <h2>Digital Lab</h2>
            <p>
              Digital Lab je profitabilna obrazovna organizacija koja nudi
              kurseve iz oblasti programiranja. Osnivači ove organizacije su
              mladi sotferski inženjeri i dizajneri okupljeni oko jedne ideje,
              čiji je cilj stvaranje dobrog softwera i prenošenje stečenih
              znanja mladim programerima.
            </p>

            {/* <h1>Sta nudimo?</h1>
            <p>neki tekst o nama</p>
            <h1>Kako cemo to zajedno ostvariti?</h1>
            <p>neki tekst o nama</p> */}
          </div>
        </div>

        <div>
          <TeamMembers />
        </div>
      </main>
    </>
  )
}

export default Team
