import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Project1 from "../assets/images/project.png"
import "../assets/styles/projects.css"

const Projects = () => {
    return(
        <>
        <Navbar />
            <div className="projects-container container-fluid d-flex flex-column align-items-center">
                <div className="img-container">
                    <img className="project-image" src={Project1} alt="project 1"/>
                </div>
                <div className="img-container">
                    <img className="project-image" src={Project1} alt="project 2" />
                </div>
                <div className="img-container">
                    <img className="project-image" src={Project1} alt="project 3" />
                </div>
            </div>
        <Footer />
        </>
    )
}
export default Projects;