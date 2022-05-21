import React from "react";

function Projects() {
  const project = [
    {
      projectName: "Clubhouse-clone",
      about:
        "Check out my work clubouse-zoom-app-Frontend using",
    
      delpoyedLink: "https://vijay-clubhouse-clone.netlify.app/",
    
    },
    {
      projectName: "Product-sales",
      about:
        "Check out my work Productsales-app-Frontend using",

      delpoyedLink: "https://vijay-productsales.netlify.app/",
   
    },
    {
      projectName: "admin-pannel-dashboard",
      about:
        "Check out my work admin-pannel-dashboard-Frontend using",
     
      delpoyedLink: "https://vijayabharathy-admin-pannel.netlify.app/",
     
    },
    {
      projectName: "Book-movie",
      about:
        "Check out my work bookmovie-app-Frontend using",
      delpoyedLink: "https://vijay-bookmovie-app.netlify.app/",
     
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
                {project.map((data) => {
                  return (
                    <div className="col-lg-3  projectContainer">
                      <h3 className="projectName">
                        <h3>{data.projectName}</h3>
                      </h3>
                      <p className="proAbout">{data.about}</p>
                      <a href={data.gitHubLink}>
                        {/* <i class="fa-brands fa-github"></i> */}
                      </a>
                      <a href={data.delpoyedLink}>
                        {/* <i class="fa-solid fa-square-arrow-up-right"></i> */}
                        <button className="btn btn-success">Show</button>
                      </a>
                      <p className="tecUsed">{data.tecUsed}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
 
  

export default Projects;

