import React from 'react'
import Carousel from '../../components/Carousel/Carousel.jsx'
import Footer from '../Footer/Footer.jsx'
import LocationCards from '../../components/Cards/Locations/LocationCards.jsx'
import ExperienceCard from '../../components/Cards/Experiences/ExperienceCard.jsx'
function LandingPage() {
  return (
    <div>
       <Carousel />
       <LocationCards />
       <ExperienceCard />
    </div>
  )
}

export default LandingPage