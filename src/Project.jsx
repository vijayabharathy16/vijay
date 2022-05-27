import React from "react";
import logo from "./images/project1.jpg"
import logo1 from "./images/project2.jpg"
import logo2 from "./images/project3.jpg"
import logo3 from "./images/project4.jpg"
import logo4 from "./images/project5.jpg"
import logo5 from "./images/project6.jpg"



function Projects() {
  const project = [
    {
      image: "project1.jpg",
      projectName: "Clubhouse-clone",
      about:
        "I have done a project called clubhouse-clone and please have a look of it",
      gitHubLink: "https://github.com/vijayabharathy16/react-clubhouse-clone",
      delpoyedLink: "https://vijay-clubhouse-clone.netlify.app/",

    },
    {
      image: "project2.jpg",
      projectName: "Product-sales",
      about:
        "I have done a project called product-sales and please have a look of it",
      gitHubLink: "https://github.com/vijayabharathy16/ProductSales-app",
      delpoyedLink: "https://vijay-productsales.netlify.app/",

    },
    {
      image: "project3.jpg",
      projectName: "Admin-pannel-dashboard",
      about:
        "I have done a project called adimin-pannel-dashborad and please have a look of it",
      gitHubLink: "https://github.com/vijayabharathy16/admin-pannel-dashboard",
      delpoyedLink: "https://vijayabharathy-admin-pannel.netlify.app/",

    },
    {
      image: "project4.jpg",
      projectName: "Book-movie",
      about:
        "I have done a project called book-movie and please have a look of it",
      gitHubLink: "https://github.com/vijayabharathy16/bookmovie-app",
      delpoyedLink: "https://vijay-bookmovie-app.netlify.app/",

    },
    {
      image: "project5.jpg",
      projectName: "Todo-app",
      about:
        "I have done a project called todo-app and please have a look of it",
      gitHubLink: "https://github.com/vijayabharathy16/Todo-app",
      delpoyedLink: "https://vijay-todo-app.netlify.app/",

    },
    {
      image: "project6.jpg",
      projectName: "Library-mangement",
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
                      <img src={logo} height={"200px"} width={"300px"} alt="photo" />
                      <h3 className="projectName">
                        <h3>Clubhouse-clone</h3>
                      </h3>
                      <p className="proAbout">I have done a project called clubhouse-clone and please have a look of it</p>
                      <a href= "https://github.com/vijayabharathy16/react-clubhouse-clone" target={"_blank"}>

                        <button className="btn btn-info ms-3" target={"_blank"}>Github</button>
                      </a>
                      <a href="https://vijay-clubhouse-clone.netlify.app/" target={"_blank"}>

                        <button className="btn btn-success ms-3" target={"_blank"}>Show</button>
                      </a>

                    </div>


                    <div className="col-lg-3  projectContainer">

                      <img src={logo1} height={"200px"} width={"300px"} alt="photo" />
                      <h3 className="projectName">
                        <h3>Product-sales</h3>
                      </h3>
                      <p className="proAbout">I have done a project called product-sales and please have a look of it</p>
                      <a href="https://github.com/vijayabharathy16/ProductSales-app" target={"_blank"}>

                        <button className="btn btn-info ms-3" target={"_blank"}>Github</button>
                      </a>
                      <a href="https://vijay-productsales.netlify.app/" target={"_blank"}>

                        <button className="btn btn-success ms-3" target={"_blank"}>Show</button>
                      </a>

                    </div>



                    <div className="col-lg-3  projectContainer">
                      {/* <h3 className="projectConatainer">
                        <img src={data.image} height={"200px"} width={"300px"}  alt="photo" />
                      </h3> */}
                      <img src={logo2} height={"200px"} width={"300px"} alt="photo" />
                      <h3 className="projectName">
                        <h3>Admin-pannel-dashboard</h3>
                      </h3>
                      <p className="proAbout">I have done a project called admin-pannel and please have a look of it</p>
                      <a href= "https://github.com/vijayabharathy16/admin-pannel-dashboard" target={"_blank"}>

                        <button className="btn btn-info ms-3" target={"_blank"}>Github</button>
                      </a>
                      <a href="https://vijayabharathy-admin-pannel.netlify.app/" target={"_blank"}>

                        <button className="btn btn-success ms-3" target={"_blank"}>Show</button>
                      </a>

                    </div>



                    <div className="col-lg-3  projectContainer">
                      {/* <h3 className="projectConatainer">
                        <img src={data.image} height={"200px"} width={"300px"}  alt="photo" />
                      </h3> */}
                      <img src={logo3} height={"200px"} width={"300px"} alt="photo" />
                      <h3 className="projectName">
                        <h3>Book-movie</h3>
                      </h3>
                      <p className="proAbout">I have done a project called book-movie and please have a look of it</p>
                      <a href= "https://github.com/vijayabharathy16/bookmovie-app" target={"_blank"}>

                        <button className="btn btn-info ms-3" target={"_blank"}>Github</button>
                      </a>
                      <a href="https://vijay-bookmovie-app.netlify.app/" target={"_blank"}>

                        <button className="btn btn-success ms-3" target={"_blank"}>Show</button>
                      </a>

                    </div>



                    <div className="col-lg-3  projectContainer">
                      {/* <h3 className="projectConatainer">
                        <img src={data.image} height={"200px"} width={"300px"}  alt="photo" />
                      </h3> */}
                      <img src={logo4} height={"200px"} width={"300px"} alt="photo" />
                      <h3 className="projectName">
                        <h3>Todo-app</h3>
                      </h3>
                      <p className="proAbout">I have done a project called todo-app and please have a look of it</p>
                      <a href= "https://github.com/vijayabharathy16/Todo-app" target={"_blank"}>

                        <button className="btn btn-info ms-3" target={"_blank"}>Github</button>
                      </a>
                      <a href="https://vijay-todo-app.netlify.app/" target={"_blank"}>

                        <button className="btn btn-success ms-3" target={"_blank"}>Show</button>
                      </a>

                    </div>
 

                    <div className="col-lg-3  projectContainer">
                      {/* <h3 className="projectConatainer">
                        <img src={data.image} height={"200px"} width={"300px"}  alt="photo" />
                      </h3> */}
                      <img src={logo5} height={"200px"} width={"300px"} alt="photo" />
                      <h3 className="projectName">
                        <h3>Library-mangement</h3>
                      </h3>
                      <p className="proAbout">I have done a project called library-details and please have a look of it</p>
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

