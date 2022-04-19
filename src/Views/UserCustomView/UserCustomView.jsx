import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PropertyCard from '../../components/Cards/Property/PropertyCard';
import Navbar from '../../components/Navbar/Navbar'
import Events from '../Events/Events'
import '../UserCustomView/UserCustomView.css'

function createPropertiesJumbotron(properties){
   
         return <div className='col-3'>
            <PropertyCard 
          title={properties.Title} 
          roomid={properties._id}
          imgURL ='https://a0.muscache.com/im/pictures/631c8926-9ed6-4226-b5c4-c5452e84e6ba.jpg?im_w=720'
          street = {properties.Street} 
          rating = {4.0}
          reviews = {3.9}
          price={properties.Price}
          />
         </div>
}


function UserCustomView() {
    const [properties, setProperties] = useState([]);
    const [reservations, setReservations] = useState([]);
    useEffect( () => {
    axios
        .get('http://localhost:3002/getPropertyByUser', {
        withCredentials: true,
        })
        .then((response) => {
        if (response.status === 200) {
        setProperties(response.data)
        }
        })
        .catch((err) => {
        console.log(err);
            //setError(err.response.data.msg);
        });
    }, [properties._id])

  return (
    <div className='container'>
        <Navbar />
       
        <h3>Hi Archit!</h3>
        <br/><br/>
        <div className='row'>
           <h4>Your Properties ({properties.length})</h4>
           <br/><br/>
           {properties.length === 0 ? <div className='nothingReserved'>You have not listed any property yet!</div>: properties.map(createPropertiesJumbotron)}
        </div>
        <br/>
        <div>
            <h4>Your Reservations ({reservations.length})</h4>
            <br/><br/>
            {reservations.length === 0 ? <div className='nothingReserved'><span classname='msgText'>You have not reserved any property yet</span></div>: properties.map(createPropertiesJumbotron)}
        </div>
        <br/><br/>
        <div>
            <h4>Explore Events</h4>
            <Events reusability={true}/>
        </div>
    </div>
  )
}

export default UserCustomView