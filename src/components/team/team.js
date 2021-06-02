import React from "react";
import TeamMembers from "./teamMembers";
import "./team.css";
import groupPhoto from "../../assets/groupPhoto.jpg";

const Team = () => {
  return (
    <>
      <main id="page-wrapper">
        <div id="featured">
          <blockquote class="blockquote">
            <p>
              You don't have to be great to start, but you have to start to
              become great.
            </p>
          </blockquote>
          <br />
          <div class="box">
            <img
              src={groupPhoto}
              alt=""
              width="660px"
              height="400px"
              id="group-photo"
            />
            <h1>Ko smo mi?</h1>
            <p>neki tekst o nama</p>
            <h1>Sta nudimo?</h1>
            <p>neki tekst o nama</p>
            <h1>Kako cemo to zajedno ostvariti?</h1>
            <p>neki tekst o nama</p>
          </div>
        </div>
        <div>
          <TeamMembers />
        </div>
      </main>
    </>
  );
};

export default Team;
