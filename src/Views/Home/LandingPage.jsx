import React from 'react'
import Carousel from '../../components/Carousel/Carousel.jsx'
import LocationCards from '../../components/Cards/Locations/LocationCards.jsx'
import ExperienceCard from '../../components/Cards/Experiences/ExperienceCard.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
function LandingPage() {
  return (
    <div className='container'>
      <Navbar/>
       <Carousel />
       <LocationCards />
       <ExperienceCard />
    </div>
  )
}

export default LandingPage