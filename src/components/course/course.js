import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BasicInfo from "./basicInfo";
import VidPlayer from "./video";

const Course = () => {
  return (
    <>
      <div onContextMenu={(e) => e.preventDefault()}>
        {/* promo spot, free epizoda  */}
        <VidPlayer />
      </div>
      {/* podaci o kursu, potrebno dodati potrebna predznanja, ''kurs je idealan za ..'' itd. */}
      <BasicInfo />
      {/* Ovde dodati listu sadrzaja kursa */}
      {/* Iskustva polaznika */}
      <div className="courseInfo">
        <Link to="/courses" className="button">
          Nazad
        </Link>
      </div>
    </>
  );
};

export default Course;
