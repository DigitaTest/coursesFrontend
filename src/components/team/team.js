import React from "react";
import TeamMembers from "./teamMembers";
import "./team.css";

const Team = () => {
  return (
    <>
      <main id="page-wrapper">
        <div id="featured">
          <h1>Mi smo ta ekipa</h1>
          <p>neki tekst o nama</p>
        </div>
        <div>
          <TeamMembers />
        </div>
      </main>
    </>
  );
};

export default Team;
