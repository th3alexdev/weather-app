import React from 'react'
import img from "../../../assets/svg/clear-night.svg";

function WeatherCard() {
  return (
    <div className="section-container">  

        <h2 className="title section-container__title">Weather</h2>

        <div>
        <p className="text text--degrees">12 <span className='text text--sup'>º C</span></p>
            <p className="text text--weather-info">Mostly Cloudy</p>
            <p className="text text--weather-info">Rain - 30%</p>
        </div>

        <img className="img img--weather" src={img} alt="A SVG image of a sun"/>
    </div>
  )
}

export default WeatherCard
