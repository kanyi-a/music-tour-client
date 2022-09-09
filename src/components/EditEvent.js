import React, {useState}from 'react'

 function EditEvent({data, setIsEditing, handleUpdateEvent }) {
    const { id ,attendees ,event_type ,price ,date } = data


    //usestate
    const [updatedAttendees, setUpdatedAttendees] = useState(attendees);
    const [updatedEventType, setUpdatedEventType] = useState(event_type);
    const [updatedPrice, setUpdatedPrice] = useState(price); 
    const [updatedDate, setUpdatedDate] = useState(date);
    //attendees function

    function handleAttendeesChange(e){
        setUpdatedAttendees(e.target.value)
    }

    //eventtype function
    function handleEventTypeChange(e){
        setUpdatedEventType(e.target.value)
    }

    //price function
    function handlePriceChange(e){
        setUpdatedPrice(e.target.value)
    }
    //date function
    function handleDateChange(e){
        setUpdatedDate(e.target.value)
    }

    //handle submit function
    function handleSubmit(e) {
        e.preventDefault();
    
                //FETCH
        fetch(`http://localhost:9292/events/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event_type: updatedEventType,
            attendees: updatedAttendees,
            price: updatedPrice,
            date: updatedDate,
          }),
        })
          .then((r) => r.json())
          .then((updatedEvent) => handleUpdateEvent(updatedEvent))
          .then(() => setIsEditing(false));
      }

    return (
            //attendees input 
            <form className='edit-event' onSubmit={handleSubmit}>
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
                value={updatedEventType}
                onChange={handleEventTypeChange}
                className="edit-event-input"
                ></input>
                <br/>
            
                <label className="form-label" htmlFor="price">Ticket Price: </label>
                <input 
                name="price"
                type="number"
                placeholder="Ticket price..."
                value={updatedPrice}
                onChange={handlePriceChange}
                className="edit-event-input"
                ></input>
                <br/>

                <label className="form-label" htmlFor="date">Date: </label>
                <input 
                name="date"
                type="date"
                placeholder="Event date..."
                value={updatedDate}
                onChange={handleDateChange}
                className="edit-event-input"
                ></input>
                <br/>
            <input className="save-button" type="submit" value="Save" />

    </form>
    )
    }
export default EditEvent;