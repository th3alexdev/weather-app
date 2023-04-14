import React from 'react'

function Header({ className }) {
  return (

    <header className= { className }>

      <div className="header__greeting">
      
        <h1 class="header-text-principal">Hello,</h1>
        
        <div className="name-container">
            <div className="greeting">
              <h2 id="name" spellCheck="false" contentEditable="false" className="header-text-secondary">Stranger</h2>
            </div>
        </div>

      </div>

      <div className="header__btns">
        <button className="btn btn--header">F</button>
        <button className="btn btn--header">C</button>
      </div>
    </header>

)
}

export default Header