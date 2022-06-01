import React from "react";

import logo1 from "./images/image1.jpg"
import logo2 from "./images/image2.jpg"
import logo3 from "./images/image3.jpg"
import logo4 from "./images/image4.jpg"




function Projects() {
  const project = [
  
    {
      image: "project2.jpg",
      projectName: "Movi-details-list",
      about:
        "I have done a project called product-sales and please have a look of it",
      gitHubLink: "https://github.com/vijayabharathy16/ProductSales-app",
      delpoyedLink: "https://vijay-productsales.netlify.app/",

    },
    {
      image: "project3.jpg",
      projectName: "profile-create-app",
      about:
        "I have done a project called adimin-pannel-dashborad and please have a look of it",
      gitHubLink: "https://github.com/vijayabharathy16/admin-pannel-dashboard",
      delpoyedLink: "https://vijayabharathy-admin-pannel.netlify.app/",

    },
    {
      image: "project4.jpg",
      projectName: "Quize-app",
      about:
        "I have done a project called book-movie and please have a look of it",
      gitHubLink: "https://github.com/vijayabharathy16/bookmovie-app",
      delpoyedLink: "https://vijay-bookmovie-app.netlify.app/",

    },
   
    {
      image: "project6.jpg",
      projectName: "Book store",
      about:
        "I have done a project called library-magement and please have a look of it",
      gitHubLink: "https://github.com/vijayabharathy16/Library-mangement",
      delpoyedLink: "https://library-mangement.netlify.app/",

    },


  ];
  return (
    <>
     <div id="project" className="container-fluid">
        {" "}
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="projectHead">Projects</div>
            </div>
            <div className="row d-flex justify-content-center">
             
                {/* return ( */}
                  <>
                    <div className="col-lg-3  projectContainer">
                      {/* <h3 className="projectConatainer">
                        <img src={data.image} height={"200px"} width={"300px"}  alt="photo" />
                      </h3> */}
                      <img src={logo1} height={"200px"} width={"450px"} alt="photo" />
                      <h3 className="projectName">
                        <h3>Movie-Detail-List</h3>
                      </h3>
                      <p className="proAbout">I have done a project called Movie-list and please have a look of it</p>
                      <a href= "https://github.com/vijayabharathy16/movie-data-list" target={"_blank"}>

                        <button className="btn btn-info ms-3" target={"_blank"}>Github</button>
                      </a>
                      <a href="https://vijay-movie-data-list.netlify.app/" target={"_blank"}>

                        <button className="btn btn-success ms-3" target={"_blank"}>Show</button>
                      </a>

                    </div>


                    <div className="col-lg-3  projectContainer">

                      <img src={logo2} height={"200px"} width={"450px"} alt="photo" />
                      <h3 className="projectName">
                        <h3>Food-Datails-App</h3>
                      </h3>
                      <p className="proAbout">I have done a project called Food-details-app and please have a look of it</p>
                      <a href="https://github.com/vijayabharathy16/Food-recipe-app" target={"_blank"}>

                        <button className="btn btn-info ms-3" target={"_blank"}>Github</button>
                      </a>
                      <a href="https://preeminent-cajeta-757ac1.netlify.app/" target={"_blank"}>

                        <button className="btn btn-success ms-3" target={"_blank"}>Show</button>
                      </a>

                    </div>



                    <div className="col-lg-3  projectContainer">
                      {/* <h3 className="projectConatainer">
                        <img src={data.image} height={"200px"} width={"300px"}  alt="photo" />
                      </h3> */}
                      <img src={logo3} height={"200px"} width={"450px"} alt="photo" />
                      <h3 className="projectName">
                        <h3>Quize-App</h3>
                      </h3>
                      <p className="proAbout">I have done a project called Quize-app and please have a look of it</p>
                      <a href= "https://github.com/vijayabharathy16/quize-app" target={"_blank"}>

                        <button className="btn btn-info ms-3" target={"_blank"}>Github</button>
                      </a>
                      <a href="https://tourmaline-semifreddo-3649d1.netlify.app/" target={"_blank"}>

                        <button className="btn btn-success ms-3" target={"_blank"}>Show</button>
                      </a>

                    </div>

                   
                    <div className="col-lg-3  projectContainer">
                      {/* <h3 className="projectConatainer">
                        <img src={data.image} height={"200px"} width={"300px"}  alt="photo" />
                      </h3> */}
                      <img src={logo4} height={"200px"} width={"450px"} alt="photo" />
                      <h3 className="projectName">
                        <h3>Book Store</h3>
                      </h3>
                      <p className="proAbout">I have done a project called Book-stores and please have a look of it</p>
                      <a href= "https://github.com/vijayabharathy16/Library-mangement" target={"_blank"}>

                        <button className="btn btn-info ms-3" target={"_blank"}>Github</button>
                      </a>
                      <a href="https://library-mangement.netlify.app/" target={"_blank"}>

                        <button className="btn btn-success ms-3" target={"_blank"}>Show</button>
                      </a>

                    </div>



                  </>
                );
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
                    

}









export default Projects;

