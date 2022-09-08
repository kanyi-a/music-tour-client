import React, {useState}from 'react'

export default function EditEvent({data, //setIsEditing, handleUpdateEvent
}) {
    const { attendees } = data



    const [updatedAttendees, setUpdatedAttendees] = useState(attendees);
    //attendees function

    function handleAttendeesChange(e){
        setUpdatedAttendees(e.target.value)
    }

  return (
      //attendees input 
    <form className='edit-event'>
        <label className='form-label' htmlFor='attendees'>Attendees:</label>
        <input
        name="attendees"
            type="number"
            placeholder="Amount of people attending..."
            value={updatedAttendees}
            onChange ={handleAttendeesChange}
            className="edit-event-input">
        </input>

        <br/>
        
        <label className="form-label" htmlFor="event-type">Type of Event: </label>
            <input 
            name="event-type"
            type="string"
            placeholder="Type of event..."
            //value={updatedEventType}
            //onChange={handleEventTypeChange}
            className="edit-event-input"
            ></input>
            <br/>
        
            <label className="form-label" htmlFor="price">Ticket Price: </label>
            <input 
            name="price"
            type="number"
            placeholder="Ticket price..."
            //value={updatedPrice}
            //onChange={handlePriceChange}
            className="edit-event-input"
            ></input>
            <br/>

            <label className="form-label" htmlFor="date">Date: </label>
            <input 
            name="date"
            type="date"
            placeholder="Event date..."
            //value={updatedDate}
            //onChange={handleDateChange}
            className="edit-event-input"
            ></input>
            <br/>
        <input className="save-button" type="submit" value="Save" />

</form>
  )
}
