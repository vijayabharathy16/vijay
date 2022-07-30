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
     <p className="about" style={{ marginBottom: "40px" }}>About Me</p>
            
            </div>
          </div>
          <div className="row ">
            {/* about me */}
            <div className="col-lg-12">
              <div className="aboutHead">
                {" "}
                <strong>FULL STACK </strong>&nbsp;
                {/* <i class="fa-solid fa-angles-right "></i>&nbsp; */}
               

                <strong>MERN STACK DEVELOPER</strong>
                
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
                <i class="fa-solid fa-wind-turbine"></i>
               
              <div className=" about-content">
                {" "}
              
                I have completed my fullstack development course in guvi and, I am very passionate and dedicated to work as front end development i am much interested in front-end development, Myself want to become a front-end developer my qualifications make me a suitable candidate for the front-end developer role.</div> <a className="contactA" href="https://github.com/vijayabharathy16" target={"_blank"}>
                  <i className="fa-brands fa-github-square"></i>
                </a>
                <a
                  className="contactA"
                  href="https://www.linkedin.com/in/vijaya-bharathy-5383a022a/" target={"_blank"}
                >
                  <i className="fa-brands fa-linkedin"></i>{" "}
                </a>
               
               
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