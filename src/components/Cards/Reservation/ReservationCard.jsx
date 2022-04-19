/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Navbar from '../../Navbar/Navbar';
import '../Reservation/ReservationCard.css'
function ReservationCard(props) {
    const [totalPrice, setTotalPrice] = useState();
    var isUserLoggedIn = sessionStorage.getItem("isUserLoggedIn");
  return (
            <div className="card">
                
                <div className="card-body">
                    <form className='form-group'>
                        <span>
                        <span id='price'>${props.price}</span> <span id='night'> / night</span>
                
                            <span id='reviewAndRatingSection'>
                            <img className='fav' src='https://www.citypng.com/public/uploads/preview/hd-star-silhouette-pink-icon-transparent-background-11637144467w2sss8mpmm.png' alt='fav' />
                                <span id='rating'>{props.rating}</span> &bull; <span id='reviews'>{props.reviews} reviews</span>
                            </span>
                        </span>
                        <div id='calendarSection' className='row'>
                        <div id='checkInSection' className='col-6'>
                            <label htmlFor='checkInDate'>CHECK IN DATE: </label>
                            <input id='checkInDate' type='date' className='form-control' />
                        </div>
                        <div id='checkOutSection' className='col-6'>
                            <label htmlFor='checkInDate'>CHECK OUT DATE: </label>
                            
                            <input id='checkOutDate' type='date' className='form-control' />
                        </div>
                    </div>
                    <div id='cardNumberOfPeopleSection' class="card-body">
                    <select id='numberOfGuests' name='numberOfGuests' className='form-control' >
                        <option value='-1'>Select Number of Guests</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                    <br/><br/><br/>
                        {isUserLoggedIn ? <button id='btnReserve' className='btn btn-primary'>RESERVE</button>
                                :<button id='btnReserve' className='btn btn-primary' disabled>RESERVE</button>
                        }
                </div>
            </form>
        </div>
 
        </div>
  )
}

export default ReservationCard;