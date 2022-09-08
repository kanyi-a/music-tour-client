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
    function handleSubmit(e){
        e.preventDefault();
        const newEventObj = {
            attendees: attendees,
            event_type: eventType,
            price: price,
            date: date,
            venue_id: venue,
            user_id: 5,
        }
            fetch("http://localhost:9292/add-event",{
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newEventObj)
                })
                .then(response => response.json())
                .then((data) => console.log(data))  
                .then(navigate("/my-events", { replace: true }))
                setAttendees("")
                setEventType('')
                setPrice("")
                setDate('')
        }

            useEffect(() => {
                fetch(`http://localhost:9292/venues`)
                .then(r => r.json())
                .then(data => setVenueData(data))
            }, [])
  return (
    <div>EventForm</div>
  )
}

export default EventForm;