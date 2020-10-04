import React from "react";

const MailChimp = () => {
  return (
    <div id="mc_embed_signup">
      <hr />
      <form
        action="https://loudprogramsweden.us19.list-manage.com/subscribe/post?u=7f21d67bc794c75a50e1f0290&amp;id=7db8acb4bf"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="field">
            <label className="label" htmlFor="mce-EMAIL">
              REGISTRERA ER FÖR VÅRT NYHETSBREV
            </label>
            <div className="control">
              <input
                type="email"
                name="EMAIL"
                className="email input"
                id="mce-EMAIL"
                placeholder="email address"
                required
              />
            </div>
          </div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_7f21d67bc794c75a50e1f0290_7db8acb4bf"
              tabIndex="-1"
            />
          </div>
          <div className="field">
            <input
              type="submit"
              value="Registrera"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button is-primary"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MailChimp;
