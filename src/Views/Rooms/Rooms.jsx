import React from 'react'
import ReservationCard from '../../components/Cards/Reservation/ReservationCard'
import '../Rooms/Rooms.css'
function Rooms(props) {
  return (
    <div className='container'>
      <br/>
      
      <h4>Unique 'Earthouse' Retreat w/ Spring-Fed Creek</h4>
      <span>
        <img src='images/favorite.png' alt='fav' className='fav'/>
        <span>5.0</span>
        <span>Springfield, Missouri, United States</span>
      </span>
      <br/><br/>
      <div className='row'>
        <div className='col-6'>
           <img src='https://a0.muscache.com/im/pictures/cbf68fa1-d6bf-4414-9c67-98e493f1b029.jpg?im_w=1200' alt='image1' className='bigImage' />
        </div>
        <div className='col-3'>
           <div className='col-6'>
                <img className='image2' src='https://a0.muscache.com/im/pictures/631c8926-9ed6-4226-b5c4-c5452e84e6ba.jpg?im_w=720' alt='image2' />
           </div>
           <div className='col-6'>
             <br/>
              <img className='image2' src='https://a0.muscache.com/im/pictures/32bfb0d7-1d94-40e7-b171-7674f169dd44.jpg?im_w=720' alt='image3' />
           </div>
        </div>
        <div className='col-3'>
        <div className='col-6'>
            <img className='image2' src='https://a0.muscache.com/im/pictures/0c7b0963-b498-47ba-bd79-4b934381cd8c.jpg?im_w=720' alt='image3' />
           </div>
           <div className='col-6'>
           <br/>
              <img className='image2' src='https://a0.muscache.com/im/pictures/fe971409-b6b6-45c1-a776-b0f6aaa87920.jpg?im_w=720' alt='image3' />
             
           </div>
           </div>
      </div>
      <br/><br/>
      <div className='row'>
        <div className='col-8'>
          <h4>Earthen home hosted by Monica</h4>
          <span>8 Guests &bull; 3 bedrooms &bull; 4 beds &bull; 3 baths</span>
          <br/><hr/>
          <p>Enjoy living at its finest with an unforgettable stay at this modern underground 3-bed, 3-bath home! Earthouse offers unique architectural design providing guests with an open inviting interior complete with high-end furnishings, modern decor, and abundant natural light. Whether you're exploring Springfield, visiting local colleges, making your way to Branson for the day, or getting away, this luxurious, one-of-a-kind abode will be your ideal home base!
                    NO PARTIES, EVENTS, OR LARGE GATHERINGS.
          </p>
          <hr/>
          <h4>What this place offers</h4>
          <br/>
          <ul>
              <li>Valley View</li>
              <li>Wifi</li>
              <li>TV</li>
              <li>Dryer</li>
              <li>Bathtub</li>

          </ul>
        </div>
        <div className='col-4'>
          <ReservationCard />
        </div>
      </div>
      <br/><br/>
    </div>
  )
}

export default Rooms