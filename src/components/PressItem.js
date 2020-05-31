import React from "react";
import Fade from "react-reveal/Fade";

const PressItem = ({ title, url, image }) => {
  return (
    <Fade>
      <article className="card press-card">
        {image && (
          <div className="card-image">
            <figure className="image">
              <img src={image} alt={title} />
            </figure>
          </div>
        )}
        <div className="card-content">
          <h3 className="title has-text-primary is-size-4">{title}</h3>
        </div>
        <div className="card-footer">
          <p className="card-footer-item">
            <a href={url} target="_blank" alt="View PDF">
              Läs mer
            </a>
          </p>
        </div>
      </article>
    </Fade>
  );
};

export default PressItem;
