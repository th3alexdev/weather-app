import {
          Header, 
          Section,
          WeatherCard,
          SearchCard,
          TodayHighlightsCard,
          TodayForecastCard,
          ExtraCard  
        } from './index'

import "./scss/styles.scss"


function App() {

  return (
    <>
      <main className='main'>
        <div className="main-container">

          <Header className="header" />

          <Section className="weather main-section main-section--weather">
            <WeatherCard/>
          </Section>

          <Section className="search main-section">
            <SearchCard/>
          </Section>

          <Section className="today-highlight main-section" title="Today's Highlights">
            <TodayHighlightsCard />
          </Section>

          <div className="secondary-container">
            <Section className="today-forecast main-section" title="Today's Forecast">
              <TodayForecastCard />
            </Section>

            <Section className="extra main-section">
              <ExtraCard/>
            </Section>
            
          </div>

        </div>
      </main>
    </>
  )
}

export default App


// <Section className="weather main-section ">
// <WeatherCard />
// </Section>

// {/* <Section className="search main-section ">
// <SearchCard/>
// </Section>

// <Section className="today-higlight main-section">
// <TodayHighlightsCard />
// </Section> */}