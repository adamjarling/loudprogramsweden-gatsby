import React from "react";

const StatsSweden = () => {
  return (
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container content">
          <h2 className="title">LOUD Program Sweden</h2>
          <h3 className="subtitle">2020</h3>

          <div className="level">
            <div className="level-item has-text-centered">
              <div>
                <p className="heading">Antal LOUD-elever</p>
                <p className="title">74</p>
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
                <p className="heading">
                  Könsfördelningen är 50/50,
                  <br />
                  killar och tjejer
                </p>
                <p className="title">50/50</p>
              </div>
            </div>
          </div>

          <ul>
            <li>LOUD finns 1 skola i Sverige, Vällingby Park, Stockholm.</li>{" "}
            <li>
              Vällingby Park är en svensk mångfaldsskola. Eleverna i LOUD
              Program har rötter ifrån b la, Chile, Afghanistan, Turkiet,
              Filippinerna, Nigeria och Venezuela.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default StatsSweden;
