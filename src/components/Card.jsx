import axios from 'axios'
import React, { useState, useEffect } from 'react'


const Card = ({resident}) => {

   const [character, setCharacter] = useState()

   useEffect(() => {
    axios.get(resident)
      .then(res => setCharacter(res.data))
      .catch(error => console.log(error))

  }, [])

  const mapStatus = {
    Alive: "lime",
    Dead: "red",
    unknown: "grey"
  };
  
  return (
    <div className='card1'>
        <img src={character?.image} alt="image" />
        <h2>{character?.name}</h2>
        <div className='pointer' style={{ background: mapStatus[character?.status] }} title=""></div>
        <p className='status'><b>Status:</b> {character?.status}</p>
        <p><b>Origin:</b> {character?.origin.name}</p>
        <p><b>Number of episodes:</b> {character?.episode.length}</p>
    </div>
  )
}

export default Card