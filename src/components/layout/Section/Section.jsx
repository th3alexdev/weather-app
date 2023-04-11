import React from 'react'
import Card from '../../Card/Card'

function Section({ title }) {
  return (
    <section>
      <h1>{ title }</h1>
      <div className="card-container">
        <Card title="Visibility"/>
        <Card title="Humadity"/>
        <Card title="Real Feel"/>      
        <Card title="UV Index"/>
      </div>        
    </section>
  )
}

export default Section
