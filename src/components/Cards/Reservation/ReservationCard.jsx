/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Reservation/ReservationCard.css'
function ReservationCard(props) {
  return (
    <div className="card">
  
    <div className="card-body">
        <span>
        <span id='price'>${props.price}</span> <span id='night'> / night</span>
        
    <span id='reviewAndRatingSection'>
    <img className='fav' src='https://www.citypng.com/public/uploads/preview/hd-star-silhouette-pink-icon-transparent-background-11637144467w2sss8mpmm.png' alt='fav' />
    <span id='rating'>{props.rating}</span> &bull; <span id='reviews'>{props.reviews} reviews</span>
        </span>
    </span>
    </div>
    <div id='calendarSection' className='row'>
        <div id='checkInSection' className='col-6'>
            <label htmlFor='checkInDate'>CHECK IN DATE: </label>
            <input id='checkInDate' type='date' />
        </div>
        <div id='checkOutSection' className='col-6'>
                <label htmlFor='checkInDate'>CHECK OUT DATE: </label>
                <input id='checkOutDate' type='date' />
        </div>
    </div>
    <div id='cardNumberOfPeopleSection' class="card-body">
            <select id='guestDropdown' name='guestDropdown'>
                <option value='-1'>Select Number of Guests</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
            </select>
        <br/><br/><br/>
    <button id='btnReserve' className='btn btn-primary'>Reserve</button>
    </div>
</div>
  )
}

export default ReservationCard;