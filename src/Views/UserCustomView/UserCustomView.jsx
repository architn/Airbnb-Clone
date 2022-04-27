import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PropertyCard from '../../components/Cards/Property/PropertyCard';
import ReservationCard from '../../components/Cards/Reservation/ReservationCard.jsx';
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
          img1 = {properties.img1}
          />
         </div>
}

function createReservationCard(reservation){
    return(
        <div className='col-3'>
            <ReservationCard 
            reservationID={reservation._id}
            propertyID = {reservation.property}
            checkInDate = {reservation.checkInDate}
            checkOutDate = {reservation.checkOutDate}
            guests = {reservation.numberOfGuests}
            price = {reservation.cost}/>
        </div>
    )
}
function createNameElement(user){
    return <h3>Hi {user.name}!</h3>
}


function UserCustomView() {
    const [properties, setProperties] = useState([]);
    const [reservations, setReservations] = useState([]);
    const [user, setUser] = useState([]);
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
    axios.get('http://localhost:3002/getUserDetails', {
        withCredentials: true,
    })
    .then( (response) => {
        if(response.status === 200){
            setUser(response.data)
        }
    });
    axios.get('http://localhost:3002/getReservationsByUser', {
        withCredentials: true,
    })
    .then( (response) => {
        if(response.status === 200){
            setReservations(response.data)
        }
    })
    }, [properties._id]);
    
  return (
    <div className='container'>
        <Navbar />
       
       {user && user.map(createNameElement)}
        <br/><br/>
        <div className='row'>
           <h4>Your Properties ({properties.length})</h4>
           <br/><br/>
           {properties.length === 0 ? <div className='nothingReserved'>You have not listed any property yet!</div>: properties.map(createPropertiesJumbotron)}
        </div>
        <br/>
        <div className='row'>
            <h4>Your Reservations ({reservations.length})</h4>
            <br/><br/>
            {reservations.length === 0 ? <div className='nothingReserved'><span classname='msgText'>You have not reserved any property yet</span></div>: reservations.map(createReservationCard)}
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