import React from 'react'
import converTo from "../../utils/convertDegrees"

function DegreeButton({ degreeType, setDegreeType }) {

  const clickHandler = (e) => {
    let degreesToChange;

    if(degreeType == "celsius") degreesToChange = "fahrenheit";
    else degreesToChange = "celsius"

    e.target.dataset.deg = degreesToChange

    setDegreeType(degreesToChange);
  }

  return (
    <button className="btn btn-header btn-header--small" data-deg={ degreeType == "celsius" ? "celsius" : "fahrenheit" }
    onClick={(e) => clickHandler(e)}
    title={`Set degrees ${degreeType == "celsius" ? "celsius" : "fahrenheit"}`}
    > {
      degreeType == "celsius" ? "ºC" : "ºF"
    }
    </button>
  )
}

export default DegreeButton
