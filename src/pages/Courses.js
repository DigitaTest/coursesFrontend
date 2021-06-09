import { useState } from "react";
import "./courses.css";
import data from "../assets/dataKursevi";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState(data);
  return (
    <>
      <main id="page-wrapper">
        <div className="containerCourses">
          <h1>Svi kursevi na jednom mestu!</h1>

          {courses.map((course) => {
            return (
              <div key={course.id} className="containerCourseCard">
                <div className="containerCourseCardImage">
                  <img
                    src={course.image}
                    alt={course.name}
                    width="360px"
                    height="210px"
                  />
                </div>
                <div className="containerCourseCardTitle">
                  <h2>{course.name}</h2>
                </div>

                <div className="containerCourseCardAuth">
                  <h4>{course.author}</h4>
                </div>

                <div className="containerCourseCardParag">
                  <p>{course.desc}</p>
                </div>
                <div>
                  <div className="ratings">
                    <p>{course.rating}</p>
                  </div>
                  <div className="star-ratings-css" title=".875"></div>
                  <div className="numberOfUsers">
                    <p>({course.numOfUsers} - korisnika)</p>
                  </div>
                </div>
                <div className="containerCourseCardPrice">
                  <h1>{course.price}</h1>
                </div>
                <div>
                  <Link to={`/course/${course.id}`} className="button">
                    Saznaj više
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Courses;
