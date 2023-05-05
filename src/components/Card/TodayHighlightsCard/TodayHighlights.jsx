import React from 'react'

function TodayHighlightsCard({ }) {
  return (
      <div className="section-container section-container--today-highlight">

        <div className="cards-container cards-container--th">

          <div className="th-card">
            <h2 className="title card-title">Visibility</h2>
            <p className='text text--data'>5.2
              <span className="subtext"> km</span>
            </p>
          </div>

          <div className="th-card">
            <h2 className="title card-title">Humadity</h2>
            <p className='text text--data'>87
              <span>%</span>
            </p>
          </div>

          <div className="th-card">
            <h2 className="title card-title">Real Feel</h2>
            <p className='text text--data degrees'>29 
              <span className="degrees-sup">ºC</span> 
            </p>
          </div>

          <div className="th-card">
            <h2 className="title card-title">UV Index</h2>
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