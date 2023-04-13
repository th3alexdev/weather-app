import React from 'react'

import img from "../../../assets/icons/weather/clear-night.png";

function WeatherCard() {
  return (
    <div className="section-container">  

        <h2 className="title section-container__title">Weather</h2>

        <div>
          <p className="text text--degrees">12 
            <span className="degrees">ºC</span> 
          </p>
          <p className="text text--w-info">Mostly Cloudy</p>
          <p className="text text--w-info">Rain - 30%</p>
        </div>

        <img className="img img--weather" src={img} alt="An image of a sun"/>
    </div>
  )
}

export default WeatherCard
