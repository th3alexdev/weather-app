import React from 'react'

import searchIcon from "../../../assets/icons/search.svg"
import myLocation from "../../../assets/icons/shuffle.svg"

function SearchCard() {

  let img = "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

  return (
    <div className="section-container section-container--search">
      
      <form action="#" className="form">

        <img src={ searchIcon } className="icon icon--form" alt="Magnifying glass icon to search for cities on the weather map" />
        <label htmlFor="city" className='input-label'>
          <input className="input" type="text" htmlFor="city" placeholder='Search for places...' autoComplete="none"/>
        </label>
        <img src={ myLocation } className="icon icon--form" alt="Current location icon to find the weather in your city" />

      </form>

      <div className="hr"></div>

      <div className="search-location">
        <p className="text search-location__text">New York, USA</p>
        <div className="search-location__shadow"></div>
        <img src={ img } className="img img--location" alt="Image of the city searched to know the current climate"/> 
      </div>

    </div>
  )
}

export default SearchCard
