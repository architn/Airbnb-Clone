import React from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import Images from '../../../data/images'
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
    <Link className='titleLink' to={`/property/${props.propertyID}`}>Stay for 3 nights</Link>
      <p class="card-text"></p>
     <span>
       <img src='images/favorite.png' alt='favicon' id='favicon'/>
        <span id='ratingText'>{props.checkInDate}</span>
        <span id='upvotesText'>({props.checkOutDate})</span>
        <span id='locationText'>{props.guests}</span>
     </span>
    
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