import React from "react";

const StatsRobert = () => {
  return (
    <section className="hero is-white">
      <div className="hero-body">
        <div className="container content">
          <h2 className="title">
            LOUD Sweden Robertsfors Aktivitetshus, Västerbotten
          </h2>
          <h3 className="subtitle">2020-21</h3>

          <div className="level" style={{ alignItems: "flex-start" }}>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Kapacitet Elevlista</p>
                <p className="title">100%</p>
                <p>(fullsatt med väntelista)</p>
              </div>
            </div>

            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Årskurs</p>
                <p className="title">6 - 9</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Könsfördelning % Tjejer/Killar</p>
                <p className="title">60 / 40</p>
              </div>
            </div>
          </div>

          <ul>
            <li>
              <strong>Kulturer Representerade:</strong> 5, nära dialog hålls med
              Robertsfors Integrationsenhet, samt SFI för att nå nyinflyttade.
            </li>{" "}
            <li>
              <strong>Finansiering:</strong> Likvärdighetspeng
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StatsRobert;
