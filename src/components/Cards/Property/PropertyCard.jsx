import {React, useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import Images from '../../../data/images'
import '../Property/PropertyCard.css'
function PropertyCard(props) {
  const shuffled = Images.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let selected = shuffled.slice(0, 1);
  return (
    <div id='propertyCard' class="card">
    <img class="card-img-top" src={selected[0]} alt="Property" id='eventImage' />
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
     <hr/>
      <span>
        <button className='btn btn-primary' id="btnEdit">EDIT</button>
        <button type="button" className='btn btn-danger' id="btnDelete" data-ds-toggle="modal" data-bs-target="#exampleModal">DELETE</button>
       
        
        <br/><br/>
        <hr/>
      </span>
    </div>
  </div>
  )
}

export default PropertyCard