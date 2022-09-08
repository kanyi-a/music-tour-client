import React, {useState} from 'react'
import EventCard from './EventCard';
import Search from './Search';

function EventList() {
  return (
    <>
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <div className="event-list">
    {eventList}
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="next-container">
        <button className="next-button" onClick={handleClickMore}>Next</button>
    </div>
    </>
  )
}

export default EventList;