import React, { useState } from "react";
import Navbar from "../components/header/navbar";
import data from "../assets/data";
//ovde sam pokusao da ubacim samo navbar al ne moze ovako ocigledno, ako se stavi navbar u okviru Courses
//komponente onda se duplira na pocetnoj, jer u home.js vec ima <header/>
const ShowNavbar = () => {
  return (
    <>
      <Navbar />
    </>
  );
};
const Courses = () => {
  const [courses, setCourses] = useState(data);
  ShowNavbar();
  return (
    <>
      <main id="page-wrapper">
        <div id="featured" className="container">
          <div className="title">
            <h2>Svi kursevi na jednom mestu!</h2>
            {courses.map((course) => {
              return (
                <div key={course.id} className="tbox1">
                  <div className="padding-bottom">
                    <h2>{course.name}</h2>
                    <img src={course.image} alt="" width="250" height="250" />
                    <p>{course.desc}</p>
                    <a href="" className="button">
                      Saznaj više
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};

export default Courses;
