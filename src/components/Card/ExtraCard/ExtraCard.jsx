import React from 'react'
import { getSunriseAndSunset } from '../../../utils/convertUnixTimestamp';

import arrowIcon from "../../../../src/assets/icons/arrow.svg";
import windIcon from "../../../../src/assets/icons/wind-solid.svg"
import cloudIconBg from "../../../../src/assets/icons/cloud-icon.webp";
import sunIconBg from "../../../../src/assets/icons/sun-icon.webp";


function ExtraCard({ weather }) {

  let windSpeed = weather.wind.speed * 3.6

  const img = "https://avatars.githubusercontent.com/u/55007470?s=400&u=3ab0176605b70fce349ab80b7cdcfb47e35a6e6e&v=4";

  return (
    <div className="cards-container cards-container--others" role="region" aria-label="Other Information">
      <div className="other-card other-card--sunrise-sunset" aria-label="Sunrise & Sunset">
          <h2 className="title card-title">Sunrise & Sunset</h2> 
          <div className="card-flex">
              <div className="icon-time-box">
                  <img src={ arrowIcon } alt="sunrise icon" className="icon-time"/>
              </div>
              <p className="other-card-time__text">{ `${getSunriseAndSunset(weather.sys.sunrise)} AM` }</p>
          </div>
          <div className="card-flex">
                <div className="icon-time-box">
                    <img src={ arrowIcon } alt="sunset icon" className="icon-time icon-time--sunset"/>
                </div>
                <p className="other-card-time__text">{ `${getSunriseAndSunset(weather.sys.sunset)} PM` }</p>
          </div>
      </div>
      
      <div className="other-card" role="region" aria-label="Wind Speed">
        <h2 className="title card-title">Wind Speed</h2>
        <div className="card-flex">
          <img src={ windIcon } alt="Wind icon" className="icon icon-card" aria-hidden="true"/>
          <p className="card-text card-text--large">{ windSpeed.toFixed(1) }
            <span className="subtext">km</span>
          </p> 
        </div>
      </div>

      <div className="other-card other-card--dev"  aria-label="Developer Information">
        <h2 className="title card-title">Dev</h2>
        <p className="other-card-dev__text">Alexander Pérez</p>

        <div className="highlight-box">
            <p className="other-card-dev__text">
              <a className="link link--dev" target="_blank"  rel="noopener noreferrer" href="https://github.com/th3alexdev/">@th3alexdev</a>
            </p>
        </div>

        <p>
          <a className="link-repo" href="https://github.com/th3alexdev/weather-app" rel="noopener noreferrer" target="_blank">Follow this repo!</a>
        </p>

        <img 
          src={ img } 
          alt="developer github profile's image"
          className="img img--dev" 
        />

        <img 
          src={ cloudIconBg }
          alt="cloud icon"
          className="img other-card-dev other-card-dev--cloud"
          aria-hidden="true"
        />

        <img
          src={ sunIconBg }
          alt="sun icon"
          className="img other-card-dev other-card-dev--sun"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}

export default ExtraCard
