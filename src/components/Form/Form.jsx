import React from "react"

import magnifyingGlassIcon from "../../../src/assets/icons/search.svg"


const Form = ({ newLocation, city, setCity }) => {

  const submitHandler = (e) => {
    e.preventDefault()
    if(city === "" || !city) return

    newLocation(city)
  }

  return (
    <form className="form" onSubmit={ submitHandler } role="search">
      <button className="form__btn" title="Search city" type="submit">
        <img 
        src={ magnifyingGlassIcon }
        className="btn icon--form"
        alt="Magnifying glass icon to search for cities on the weather map" 
        />
      </button>

      <label htmlFor="city" className='form-label'>
        <input 
          className="form__input"
          type="text"
          id="city" 
          placeholder='Search city...'
          autoComplete="on"
          aria-label="Search city"
          onChange={(e) => {
            setCity(e.target.value)
          }}
        />
      </label>
    </form>
  )
}

export default Form;