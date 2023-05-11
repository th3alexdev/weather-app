import React from 'react'

import {
  Section,
  TodayForecastCard,
  ExtraCard,
  Loader,
  Card
} from '../../index'

import converTo from "../../utils/convertDegrees"
import setNextDays from '../../utils/nextDays'
import { convertUnixTimeStamp } from '../../utils/convertUnixTimestamp'

/* Import imgs */
import emptyIllustration from "../../../src/assets/img/empty.png";
import scheduleIcon from "../../../src/assets/icons/schedule.svg";
import calendarMonthIcon from "../../../src/assets/icons/calendar-month.svg";

function WeatherDashboard({ weather, showData, loadingData, degreeType, unsplashImg, forecast}) {
 
  let description, weatherIcon, weatherUrl, nextDays, fulldate;

  if(showData) {
    description = weather.weather[0].description.split(" ");
    description = description.map((word) => word[0].toUpperCase() + word.substring(1));
    description = description.join(" ");

    weatherIcon = weather.weather[0].icon;
    weatherUrl = `/weather/${weatherIcon}.png`

    nextDays = setNextDays()

    fulldate = convertUnixTimeStamp(weather.dt, weather.timezone)
  }

  return (
    <>
      <main className="main" role="main">
        <div className={ showData ? "principal principal--not-empty" : "principal"}>

          { loadingData && <Loader/> }

          {
            showData ? (
              <>
                <Section className="weather section-layout" aria="Weather Section">
                  <img 
                    className="img img--weather"
                    src={ showData && weatherUrl  }
                    alt={`Icon for ${weather.weather[0].main}`}
                    aria-hidden="true"
                  />
                  <Card subtitle="Weather" extra="section-container--weather">
                    <div className="weather__properties">
                      <p className="text text--degrees" aria-live="polite"> 
                        { converTo(weather.main.temp, degreeType) }
                        <span className="degrees degrees--main">{ degreeType == "celsius" ? "ºC" : "ºF" }</span> 
                      </p>
                      <p className="text text--w-info" aria-live="polite">{ showData && description}</p>
                      <p className="text text--w-info" aria-live="polite">{`Rain -  ${Math.round(forecast.list[0].pop * 100) }%`}</p>
                    </div>
                  </Card>
                </Section>
    
                <Section className="search section-layout" aria="About Section">
                  <Card extra="section-container--search">
                      <div className="search-date" aria-label="Current date and time">
                        <div className="search-date-container">
                          <img src={ scheduleIcon } alt="Clock icon" className="icon" />
                          <p className="search-date__main-text" aria-live="polite">{`${fulldate.weekDay},`} </p>
                          <p className="search-date__secondary-text" aria-live="polite">{`${fulldate.time}:${fulldate.minutes} `}</p>
                        </div>
                        <div className="search-date-container">
                          <img src={ calendarMonthIcon } alt="Calendar icon" className="icon" />
                          <p className="search-date__main-text" aria-live="polite">{`${fulldate.month} ${fulldate.day}${fulldate.susffix},`} </p>
                          <p className="search-date__secondary-text" aria-live="polite">{`${fulldate.year}`} </p>
                        </div>
                      </div>
                      <hr className="hr" aria-hidden="true"/>
                      <div className="search-location" aria-label="Search location">
                        <p className="text search-location__text" aria-live="polite">{`${weather.name}, ${weather.sys.country}`}</p>
                        <div className="search-location__shadow" aria-live="polite" aria-hidden="true"></div>
                        <img src={ unsplashImg } className="img img--location" alt="Image of the city searched to know the current climate" aria-hidden="true"/> 
                      </div>
                  </Card>
                </Section>

                <Section className="today-highlight" title="Today's Highlights" aria="Today's Highlights Section">
                  <Card extra="section-container--today-highlight">
                    
                  <div className="cards-container cards-container--th">
                      <div className="th-card" aria-label="Real Feel">
                        <h2 className="title card-title">Real Feel</h2>
                        <p className='text card-text degrees' aria-live="polite">
                          { converTo(weather.main.feels_like, degreeType) }
                          <span className="degrees-sup">{ degreeType == "celsius" ? "ºC" : "ºF" }</span> 
                        </p>
                      </div>

                      <div className="th-card" aria-label="Humidity">
                        <h2 className="title card-title">Humidity</h2>
                        <p className='text card-text'aria-live="polite">
                          { weather.main.humidity }
                          <span>%</span>
                        </p>
                      </div>

                      <div className="th-card" aria-label="Max & Min Temperature">
                        <h2 className="title card-title">Max & Min</h2>
                        <div className="card-flex card-flex--small">
                          <p className='text card-text card-text--large' aria-live="polite">
                            { converTo(forecast.list[0].main.temp_max, degreeType) }º</p>
                          <p className='text card-text card-text--secondary' aria-live="polite">
                            /{ converTo(forecast.list[0].main.temp_min, degreeType) }º</p>
                        </div>
                      </div>

                      <div className="th-card" aria-label="Pressure">
                        <h2 className="title card-title">Pressure</h2>
                        <p className='text card-text' aria-live="polite">
                          { weather.main.pressure}
                          <span className="subtext subtext--large"> mbar</span>
                        </p>
                      </div>
                  </div>
                  </Card>
                </Section>

                <div className="secondary-container">
                  <Section className="today-forecast main-section" title="Week's Forecast" aria="Week's Forecast">
                    
                    <TodayForecastCard role="list">
                      {
                        forecast.list.map((card, key) => (

                          key === 0 ? null : (

                          <div key={key} className="fc-card" role="listitem" aria-label={`Forecast for ${nextDays[key].long}`}>
                            <h2 className="title fc-card__title">{ nextDays[key].short }</h2> 
                            <img 
                              src={`/weather/${card.weather[0].icon}.png`}
                              className="img fc-card__img"
                              alt={`Icon for ${card.weather[0].description}`}
                            />
                            <div className="text fc-card__temperature">
                              <p className='fc-card-max-temp'>{ converTo(card.main.temp_max, degreeType) }º</p>
                              <p className='fc-card-min-temp'>{ converTo(card.main.temp_min, degreeType) }º</p>
                            </div>
                          </div>
                          )
                        ))

                      }

                    </TodayForecastCard>
                  </Section>

                  <Section className="extra main-section">
                    <ExtraCard weather={weather}/>
                  </Section>
                </div>

              </>

            ) : ( !loadingData && (
                <div className="main-centered" role="main">
                  <div className="empty-container">
                    <img src={ emptyIllustration } alt="Empty illustration" className="img empty__img" role="presentation"/>
                    <p className="empty__text">Empty for now</p>
                  </div>
                 </div> 
                 ))


          }
        </div>
      </main>
    </>
  )
}

export default WeatherDashboard
