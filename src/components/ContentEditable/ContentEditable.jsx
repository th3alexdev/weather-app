import React, { useState, useEffect } from 'react'

function ContentEditable() {
  const [name, setName] = useState('uwu')
  const [editable, setEditable] = useState(true)

  return (
    <>
      <h2 
        id="name" spellCheck="false" 
        contentEditable={ editable ? true : false }
        className="header-text-secondary"
        // onClick={(e) => nameHandler}
        >
      { name }
      </h2>
    </>
  )
}

export default ContentEditable
