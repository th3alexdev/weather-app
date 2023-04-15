import React from 'react'

function TodayHighlightsCard({ }) {
  return (
      <div className="section-container section-container--today-highlight">

        <div className="weather-th-cards-container">

          <div className="weather-th-card">
            <h2 className="title subtitle">Visibility</h2>
            <p className='text text--data'>5.2</p>
          </div>

          <div className="weather-th-card">
            <h2 className="title subtitle">Humadity</h2>
            <p className='text text--data'>87</p>
          </div>

          <div className="weather-th-card">
            <h2 className="title subtitle">Real Feel</h2>
            <p className='text text--data'>29 
              {/* <span className="degrees">ºC</span>  */}
            </p>
          </div>

          <div className="weather-th-card">
            <h2 className="title subtitle">UV Index</h2>
            <p className='text text--data'>3</p>
          </div>

        </div>

      </div>
  )
}

export default TodayHighlightsCard

// <div className="cards-container">
// 
// <Card title="Visibility"
//       info={`5.2`}
//       className="card" />
// 
// <Card title="Humadity"
//       info="87"
//       className="card" />
// 
// <Card title="Real Feel"
//       info="29"
//       className="card" />
// 
// <Card title="UV Index"
//       info="3"
//       className="card" />
// 
// </div>