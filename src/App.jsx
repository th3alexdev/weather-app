import {
        Card, 
        Section,
        WeatherCard,
        TodayHighlightsCard,
        TodayForecastCard        
       } from './index'

import "./scss/styles.scss"

function App() {

  return (
    <main className='main'>

      <Section>
        <WeatherCard className="card card--principal"/>
        <p>main section</p>
      </Section>

      <Section>
        <p>search section</p>
      </Section>

      <Section title="Today's Highlights">
        <p>highlights summary</p>
      </Section>

      <Section title="Today's Forecast">
        <p>forecast summary</p>
      </Section>

      <Section>
        <p> other cards + devcard</p>
      </Section>

    </main>
  )
}

export default App

{/* <Card  />   */}
      
{/* <Section 
title="Today's Highlights"
>
</Section>
<Section title="Today's Forecast">
</Section> */}