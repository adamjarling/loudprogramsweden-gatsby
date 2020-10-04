import React from "react";
import PropTypes from "prop-types";
import { FaRegFlag } from "react-icons/fa";
import { MdPeople } from "react-icons/md";
import { GiDiploma } from "react-icons/gi";

function Values(props) {
  return (
    <div className="box">
      <h2 className="title">LOUD Värdegrunder</h2>
      <div className="columns">
        <div className="column">
          <h3 className="title is-size-5">
            <FaRegFlag /> Mångkultur
          </h3>
          <p>
            LOUDs uppgift, är att främja möten mellan olika kulturer genom att
            samlas kring ett universellt språk, visa att vi alla är lika inför
            musiken, och att var och ens värdefulla erfarenheter, är en tillgång
            i den kreativa processen.
          </p>
        </div>
        <div className="column">
          <h3 className="title is-size-5">
            <MdPeople /> Jämställdhet
          </h3>
          <p>
            Vi på LOUD är stolta över att programmet lockar en lika stor del
            tjejer som killar, och lägger stor vikt och fokus vid att behålla
            det så. Detta gör vi genom att lyfta betydelsen av samarbete mellan
            kön, och att presentera en jämlik bild i vårt läromaterial, vår
            ledning samt bland våra medarbetare.
          </p>
        </div>
        <div className="column">
          <h3 className="title is-size-5">
            <GiDiploma /> Kreativt Lärande
          </h3>
          <p>
            LOUD ger eleven äganderätt över sitt eget personliga skapande. Detta
            utvecklar en lust att vilja lära sig nytt - som i sin tur hjälper
            även det teoretiska lärandet.
          </p>
        </div>
      </div>
    </div>
  );
}

Values.propTypes = {};

export default Values;
