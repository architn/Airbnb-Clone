import axios from 'axios';
import {React, useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import {useNavigate} from "react-router-dom"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
  import Images from '../../../data/images'
import EditProperty from '../../../Views/EditProperty/EditProperty';
import '../Property/PropertyCard.css'
function PropertyCard(props) {
  const navigate = useNavigate();

  function deleteProperty(){
    axios.delete(`http://localhost:3002/deleteProperty/${props.roomid}`, (req, res) => {
      
    })
    .then( (response) => {
       if(response.status === 201){
         alert('Successfully deleted');
         setTimeout( () => {
            navigate('/hosting')
         }, 2000)
       }
    } )
  }
  // Get sub-array of first n elements after shuffled
  
  return (
    <div id='propertyCard' class="card">
    <img class="card-img-top" src={props.img1} alt="Property" id='eventImage' />
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
        <button className='btn btn-primary' id="btnEdit"><Link className='editLink' to={`/editProperty/${props.roomid}`}>EDIT</Link></button>
        <button type="button" className='btn btn-danger' id="btnDelete" data-ds-toggle="modal" data-bs-target="#exampleModal" onClick={deleteProperty}>DELETE</button>
       
        
        <br/><br/>
        <hr/>
      </span>
    </div>
  </div>
  )
}

export default PropertyCard