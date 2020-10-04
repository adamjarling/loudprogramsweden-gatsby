import React from "react";

const StatsUSA = () => {
  return (
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container content">
          <h2 className="title">LOUD Program US </h2>
          <h3 className="subtitle">2019/2020</h3>
          <ul>
            <li>Antal Skolor: 19 skolor i Los Angeles</li>{" "}
            <li>Finansiering: Audacious Foundation</li>
          </ul>
          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Antal LOUD-elever</p>
                <p className="title">450</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Årskurs</p>
                <p className="title">6 - 12</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Elever är av latinamerikansk ursprung</p>
                <p className="title">87%</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">
                  Procentantal elever som säger sig veta
                  <br />
                  mer om musik efter LOUD Program
                </p>
                <p className="title">90.9%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsUSA;
