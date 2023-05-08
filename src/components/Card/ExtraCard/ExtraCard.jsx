import React from 'react'
import { getSunriseAndSunset } from '../../../utils/convertUnixTimestamp';

import windIcon from "../../../assets/icons/wind-solid.svg"

function ExtraCard({ weather }) {

  let windSpeed = weather.wind.speed * 3.6

  const icon = "../../../../src/assets/icons/arrow.svg";
  const img = "https://avatars.githubusercontent.com/u/55007470?s=400&u=3ab0176605b70fce349ab80b7cdcfb47e35a6e6e&v=4";

  return (
    <div className="cards-container cards-container--others">

      <div className="other-card other-card--sunrise-sunset">
          <h2 className="title card-title">Sunrise & Sunset</h2> 
          <div className="card-flex">
              <div className="icon-time-box">
                  <img src={ icon } alt="sunrise icon" className="icon-time"/>
              </div>
              <p className="other-card-time__text">{ `${getSunriseAndSunset(weather.sys.sunrise)} AM` }</p>
          </div>
          <div className="card-flex">
                <div className="icon-time-box">
                    <img src={ icon } alt="sunset icon" className="icon-time icon-time--sunset"/>
                </div>
                <p className="other-card-time__text">{ `${getSunriseAndSunset(weather.sys.sunset)} PM` }</p>
          </div>
      </div>
      
      <div className="other-card">
        <h2 className="title card-title">Wind Speed</h2>
        <div className="card-flex">
          <img src={ windIcon } alt="" className="icon icon-card"/>
          <p className="card-text card-text--large">{ windSpeed.toFixed(1) }
            <span className="subtext"> km</span>
          </p> 
        </div>
      </div>

      <div className="other-card other-card--dev">
        <h2 className="title card-title">Dev</h2>
        <p className="other-card-dev__text">Alexander Pérez</p>

        <div className="highlight-box">
            <p className="other-card-dev__text">
              <a className="link link--dev" target="_blank" href="https://github.com/th3alexdev/">@th3alexdev</a>
            </p>
        </div>

        <p>Follow this repo!</p>

        <img 
          src={ img } 
          alt="developer github profile's image"
          className="img img--dev" 
        />

        <img 
          src="../../../../src/assets/icons/cloud-icon.webp"
          alt="cloud icon"
          className="img other-card-dev other-card-dev--cloud"
        />

        <img
          src="../../../../src/assets/icons/sun-icon.webp"
          alt="sun icon"
          className="img other-card-dev other-card-dev--sun"
        />
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
