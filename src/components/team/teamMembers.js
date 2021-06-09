import React, { useState, useEffect } from "react";
import data from "./data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = teamMembers.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, teamMembers]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className="section">
      <div className="title">
        <h2>Upoznaj nas</h2>
      </div>
      <div className="section-center">
        {teamMembers.map((teamMate, teamMateIndex) => {
          const { id, image, name, title, quote } = teamMate;

          let position = "nextSlide";

          if (teamMateIndex === index) {
            position = "activeSlide";
          }
          if (
            teamMateIndex === index - 1 ||
            (index === 0 && teamMateIndex === teamMembers.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <div className="blockquote">{quote}</div>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default TeamMembers;
