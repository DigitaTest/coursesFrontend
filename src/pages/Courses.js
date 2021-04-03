import React, { useState } from "react";
import data from "../assets/data";

const Courses = () => {
  const [courses, setCourses] = useState(data);
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
