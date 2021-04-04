import React, { useState, useEffect } from "react";
import data from "../../assets/data";
import { useParams } from "react-router-dom";

const BasicInfo = () => {
  const [name, setName] = useState("default name");
  const [desc, setDesc] = useState("default desc");
  const [image, setImage] = useState("");
  const { id } = useParams();
  //Postavljamo ime opis i sliku tacnog kursa na koji je korisnik kliknuo
  useEffect(() => {
    const newCourse = data.find((course) => course.id === parseInt(id));
    setName(newCourse.name);
    setDesc(newCourse.desc);
    setImage(newCourse.image);
  }, []);

  return (
    <>
      <div className="courseInfo">
        <h1>{name}</h1>
        <img src={image} alt="" width="250" height="250" />
      </div>
      <p className="lo">{desc}</p>
    </>
  );
};

export default BasicInfo;
