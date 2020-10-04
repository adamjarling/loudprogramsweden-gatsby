import React from "react";

const StatsSweden = () => {
  return (
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container content">
          <h2 className="title">LOUD Sweden Vällingby Park Skola, Stockholm</h2>
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
                <p className="heading">Elever Med Rötter Utanför Sverige</p>
                <p className="title">80%</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Årskurs</p>
                <p className="title">2 - 5</p>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Könsfördelning % Tjejer/Killar</p>
                <p className="title">51 / 49</p>
              </div>
            </div>
          </div>

          <ul>
            <li>
              <strong>Kulturer Representerade:</strong> 15, bland dessa bl.a.
              Chile, Afghanistan, Turkiet, Filippinerna, Nigeria och Venezuela.
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

export default StatsSweden;
