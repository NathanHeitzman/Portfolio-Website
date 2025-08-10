import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css"

const AboutMe = () => {
    return (
        <>
        <Navbar/>

        <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="row">
                <div className="image-container col-6">
                    <img src="" alt="" />
                </div>
                <div className="text-container col-6">
                        <p>I'm a student at the University of Minnesota Twin Cities, where I'm pursuing a degree in Computer Science with a minor in Management. My time here has been shaped by a balance of rigorous academics and exploring all that campus life has to offer. From collaborating with peers on class projects to discovering new study spots around Minneapolis, I've enjoyed immersing myself in both learning and the vibrant energy of the U of M.</p>
                </div>
            </div>

            <div className="row">
                <div className="text-container col-6">
                        <p>During my time at the University of Minnesota, I've been deeply involved with Kappa Kappa Psi, an honorary band service fraternity dedicated to supporting college bands and fostering a sense of community. I've served as President, Treasurer, and Ritualist, each role giving me new perspectives on leadership and teamwork. As President, I've guided our chapter in planning service projects and supporting the university's band program. As Treasurer, I managed our finances to keep initiatives running smoothly, and as Ritualist, I worked to preserve the traditions that make our chapter unique. These experiences have been an important part of my time at the U of M, helping me grow as a leader and collaborator while giving back to a cause I care about.</p>
                </div>
                <div className="image-container col-6">
                    <img src="" alt="" />
                </div>
            </div>
            
            <div className="row">
                <div className="image-container col-6">
                    <img src="" alt="" />
                </div>
                <div className="text-container col-6">
                    <p></p>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}
export default AboutMe;