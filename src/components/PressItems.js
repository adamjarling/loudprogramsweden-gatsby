import React from "react";
import PressItem from "./PressItem";
import magicalInteraction from "../images/press/magical-interaction.jpg";
import pysslingen from "../images/press/pysslingen.jpg";
import unique from "../images/press/unique-chances.jpeg";
import vallingby from "../images/press/vallingby-park.png";
import press1 from "../images/press/press1.jpg";
import press1Image from "../images/press1-image.png";
import press2Image from "../images/press2-image.png";
import jens from "../images/JensEriksson2020.jpg";
import robertsF from "../images/press/robertsfors_farg.png";
import { useStaticQuery, graphql } from "gatsby";

const items = [
  {
    title:
      "MUSIKPROJEKTET LOUD I ROBERTSFORS ÄR IGÅNG: “EN CHANS SOM JAG ANNARS INTE FÅTT”",
    image: press1Image,
  },
  {
    title: "KOMMER FRAMTIDENS HITMASKIN FRÅN ROBERTSFORS?",
    image: press2Image,
  },
  {
    title:
      "SAHARA HOTNIGTHS-TRUMMISEN STARTAR MUSIKSKOLA I ROBERTSFORS - P4 VÄSTERBOTTEN",
    url: "https://t.sr.se/3bRlQ1M",
    image: press1,
  },
  {
    title: "ANMÄL ER TILL LOUD I ROBERTSFORS - ÅRSKURS 6-9",
    url:
      "http://www.robertsfors.se/kultur-fritid/kultur/barn-och-ungdomskultur/loud/",
    image: robertsF,
  },
  {
    title: "PYSSLINGEN VÄLLINGBY PARKS ELEVER FÅR JAMMA MED PROFFSEN",
    url: "https://bit.ly/3ebIcNV",
    image: vallingby,
  },
  {
    title: "NU BLIR DET LOUD PÅ PYSSLINGEN VÄLLINGBY PARK",
    url: "https://bit.ly/2JR4s1u",
    image: pysslingen,
  },
  {
    title: "ACADEMEDIAS JENS ERIKSSON OM LOUD PROGRAM VÄLLINGBY PARK",
    url: "https://bit.ly/3aIvK6c",
    image: jens,
  },
  {
    title: "MAGISKT SAMSPEL NÄR ELEVERNA BILDAR BAND",
    url: "https://bit.ly/3c34yix",
    image: magicalInteraction,
  },
  {
    title: "ELEVER FÅR CHANS I MUSIKPROJEKT",
    url: "https://bit.ly/3ebIcNV",
    image: unique,
  },
];

const PressItems = () => {
  const data = useStaticQuery(graphql`
    query PressItemsQuery {
      press1: file(
        sourceInstanceName: { eq: "pdf" }
        relativePath: { eq: "Press1.pdf" }
      ) {
        id
        publicURL
      }
      press2: file(
        sourceInstanceName: { eq: "pdf" }
        relativePath: { eq: "Press2.pdf" }
      ) {
        id
        publicURL
      }
    }
  `);

  return (
    <div className="columns is-multiline">
      {items.map((item) => {
        if (item.image === press1Image) {
          item.url = data.press1.publicURL;
        } else if (item.image === press2Image) {
          item.url = data.press2.publicURL;
        }

        return (
          <div className="column is-one-third" key={item.title}>
            <PressItem {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default PressItems;
