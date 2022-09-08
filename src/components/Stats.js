import React, {useState, useEffect}from 'react'

export const Stats = () => {
    const [popular, setPopular] = useState("")
    const [busy, setBusy] = useState("")


    useEffect(() => {
        fetch('http://localhost:9292/most-popular')
        .then(r => r.json())
        .then(data => setPopular(data))
      }, [])
    const name = popular.split('-')[0]
    const fans = popular.split('-')[1]

    useEffect(() => {
        fetch('http://localhost:9292/busy-bee')
        .then(r => r.json())
        .then(data => setBusy(data))
      }, [])
    


  return (
    <> 
    <h2> Artist Stats </h2>
    <div className="stats">
        <h3>Most Popular:</h3>
        <h5>{name}</h5>
        <h5>{fans}</h5>
    </div>
    <br/>
    <br/>
    <div className="stats">
        <h3>busy bee:</h3>
        <h5>{busy}</h5>
    </div>
    </>
  )
}
