
import './App.css';
import Header from './components/Header';
import { Routes, Route} from 'react-router-dom';
import EventContainer from './components/EventContainer';
import React, { useState, useEffect } from 'react';
import EventForm from './components/EventForm';
import VenueForm from './components/VenueForm';
import Stats from './components/Stats';
import AboutUs from './components/AboutUs';

// import Login from './Login';




function App() {
  const [data, setData] = useState([])

  useEffect(() => {
       fetch('http://localhost:9292/')
      .then(r => r.json())
      .then(data => setData(data))
    }, [])

  function handleDeleteEvent(eventToDelete){
    const updatedEvents = data.filter((event) => {
      if (event.id !== eventToDelete.id) {
        return event
      } else {
        return null
      }
    });
    setData(updatedEvents);
  }

  function handleUpdateEvent(updatedEventObj) {
    const editedEvents = data.map((event) => {
      if (event.id === updatedEventObj.id) {
        return updatedEventObj;
      } else {
        return event;
      }
    });
    setData(editedEvents);
  }



  return (
  
    <div className="app">
   
    <Header/>
    
    <Routes>
    <Route path='/my-events' element={
          <EventContainer 
            data={data} 
            handleDeleteEvent={handleDeleteEvent} 
            handleUpdateEvent={handleUpdateEvent}
            />
            }
            />
        <Route exact path='/create-event' element={<EventForm />}/>
        <Route exact path='/create-venue' element={<VenueForm />}/>
        <Route exact path='/stats' element= {<Stats />}/>
        <Route exact path='/about-us' element={<AboutUs />}/>
        
    </Routes>
  
    </div>
   
  );
}

export default App;
