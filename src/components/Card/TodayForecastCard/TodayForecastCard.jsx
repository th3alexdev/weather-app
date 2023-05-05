import React from 'react'

function TodayForecastCard({ children }) {

  return (
    <>
     <div className="section-container section-container--today-forecast">
        <div className="cards-container cards-container--tf">

          { children }

        </div>
      </div>
    </>
  )
}

export default TodayForecastCard
