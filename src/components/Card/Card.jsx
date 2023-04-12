import React from 'react'

function addAdditionalText(title) {
  let text

  if(title == "Visibility") {
    text = ' km'
  } else if(title == "Humadity") {
    text = '%'
  } else if(title == "Real Feel") {
    text = ' ºC'
  } else {
    text = '';
  }

  return text
}

function Card({ title, info }) {
  return (
    <div className='card'>
      <h2 className='title title--secondary'>{ title }</h2>
      <p className='text text--data'>{ `${info}${addAdditionalText(title)}`}</p>
    </div>
  )
}

export default Card
