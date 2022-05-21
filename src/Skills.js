import React from "react";
import "./App.css";
import {Link} from "react-router-dom";

function Skills() {
  const cardDetails = [
    // {
    //   tittle: "MONGO DB",
    //   loading: "80%",
    // },
    // {
    //   tittle: "EXPRESS",
    //   loading: "80%",
    // },
    {
      tittle: "REACT",
      loading: "85%",
    },
    // {
    //   tittle: "NODE JS",
    //   loading: "80%",
    // },
    {
      tittle: "JAVA SCRIPT",
      loading: "90%",
    },
    {
      tittle: "HTML",
      loading: "80%",
    },
    {
      tittle: "CSS",
      loading: "80%",
    },
    {
      tittle: "BOOTSTRAP",
      loading: "70%",
    },
    {
      tittle: "MATERIAL UI",
      loading: "70%",
    },
  ];
  return (
    <>
      <div id="skills" className="container ">
        <div className="row">
          <div className="col-lg-12 ">
            <p className="skills">Skills</p>
          </div>
        </div>
        <div className="row">
          {/* <div className="col-lg-12 m-3">
            <button className="btn btn-skills">Web</button>
              <Link to="/language" className="btn btn-skills">Language</Link>
              <Link to="/libraries" className="btn btn-skills">Libraries</Link>
             <Link to="/framework" className="btn btn-skills">Framework</Link>
            
          </div> */}
        </div>
        <div className="row">
          <div className="col-lg-12 cardHolder ">
            {cardDetails.map((data) => {
              return (
                <div className="bg-container">
                  <h5>
                    <strong>{data.tittle}</strong>
                  </h5>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-striped progress-bar-animated "
                      role="progressbar"
                      style={{ width: data.loading }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;