import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadShot from "../assets/images/nathan2.jpg";
import Button from "../components/Button";
import "../assets/styles/Home.css";

//Icons
import Icon1 from "../assets/images/icons/typescript.png";
import Icon2 from "../assets/images/icons/react.png";
import Icon3 from "../assets/images/icons/python.png";
import Icon4 from "../assets/images/icons/javascript.png";
import Icon5 from "../assets/images/icons/java.png";
import Icon6 from "../assets/images/icons/html.png";
import Icon7 from "../assets/images/icons/github.png";
import Icon8 from "../assets/images/icons/git.png";
import Icon9 from "../assets/images/icons/excel.png";
import Icon10 from "../assets/images/icons/css.png";
import Icon11 from "../assets/images/icons/c.png";
import Icon12 from "../assets/images/icons/bootstrap.png";
import Icon13 from "../assets/images/icons/figma.png"
import Icon14 from "../assets/images/icons/word.png"
import Icon15 from "../assets/images/icons/powerpoint.png"
import Icon16 from "../assets/images/icons/docker.png"
import Icon17 from "../assets/images/icons/teams.png"
import Icon18 from "../assets/images/icons/ubuntu.png"
import Icon19 from "../assets/images/icons/windows.png"
import Icon20 from "../assets/images/icons/sql.png"



const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="page-body d-flex justify-content-center align-items-center">
        <div className="row w-100 container">
          <div className="image-column col-12 col-md-6 order-md-2">
            <img src={HeadShot} className="my-headshot img-fluid"></img>
          </div>

          <div className="text-column col-12 col-md-6 order-md-1">
            <h1 className="mb-0">Hey there!</h1>
            <h2>
              I'm <span className="gradient-name">Nathan Heitzman</span>
            </h2>
            <h2>A Computer Science Student</h2>
            <br></br>
            <Button text="Lets Build Something Together!" />
            <div className="social-icons">
                <a href="https://www.linkedin.com/in/nathaniel-heitzman/">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://github.com/NathanHeitzman">
                  <i className="bi bi-github"></i>
                </a>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-skills page-body d-flex flex-column justify-content-center">
        <h1 className="skills-header align-self-center mb-2">
          I have hands-on experience with:
        </h1>
        <div className="container">
          <img
            className="icon-image"
            src={Icon1}
            alt=""
            onClick={() => iconClicked("typescript")}
          />
          <img className="icon-image" src={Icon2} alt="" />
          <img className="icon-image" src={Icon3} alt="" />
          <img className="icon-image" src={Icon4} alt="" />
          <img className="icon-image" src={Icon5} alt="" />
          <img className="icon-image" src={Icon6} alt="" />
          <img className="icon-image" src={Icon7} alt="" />
          <img className="icon-image" src={Icon8} alt="" />
          <img className="icon-image" src={Icon9} alt="" />
          <img className="icon-image" src={Icon10} alt="" />
          <img className="icon-image" src={Icon11} alt="" />
          <img className="icon-image" src={Icon12} alt="" />
          <img className="icon-image" src={Icon13} alt="" />
          <img className="icon-image" src={Icon14} alt="" />
          <img className="icon-image" src={Icon15} alt="" />
          <img className="icon-image" src={Icon16} alt="" />
          <img className="icon-image" src={Icon17} alt="" />
          <img className="icon-image" src={Icon18} alt="" />
          <img className="icon-image" src={Icon19} alt="" />
          <img className="icon-image" src={Icon20} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Homepage;

function iconClicked(text: string) {
  console.log("clicked!");
  if (text === "typescript") {
    console.log("typing");
  }
}
