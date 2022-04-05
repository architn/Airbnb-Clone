import React from 'react'
import EventsCard from '../../components/Cards/Events/EventsCard'
import events from '../../data/events.js'

const filterRecords = events.filter( (eve) => {
  return eve.price > 0
})

function createEventsCard(events){
  return (
    <div className='col-3'>
      <EventsCard title={events.title} imgURL={events.imgURL} price={events.price} rating={events.rating} location={events.location}
      upvotes={events.upvotes}/>
    </div>
  )
}

function Events() {
  return (
    <div className='container'>
      <br/>
      <h5>All Experiences</h5>
      <br/>
      <div className='row'>
      {filterRecords.map(createEventsCard)}
      </div>
    </div>
  )
}

export default Events