import ReactPlayer from "react-player";
import data from "../../assets/data";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const VidPlayer = () => {
  const [video, setVideo] = useState("");
  const { id } = useParams();
  //Postavljamo video  tacnog kursa na koji je korisnik kliknuo
  useEffect(() => {
    const newCourse = data.find((course) => course.id === parseInt(id));
    setVideo(newCourse.video);
  }, []);
  return (
    <div id="player-wrapper">
      <ReactPlayer
        id="player"
        url={video}
        width="100%"
        height="100%"
        // OVO BI TREBALO DA DISABLUJE DESNI KLIK AL IZ NEKOG RAZLOGA NE RADI
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default VidPlayer;
