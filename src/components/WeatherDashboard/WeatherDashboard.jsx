import React, { useState, useEffect } from 'react'

import {
  Section,
  WeatherCard,
  SearchCard,
  TodayHighlightsCard,
  TodayForecastCard,
  ExtraCard,
  Loader,
  Card
} from '../../index'

import converTo from "../../utils/convertDegrees"
import setNextDays from '../../utils/nextDays'
import { convertUnixTimeStamp } from '../../utils/convertUnixTimestamp'

function WeatherDashboard({ weather, showData, loadingData, degreeType, unsplashImg, forecast}) {
  let description, weatherIcon, weatherUrl, nextDays, fulldate;

  if(showData) {
    description = weather.weather[0].description.split(" ");
    description = description.map((word) => word[0].toUpperCase() + word.substring(1));
    description = description.join(" ");

    weatherIcon = weather.weather[0].icon;
    weatherUrl = `../../../public/weather/${weatherIcon}.png`

    nextDays = setNextDays()

    console.log(weather)

    fulldate = convertUnixTimeStamp(weather.dt, weather.timezone)
  }

  return (
    <>
      {/* <main className={ showData ? "main" : "main main--home-page" }> */}
      <main className="main">
        <div className={ showData ? "principal principal--not-empty" : "principal"}>

          { loadingData && <Loader/> }

          {
            showData ? (
              <>
                <Section className="weather section-layout">
                  <img className="img img--weather" src={ showData && weatherUrl  } alt={ showData && weather.weather[0]}/>
                  <Card subtitle="Weather" extra="section-container--weather">
                    <div className="weather__properties">
                      <p className="text text--degrees"> { converTo(weather.main.temp, degreeType) }
                        <span className="degrees degrees--main">{ degreeType == "celsius" ? "ºC" : "ºF" }</span> 
                      </p>
                      <p className="text text--w-info"> { showData && description} </p>
                      <p className="text text--w-info">{`Rain -  ${Math.round(forecast.list[0].pop * 100) }%`}</p>
                    </div>
                  </Card>
                  
                </Section>
    
                <Section className="search section-layout">
                  <Card extra="section-container--search">
                      <div className="search-date">
                        <div className="search-date-container">
                          <img src="../../../src/assets/icons/schedule.svg" alt="" className="icon" />
                          <p className="search-date__main-text">{`${fulldate.weekDay},`} </p>
                          <p className="search-date__secondary-text">{`${fulldate.time}:${fulldate.minutes} `} </p>
                        </div>
                        <div className="search-date-container">
                          <img src="../../../src/assets/icons/calendar-month.svg" alt="" className="icon" />
                          <p className="search-date__main-text">{`${fulldate.month} ${fulldate.day}${fulldate.susffix},`} </p>
                          <p className="search-date__secondary-text">{`${fulldate.year}`} </p>
                        </div>
                      </div>
                      <hr className="hr"/>
                      <div className="search-location">
                        <p className="text search-location__text">{`${weather.name}, ${weather.sys.country}`}</p>
                        <div className="search-location__shadow"></div>
                        <img src={ unsplashImg } className="img img--location" alt="Image of the city searched to know the current climate"/> 
                      </div>
                  </Card>
                </Section>

                <Section className="today-highlight" title="Today's Highlights">
                  <Card extra="section-container--today-highlight">
                    
                  <div className="cards-container cards-container--th">
                      <div className="th-card">
                        <h2 className="title card-title">Real Feel</h2>
                        <p className='text card-text degrees'>{ converTo(weather.main.feels_like, degreeType) }
                          <span className="degrees-sup">{ degreeType == "celsius" ? "ºC" : "ºF" }</span> 
                        </p>
                      </div>

                      <div className="th-card">
                        <h2 className="title card-title">Humidity</h2>
                        <p className='text card-text'>{ weather.main.humidity }
                          <span>%</span>
                        </p>
                      </div>

                      <div className="th-card">
                        <h2 className="title card-title">Max & Min</h2>
                        <div className="card-flex card-flex--small">
                          <p className='text card-text card-text--large'>{ converTo(forecast.list[0].main.temp_max, degreeType) }º</p>
                          <p className='text card-text card-text--secondary'>/{ converTo(forecast.list[0].main.temp_min, degreeType) }º</p>
                        </div>
                      </div>

                      <div className="th-card">
                        <h2 className="title card-title">Pressure</h2>
                        <p className='text card-text'>{ weather.main.pressure}
                          <span className="subtext subtext--large"> mbar</span>
                        </p>
                      </div>
                  </div>
                  </Card>

                </Section>

                <div className="secondary-container">
                  <Section className="today-forecast main-section" title="Week's Forecast">
                    
                    <TodayForecastCard>
                      {
                        forecast.list.map((card, key) => (

                          key === 0 ? null : (

                            <div key={key} className="fc-card">
                            <h2 className="title fc-card__title">{ nextDays[key] }</h2> 
                            <img src={`../../../public/weather/${card.weather[0].icon}.png`} className="img fc-card__img"/>
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

            ) : ( !loadingData && (<div className="main-centered">
                    <div className="empty-container">
                      <img src="../../../src/assets/img/empty.png" alt="" className="img empty__img" />
                      <p className="empty__text">Empty for now</p>
                    </div>
                  </div> ))


          }




        </div>
      </main>
    </>
  )
}

export default WeatherDashboard
