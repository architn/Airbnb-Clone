import React from 'react'
import ReservationCard from '../../components/Cards/Reservation/ReservationCard'
import '../PropertyDetailedView/PropertyDetailedView.css'

function createFacilitiesList(facilities){
    return(
      <ul>
        <div className='row'>
          <div className='col-6'>
            <li>{facilities.isWifi ? <h5>
              <img alt='wifi' className='facilitiesImage' src="https://media.istockphoto.com/vectors/wifi-internet-icon-vector-wi-fi-wlan-access-wireless-wifi-hotspot-vector-id1138089587?k=20&m=1138089587&s=612x612&w=0&h=W3EZav0scWgnhfU3-3xN-2c6RY3KrTvYQobn2j7BRsU=" />
                  Wifi</h5>: null}</li> <br/>
            <li>{facilities.ac ? <h5>
              <img className='facilitiesImage' alt='AC' src='http://cdn.onlinewebfonts.com/svg/img_216815.png' />
              Air Conditioning</h5>: null}</li> <br/>
            <li>{facilities.bar ? <h5>
              <img className='facilitiesImage' alt='Bar' src='https://image.shutterstock.com/image-vector/bar-lettering-illustration-label-badge-260nw-1034296870.jpg' />
              Bar</h5>: null}</li> <br/>
            <li>{facilities.microwave ? <h5>
              <img className='facilitiesImage' alt='Microwave' src='https://thumbs.dreamstime.com/b/microwave-oven-sign-icon-roast-chicken-kitchen-electric-stove-symbol-vector-illustration-isolated-white-background-microwave-163151044.jpg' />
              Microwave</h5>: null}</li>
          </div>
          <div className='col-6'>
              <li>{facilities.fridge ? <h5>
                <img className='facilitiesImage' alt='Fridge' src='https://thumbs.dreamstime.com/b/fridge-vector-icon-freezer-illustration-symbol-refrigerator-symbol-logo-web-sites-mobile-fridge-vector-icon-freezer-160724574.jpg' />
                Refrigerator</h5>: null}</li><br/>
              <li>{facilities.fireplace ? <h5>
                <img className='facilitiesImage' alt='fireplace' src='https://cdn2.vectorstock.com/i/1000x1000/44/66/fireplace-icon-silhouette-design-vector-16854466.jpg' />
                Fireplace</h5>: null}</li> <br/>
              <li>{facilities.toaster ? <h5> 
                <img className='facilitiesImage' alt='Toaster' src='https://cdn2.vectorstock.com/i/1000x1000/86/11/a-gray-toaster-icon-vector-13418611.jpg' />
                Toaster</h5>: null}</li> <br/>
              <li>{facilities.tv ? <h5>
                <img className='facilitiesImage' alt='TV' src='http://simpleicon.com/wp-content/uploads/tv.png' />
                TV
              </h5>: null}</li>
          </div>
        </div>
       

      </ul>
    )
}

function PropertyDetailedView(props) {
  return (
    <div>     
    <h4>{props.title}</h4>
    <span>
      <img src='https://www.citypng.com/public/uploads/preview/hd-star-silhouette-pink-icon-transparent-background-11637144467w2sss8mpmm.png' alt='fav' className='fav'/>
      <span id='rating'>{props.rating}</span>
      <span id='streetaddress'>{props.streetAddress}, {props.city} - {props.zipCode}, {props.country}</span>
    </span>
    <br/><br/>
    <div className='row'>
      <div className='col-6'>
         <img src={props.img1} alt='image1' className='bigImage' />
      </div>
      <div className='col-3'>
         <div className='col-6'>
              <img className='image2' src={props.img2} alt='image2' />
         </div>
         <div className='col-6'>
           <br/>
            <img className='image2' src={props.img3} alt='image3' />
         </div>
      </div>
      <div className='col-3'>
      <div className='col-6'>
          <img className='image2' src={props.img4} alt='image3' />
         </div>
         <div className='col-6'>
         <br/>
            <img className='image2' src={props.img5} alt='image3' />
           
         </div>
         </div>
    </div>
    <br/><br/>
    <div className='row'>
      <div className='col-8'>
        <h4>{props.subtitle}</h4>
        <span>{props.noOfGuests} Guests &bull; {props.numberOfBedrooms} bedrooms &bull; {props.numberOfBeds} beds &bull; {props.numberOfBaths} baths</span>
        <br/><hr/>
        <p>{props.description}
        </p>
        <hr/>
        <h4>What this place offers</h4>
        <br/>
        <ul>
            {props.features.map(createFacilitiesList)}

        </ul>
      </div>
      <div className='col-4'>
        <ReservationCard 
        price={props.price} 
        rating={props.rating} 
        reviews={props.reviews}
        />
      </div>
    </div>
    <hr/>
    <h3>Hosted by Evolve</h3>
    </div>
  )
}

export default PropertyDetailedView