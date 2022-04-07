/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Reservation/ReservationCard.css'
function ReservationCard() {
  return (
    <div class="card">
  
    <div class="card-body">
        <span>
        <span id='price'>$385</span> <span id='night'> / night</span>
        
    <span id='reviewAndRatingSection'>
    <img className='fav' src='images/favorite.png' alt='fav' />
    <span id='rating'>5.0</span> &bull; <span id='reviews'>12 reviews</span>
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