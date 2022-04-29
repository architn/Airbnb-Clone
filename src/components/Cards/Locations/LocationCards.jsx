/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../Locations/LocationCards.css'
import NearestLocations from '../../../data/nearestlocations'
function LocationCards(props) {
// Shuffle array
const shuffled = NearestLocations.sort(() => 0.5 - Math.random());

// Get sub-array of first n elements after shuffled
let selected = shuffled.slice(0, 4);
console.log(selected);
  return (
    <div className='container'>
    <br /><br />
    <div className="jumbotron" id='jumbotronCard'>
            <h1 className="display-5">Inspiration for your next trip</h1>
            <p className="lead">Your next trip, just a click away!</p>
          </div>
          <div className="row">
                <div className="col">
                    <div className="card my-3">
                        <img src={selected[0].imageUrl} className="imageOfLocation" alt="..." />
                        <div className="card-body" id='card1'>
                            <h5 id='locationCard' className="card-title">{selected[0].place}</h5>
                            <p id='distanceText' className="card-text">{selected[0].title}</p>
                           <a className='btn btn-primary' href={selected[0].searchParams}>VISIT</a>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card my-3">
                    <img src={selected[1].imageUrl} className="imageOfLocation" alt="..." />
                        <div className="card-body" id='card2'>
                        <h5 id='locationCard' className="card-title">{selected[1].place}</h5>
                            <p id='distanceText' className="card-text">{selected[1].title}</p>
                            <a className='btn btn-primary' href={selected[1].searchParams}>VISIT</a>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card my-3">
                        <img src={selected[2].imageUrl} className="imageOfLocation" alt="..." />
                        <div className="card-body" id='card3'>
                        <h5 id='locationCard' className="card-title">{selected[2].place}</h5>
                        <p id='distanceText' className="card-text">{selected[2].title}</p>
                            <a className='btn btn-primary' href={selected[2].searchParams}>VISIT</a>
                            <br/><br/>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card my-3">
                        <img src={selected[3].imageUrl} className="imageOfLocation" alt="..." />
                        <div className="card-body" id='card4'>
                        <h5 id='locationCard' className="card-title">{selected[3].place}</h5>
                        <p id='distanceText' className="card-text">{selected[3].title}</p>
                            <a className='btn btn-primary' href={selected[3].searchParams}>VISIT</a>

                            <br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default LocationCards;