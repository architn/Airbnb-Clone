/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Events/events.css'
function EventsCard(props) {
  return (
    <div id='eventsCard' class="card">
    <img class="card-img-top" src={props.imgURL} alt="Card cap" id='eventImage' />
    <div class="card-body">
     <span>
       <img src='images/favorite.png' alt='favicon' id='favicon'/>
        <span id='ratingText'>{props.rating}</span>
        <span id='upvotesText'>({props.upvotes})</span>
        <span id='locationText'>{props.location}</span>
     </span>
      <p id='eventTitle' class="card-title">{props.title}</p>
      <p class="card-text"></p>
      <p><b>From ${props.price}</b> / person</p>
    </div>
  </div>
  )
}

export default EventsCard