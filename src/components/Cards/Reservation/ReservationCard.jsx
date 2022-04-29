import React from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import Images from '../../../data/images'
import '../Reservation/ReservationCard.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
function ReservationCard(props) {
    const shuffled = Images.sort(() => 0.5 - Math.random());
    const navigate = useNavigate();
  
    function cancelReservation(){
      axios.delete(`http://localhost:3002/deleteReservation/${props.reservationID}`, (req, res) => {
        // Implement Handling
      })
    }
    let selected = shuffled.slice(0, 1);
  return (
    <div id='propertyCard' class="card">
    <img class="card-img-top" src={selected[0]} alt="Property" id='eventImage' />
    <div class="card-body">
    <Link className='titleLink' to={`/property/${props.propertyID}`}>View Property</Link>
      <p class="card-text"></p>
     <span>
        <span id='ratingText'><label><img className='reservationSymbols' alt='checkin' src='https://img.icons8.com/ios/344/clock--v1.png'/> Check-In Date: </label>&nbsp;&nbsp;{props.checkInDate}<br/></span>
        <span id='upvotesText'><label><img className='reservationSymbols' alt='checkin' src='https://img.icons8.com/ios/344/clock--v3.png'/> Checkout Date:  </label>&nbsp;&nbsp;{props.checkOutDate}<br/></span>
        <span id='locationText'><label><img className='reservationSymbols' alt='checkin' src='https://cdn-icons.flaticon.com/png/512/641/premium/641132.png?token=exp=1651270048~hmac=e11153b53ee0d79a66ea4bf59ecb06f5'/> Number of Guests:  </label>&nbsp; {props.guests}</span>
     </span>
     <br/><br/>
      <p><b>Total Cost ${props.price}</b></p>
     <hr/>
      <span>
        <button type="button" className='btn btn-danger' id="btnCancel" data-ds-toggle="modal" data-bs-target="#exampleModal" onClick={cancelReservation}>CANCEL RESERVATION</button>
       
        <br/><br/>
        <hr/>
      </span>
    </div>
  </div>
  )
}

export default ReservationCard