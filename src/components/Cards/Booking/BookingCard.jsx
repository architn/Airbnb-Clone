/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import Navbar from '../../Navbar/Navbar';
import './BookingCard.css'


function ReservationCard(props) {
    const [totalPrice, setTotalPrice] = useState(props.price);
    function calculatePrice(){
        let checkInDate = new Date(document.getElementById('checkInDate').value) ;
        let checkOutDate = new Date(document.getElementById('checkOutDate').value) ;
        const diffTime = Math.abs(checkOutDate - checkInDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        setTotalPrice(props.price * diffDays);
    }
    var isUserLoggedIn = sessionStorage.getItem("isUserLoggedIn");
  return (
            <div className="card">
                
                <div className="card-body">
                    <form className='form-group' action={`/property/${props.id}/payment`}>
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
                            <input id='checkInDate' name='checkInDate' type='date' className='form-control' />
                        </div>
                        <div id='checkOutSection' className='col-6'>
                            <label htmlFor='checkInDate'>CHECK OUT DATE: </label>
                            
                            <input id='checkOutDate' name='checkOutDate' type='date' className='form-control' onChange={calculatePrice} />
                        </div>
                    </div>
                    <div id='cardNumberOfPeopleSection' class="card-body">
                        <label htmlFor='numberOfGuests'>Number of Guests</label>
                    <select id='numberOfGuests' name='numberOfGuests' className='form-control' >
                        <option value='-1'>Select Number of Guests</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                    <br/>
                    <hr/>
                        <div className='row'>
                            <div className='col-3'>
                                <strong>Total</strong>
                            </div>
                            <div className='col-9'>
                                <span id='totalCost'>${totalPrice}</span>
                                <input type="hidden" name='totalCost' value={totalPrice} />
                            </div>
                            <br /> <br/><hr/>
                        </div>  
                        {isUserLoggedIn 
                        ? 
                        <button id='btnReserve' className='btn btn-primary'>RESERVE</button>
                                :
                        <button id='btnReserve' className='btn btn-primary' disabled>RESERVE</button>
                        }
                </div>
            </form>
        </div>
 
        </div>
  )
}

export default ReservationCard;