import React from 'react'

function ExtraCard() {

  const img = "https://avatars.githubusercontent.com/u/55007470?s=400&u=3ab0176605b70fce349ab80b7cdcfb47e35a6e6e&v=4";

  return (
    <div className="extra-cards-container">

      <div className="extra-card">
        <h2 className="title subtitle">Sunrise & Sunset</h2> 
      </div>
      
      <div className="extra-card">
        <h2 className="title subtitle">Air Quality</h2>
        <p className="text text--info">105</p> 
      </div>
      
      <div className="extra-card extra-card--dev">
        <h2 className="title subtitle">Dev</h2>
        <p className="text text-dev">Alexander Pérez</p>

        <div className="extra-card-box">
          <p className="text text-dev"><a className="link link--dev" href="#">@th3alexdev</a></p>
        </div>

        <p className="text text-dev text-dev--follow">Follow this repo!</p>

        <img className="img img--dev" src={ img } alt="developer github profile's image" />
      </div>

    </div>
  )
}

// <div className="weather-fc-cards-container">

// <div className="weather-fc-card">
//   <h2 className="title weather-fc-card__title">Sun</h2> 
//   <img src={ img } className="img weather-fc-card__img"/>
//   <p className="text weather-fc-card__temperature">15º</p>
// </div>

// </div>

export default ExtraCard
