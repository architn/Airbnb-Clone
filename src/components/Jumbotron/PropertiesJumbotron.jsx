/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Jumbotron/PropertiesJumbotron.css'
function PropertiesJumbotron(props) {
  return (
    <div className='container'>
        <hr />
        <div className='col-7'>
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
                    <p className="lead">
                    </p>
                    <br/><br/>
                    <div>
                    <span className='priceProperty'>
                        <b>${props.price}</b> / night
                    </span>
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default PropertiesJumbotron