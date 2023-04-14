import React from "react";
import Card from "../../Card/Card";

function Section({ title, className, children}) {
  return (
    <section className={ className }>
      {
        title ? <h1 className="title title--principal">{ title }</h1> : null
      }
      
      { children }

    </section>
  );
}

export default Section;

// <div className="cards-container">
// 
// <Card title="Visibility"
//       info={`5.2`}
//       className="card" />
// 
// <Card title="Humadity"
//       info="87"
//       className="card" />
// 
// <Card title="Real Feel"
//       info="29"
//       className="card" />
// 
// <Card title="UV Index"
//       info="3"
//       className="card" />
// 
// </div>