import React from 'react'


function WeatherCard({ data }) {

  return (
    <div className="section-container">  

        <h2 className="title card-title">Weather</h2>

        <div className="weather__properties">
          <p className="text text--degrees">12 
            <span className="degrees degrees--main">ºC</span> 
          </p>
          <p className="text text--w-info">Mostly Cloudy</p>
          <p className="text text--w-info">Rain - 30%</p>
        </div>

        <img className="img img--weather" src={img} alt="An image of a sun"/>
    </div>
  )
}

export default WeatherCard
