import React, {useState} from 'react'


function Header({ children }) {
  return (

    <header className="header">
      <div className="header-container">

        <h1 className="header-text-principal">Weather.io</h1>

        { children[0] }

        <div className="header__btns">
          { children[1] }
          { children[2] }
        </div>
      </div>
    </header>

)
}

export default Header


{/* <div className="header__greeting">
        
<h1 className="header-text-principal">Hello,</h1>
<div className="name-container">
    <div className="greeting">
      <h2 
        id="name" spellCheck="false" 
        className="header-text-secondary"
        >
          Stranger
      </h2>
    </div>
</div>

</div> */}