import React, { useState, useEffect } from "react"

import searchIcon from "../../assets/icons/search.svg"
import myLocation from "../../assets/icons/shuffle.svg"

const Form = ({ newLocation }) => {
    const [city, setCity] = useState("") // Setea la ciudad que ingrese el usuario


    const submitHandler = (e) => {
      e.preventDefault()
      if(city === "" || !city) return

      newLocation(city)
    }

    return (
      <form className="form" onSubmit={ submitHandler }>
            <button className="form__btn" title="Search city">
              <img 
              src={ searchIcon }
              className="btn icon--form"
              alt="Magnifying glass icon to search for cities on the weather map" 
              type="submit"
              />
            </button>

            <label htmlFor="city" className='form-label'>
              <input 
                className="form__input"
                type="text"
                htmlFor="city" 
                placeholder='Search city...'
                autoComplete="none"
                onChange={(e) => {
                  setCity(e.target.value)
                }}
              />
            </label>

            {/* <button className="form__btn" type="submit">
              <img src={ myLocation } className="icon icon--form" alt="Current location icon to find the weather in your city" />
            </button> */}
            

      </form>
    )
}

export default Form;