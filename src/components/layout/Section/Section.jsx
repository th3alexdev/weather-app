import React from "react";
import Card from "../../Card/Card";

function Section({ title }) {
  return (
    <section className="today-highlight">
      <h1 className="title title--principal">{ title }</h1>

      <div className="cards-container">

        <Card title="Visibility"
              info={`5.2`}
              className="card" />

        <Card title="Humadity"
              info="87"
              className="card" />

        <Card title="Real Feel"
              info="29"
              className="card" />

        <Card title="UV Index"
              info="3"
              className="card" />

      </div>
    </section>
  );
}

export default Section;
