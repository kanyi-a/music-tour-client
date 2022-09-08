import React, {useState, useEffect} from 'react'

function EventForm() {

    const [attendees, setAttendees] = useState("");
    const [eventType, setEventType] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [venueData, setVenueData] = useState([]);
    const [venue, setVenue] = useState('')
    let navigate = useNavigate(); 


  return (
    <div>EventForm</div>
  )
}

export default EventForm;