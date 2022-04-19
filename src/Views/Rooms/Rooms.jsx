import React from 'react'
import ReservationCard from '../../components/Cards/Reservation/ReservationCard'
import '../Rooms/Rooms.css'
import {useParams} from 'react-router-dom'
import Properties from '../../data/properties'
import { useState } from 'react'
import { useEffect } from 'react'
import PropertyDetailedView from '../PropertyDetailedView/PropertyDetailedView'
import Navbar from '../../components/Navbar/Navbar'



function Rooms() {
 
  const {propertyid} = useParams();
  const [property, setPropertyData] = useState([]);
  useEffect( () => {
    setPropertyData(Properties.filter(prop => 
      prop.id === Number(propertyid) ))
  },[propertyid])
  console.log(property)
  return (

    <div className='container'>
       <Navbar />
      <br/>
        {property && property.map( (i, index) => 
        <PropertyDetailedView c key={index} 
              title={i.title}
              img1={i.img1}
              img2={i.img2}
              img3={i.img3}
              img4={i.img4}
              img5={i.img5}
              subtitle={i.subtitle}
              numberOfBeds={i.numberOfBeds}
              noOfGuests={i.numberOfGuests}
              numberOfBedrooms={i.numberOfBedrooms}
              numberOfBaths={i.numberOfBaths}
              description={i.description}
              features={i.features}
              streetAddress={i.streetAddress}
              city={i.city}
              zipCode={i.zipCode}
              price={i.price}
              reviews={i.reviews}
              rating={i.rating}
              userID={i.description}
              country={i.country}
        />
        
        
        )}
      <br/><br/>
    </div>
  )
}

export default Rooms