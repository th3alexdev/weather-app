import React from "react";

function Section({ title, className, aria, children}) {
  return (
    <section className={ className } aria-label={ aria }>
      {
        title ? <h1 className="title title--principal">{ title }</h1> : null
      }
      
      { children }

    </section>
  );
}

export default Section;