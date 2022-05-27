import React from "react";
import "./App.css";

function Contact() {
  return (
    <>
      <div id="contact" className="container">
        <div className="row">
          <div className="col-lg-12">
            <p className="contactHead">Contact</p>
          </div>
        </div>
        <div className="row">
      
          <div className="col-lg-6 ">
            <div className="contact-text">
            <i style={{color:"#00cfc8"}} class="fa-solid fa-bell"></i>
              <h5>If you interested on my profile</h5>
              <h5>let me Know or just say <span style={{color:"#00cfc8"}}>HI</span> to me</h5>  
            </div>
            {/* <a
              href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCJTJnMZwwzZVXZznCfLFdVMGVCpspQXBRtsJztDrCKlnxHsDSCrlNWNjlHKCKjVRdpQWcxq"
              className="btn btn-contact" target={"_blank"}
            >
             
              <i class="fa-solid fa-phone"></i>
              <a> Contact : 9566724397</a>
            </a> */}
          </div>
      
          <div className="col-lg-6">
            
            <div className="contactInfo">
           
              <a
                className="contactA"
                href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCJTJnMZwwzZVXZznCfLFdVMGVCpspQXBRtsJztDrCKlnxHsDSCrlNWNjlHKCKjVRdpQWcxq" target={"_blank"}
              >
                {" "}
              <i className="fa-solid fa-envelope"></i>  
              </a>
            </div>
            <div className="contactInfo">
              <a
                className="contactA"
                href="https://www.linkedin.com/in/vijaya-bharathy-5383a022a/" target={"_blank"}
              >
                <i className="fa-brands fa-linkedin"></i>{" "}
              </a>
            </div>
            <div className="contactInfo">
              <a className="contactA" href="https://github.com/vijayabharathy16" target={"_blank"}>
                <i className="fa-brands fa-github-square"></i>
              </a>
            </div>
            <div className="contactInfo">
              {/* <a
                className="contactA"
                href="https://www.google.com/maps/place/Puducherry/@11.9362931,79.7785084,13z/data=!3m1!4b1!4m8!1m2!7m1!2e1!3m4!1s0x3a5361ab8e49cfcf:0xcc6bd326d2f0b04e!8m2!3d11.9412575!4d79.8081207?hl=en"
              >
                <i className="fa-solid fa-location-dot"></i>
               7 kaliyamman kovil street thalatheru,karaikal - PY
              </a> */}

              
              <a
              href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=CllgCJTJnMZwwzZVXZznCfLFdVMGVCpspQXBRtsJztDrCKlnxHsDSCrlNWNjlHKCKjVRdpQWcxq"
              className="btn btn-contact" target={"_blank"}
            >
             
              <i class="fa-solid fa-phone"></i>
              <a> Contact : 9566724397</a>
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;