import React from 'react'

function Card({ subtitle, children, extra }) {
  return (
    <div className={ extra ? `section-container ${extra}` : "section-container"}>  
      {
        subtitle && <h1 className="title card-title">{ subtitle }</h1>
      }
      {
        children
      }

    </div>
  )
}

export default Card
