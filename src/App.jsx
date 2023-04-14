import {
          Header, 
          Section,
          WeatherCard,
          SearchCard,
          TodayHighlightsCard,
          TodayForecastCard        
        } from './index'

import "./scss/styles.scss"


function App() {

  return (
    <>
      <main className='main'>
        <Header className="header" />

        <Section className="weather main-section">
          <WeatherCard/>
        </Section>

        <Section className="search main-section">
          <SearchCard/>
        </Section>

        <Section className="today-higlight main-section">
          <TodayHighlightsCard />
        </Section>
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