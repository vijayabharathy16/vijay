import React from "react";
import "./App.css";
import logo from "./images/vijay.jpg"

function About() {

  return (
    <>
      <div id="about" className="container-fluid">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <p className="about" style={{ marginBottom: "40px" }}>
                About
              </p>
            </div>
          </div>
          <div className="row ">
            {/* about me */}
            <div className="col-lg-12">
              <div className="aboutHead">
                {" "}
                <strong>FULL STACK </strong>&nbsp;
                {/* <i class="fa-solid fa-angles-right "></i>&nbsp; */}
                <i class="fa-solid fa-wind-turbine"></i>
                
                <strong>MERN STACK DEVELOPER</strong>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className=" about-content">
                {" "}
                I have completed my Fullstack development trainee but I don't like Fullstack Development I very Passionate and dediacted to my work Fronted Development I Need for Frontend development and not Like FullStack development. 
             
              </div>
            </div>
           
            <div className="col-lg-6 d-flex justify-content-center mb-5">
              <img
                className="img-fluid coverphoto"
                    src={logo} height={"600px"} width={"400px"} alt="photo"/>
                    
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;