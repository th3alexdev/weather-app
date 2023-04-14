import React from 'react'
import img from "../../../assets/icons/weather/sunny.png"

function TodayForecastCard() {

  return (
    <>
     <div className="section-container section-container--today-forecast">

        <div className="weather-fc-cards-container">

          <div className="weather-fc-card">
            <h2 className="title weather-fc-card__title">Sun</h2> 
            <img src={ img } className="img weather-fc-card__img"/>
            <p className="text weather-fc-card__temperature">15º</p>
          </div>

        </div>
      </div>
    </>
  )
}

export default TodayForecastCard
