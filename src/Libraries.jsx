import React from "react";
// import { Link } from "react-router-dom";

function Libraries() {
  let cardDetails = [
    {
      tittle: "REACT",
      loading: "85%",
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
        {/* <div className="row">
        <div className="col-lg-12 m-3">
          <button className="btn btn-skills">Web</button>
          <button className="btn btn-skills">Language</button>
          <button className=" btn btn-skills">Libraries</button>
          <button className=" btn btn-skills">Frame Work</button>
        </div>
      </div> */}
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

export default Libraries;
