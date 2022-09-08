import React, {useState, useEffect} from 'react'
import {useNavigate } from "react-router-dom"

function EventForm() {

    const [attendees, setAttendees] = useState("");
    const [eventType, setEventType] = useState("");
    const [price, setPrice] = useState("");
    const [date, setDate] = useState("");
    const [venueData, setVenueData] = useState([]);
    const [venue, setVenue] = useState('')
    let navigate = useNavigate(); 


    //handle change functions  
    function handleAttendeesChange(e){
        setAttendees(e.target.value)
    }
    function handleEventTypeChange(e){
        setEventType(e.target.value)
    }
    function handlePriceChange(e){
        setPrice(e.target.value)
    }
    function handleDateChange(e){
        setDate(e.target.value)
    }
    //handle submit function

  return (
    <div>EventForm</div>
  )
}

export default EventForm;