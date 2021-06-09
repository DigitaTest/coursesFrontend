import React, { useState, useEffect } from "react";
import data from "../../assets/dataKursevi";

const BasicInfo = ({
  id,
  name,
  image,
  desc,
  author,
  price,
  rating,
  language,
  numOfUsers,
  update,
}) => {
  return (
    <>
      <div className="courseInfo">
        <div className="courseInfoHead">
          <h1>{name}</h1>
          <p>{desc}</p>
        </div>

        <div className="courseInfoRating">
          <div className="ratingDiv">{rating}</div>
          <div className="star-ratings-css" title=".875"></div>
          <div className="ratingDiv">{numOfUsers} polaznika</div>
        </div>

        <div className="courseInfoPredavaci">
          <p>Predavač: {author}</p>
        </div>

        <div className="tehnical-details">
          <div className="tehnical-details-update">
            <p>Ažuriran: {update}</p>
          </div>
          <div className="tehnical-details-language">
            <p>Jezik: {language}</p>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <img src={course.image} alt="" width="250" height="250" />  */
}

export default BasicInfo;
