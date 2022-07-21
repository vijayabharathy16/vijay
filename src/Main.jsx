import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Main() {

  return (
    <>
      <div className="container " style={{ marginBottom: "200px" }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="main-full-page">

              <p style={{ color: "#00cfc8" }}
                className="text-center mainpg mb-0 mt-5 ">Hey There,I'm!</p>
              <p className="text-center text-dark mainpg ">
                <marquee direction="left" behavior="alternate" style={{ color: "white" }}> Vijayabharathy</marquee>
              </p>
              <div className="d-flex justify-content-center mt-5">
                <a href="https://drive.google.com/file/d/1scUtWa3pXEZkGeLQ-S_r2wd8PrPYSkKl/view?usp=sharing" target={"_blank"} className="btn btn-resume">
                  {/* <i className="fa fa-download"></i>  */}
                  View Resume</a>

               
          
              </div>
            
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;

// https://app.luminpdf.com/viewer/62850cca310975808b3bced2
