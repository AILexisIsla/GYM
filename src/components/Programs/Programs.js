import React from "react";
import "./Programs.css";
import rightArrow from "../../assets/rightArrow.png";
import { Link } from "react-router-dom";
import { programsData } from "../../Info/programData.js";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explora nuestros </span>
        <span>programas</span>
        <span className="stroke-text"> y moldeate a tu manera</span>
      </div>

      <div className="program-categories">
        {programsData.map((program) => (
          <div className="category" key={program.id}>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              {" "}
              <Link to="*" id="redirection">
                <span>Unete ahora</span>
              </Link>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
