import axios from 'axios';
import {React, useState} from 'react'
import { Button } from 'react-bootstrap';
import {useNavigate} from "react-router-dom";

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
    axios.delete(`${process.env.REACT_APP_BASE_URL}/deleteProperty/${props.roomid}`, (req, res) => {
    })
    .then( (response) => {
       if(response.status === 201){
        window.location.reload(true)

       }
    } )
  }
  // Get sub-array of first n elements after shuffled
  
  return (
    <div id='propertyCard' className="card">
    <img className="card-img-top" src={props.img1} alt="Property" id='eventImage' />
    <div className="card-body">
    <Link className='titleLink' to={`/property/${props.roomid}`}>{props.title}</Link>
      <p className="card-text"></p>
     <span>
        <span id='locationText'>Apartment at {props.street}</span>
     </span>
    
      <p><b>From ${props.price}</b> / person</p>
     <hr/>
      <span>
        <button className='btn btn-primary' id="btnEdit"><Link className='editLink' to={`/editProperty/${props.roomid}`}>EDIT</Link></button>
        <button type="submit" className='btn btn-danger' id="btnDelete" data-ds-toggle="modal" data-bs-target="#exampleModal" onClick={deleteProperty}>DELETE</button> 
        <br/><br/>
        <hr/>
      </span>
    </div>
  </div>
  )
}

export default PropertyCard