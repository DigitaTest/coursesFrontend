import React from "react";
import { Link } from "react-router-dom";
import BasicInfo from "./basicInfo";
import VidPlayer from "./video";

const Course = () => {
  return (
    <>
      {/* podaci o kursu, potrebno dodati potrebna predznanja, ''kurs je idealan za ..'' itd. */}
      <BasicInfo />
      <div id="page-wrapper" onContextMenu={(e) => e.preventDefault()}>
        {/* promo spot, free epizoda  */}
        <VidPlayer />
      </div>
      {/* Ovde dodati listu sadrzaja kursa */}
      {/* Iskustva polaznika */}
      {/* Opcija placanja ofc */}
      <div id="courseInfo">
        <Link to="/courses" className="button">
          Nazad
        </Link>
      </div>
    </>
  );
};

export default Course;
