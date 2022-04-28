import EventsCard from "../../components/Cards/Events/EventsCard";
import Navbar from "../../components/Navbar/Navbar";
import events from "../../data/events.js";

const filterRecords = events.filter((eve) => {
  return eve.price > 0;
});

function CreateEventsCard(events) {
  return (
    <div className="col-3">
      <EventsCard
        title={events.title}
        imgURL={events.imgURL}
        price={events.price}
        rating={events.rating}
        location={events.location}
        upvotes={events.upvotes}
      />
    </div>
  );
}

function Events(props) {
  return (
    <div className="container">
      {props.reusability ? null : <Navbar />}
      <br />
      <h5>All Experiences</h5>
      <br />
      <div className="row">
        {filterRecords.map((ev) => (
          <CreateEventsCard key={ev.id} {...ev} />
        ))}
      </div>
    </div>
  );
}

export default Events;
