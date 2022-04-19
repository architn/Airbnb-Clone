import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import '../Property/PropertyCard.css'
function PropertyCard(props) {
  return (
    <div id='propertyCard' class="card">
    <img class="card-img-top" src={props.imgURL} alt="Property" id='eventImage' />
    <div class="card-body">
    <Link className='titleLink' to={`/property/${props.roomid}`}>{props.title}</Link>
      <p class="card-text"></p>
     <span>
       <img src='images/favorite.png' alt='favicon' id='favicon'/>
        <span id='ratingText'>{props.rating}</span>
        <span id='upvotesText'>({props.reviews})</span>
        <span id='locationText'>{props.street}</span>
     </span>
    
      <p><b>From ${props.price}</b> / person</p>
    </div>
  </div>
  )
}

export default PropertyCard