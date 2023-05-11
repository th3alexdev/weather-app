import React from 'react'

function Header({ children }) {
  return (
    <header className="header" role="banner">
      <div className="header-container">

        <h1 className="header-text-principal">WeatherApp</h1>

        { children[0] }

        <div className="header__btns">
          { children[1] }
          { children[2] }
        </div>
      </div>
    </header>
  )
}

export default Header;