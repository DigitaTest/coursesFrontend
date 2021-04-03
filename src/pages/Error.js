
import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <id>
      <main id="page-wrapper">
        <div id="featured">
          <h1>Odradi me :D </h1>
          <p>desired page, doesnt exist</p>
          <Link to="/" className="btn">
            Pocetna
          </Link>
        </div>
      </main>

    </id>
  );
};

export default withRouter(Error);
