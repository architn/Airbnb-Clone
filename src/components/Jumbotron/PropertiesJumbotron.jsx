/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Jumbotron/PropertiesJumbotron.css'

function PropertiesJumbotron(props) {
  return (
    <div className='container'>
        <hr />
        <div className='col-8'>
            <div class="jumbotron">
                
                 <br/>
                <div className='row'>

                     <div className='col-4'>
                            <img src={props.img} alt="property" id='propertyImage' />
                    </div>
                <div className='col-4' id='propertyDescription'>
                    <p id='propertyType' className="lead">Entire {props.type} unit in {props.streetaddress}</p>
                    <p id='propertyTitle' className="lead"><a href='/rooms' className='titleLink'>{props.title}</a></p>
                    <p className="lead">
                        <span id='houseCapacity'>{props.numberOfGuests} guests  &bull;{props.numberOfBedrooms} bedroom  &bull;{props.numberOfBeds} bed  &bull;{props.numberOfBaths} bath  </span>
                    </p>
                    <span><p id='houseFacilities'>Wifi &bull; Kitchen &bull;Air conditioning</p></span>
                    <br/> <br/>
                    <span className="lead">
                        <img src='images/favorite.png' alt='fav' className='fav'/>
                        <span id='ratingText'>
                            <b>{props.rating}</b>
                            <span id='reviewText' className='lead'>({props.reviews} reviews)</span>
                            <span id='priceT'>
                                <strong id='price'>${props.price}</strong>
                                </span> 
                                <span id='night'> /  night</span>
                           </span>
                    </span>
                </div>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default PropertiesJumbotron