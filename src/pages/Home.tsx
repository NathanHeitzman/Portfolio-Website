import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadShot from "../assets/images/nathan2.jpg";
import Button from "../components/Button";
import "../assets/styles/Home.css";

import SongScraping from "../assets/images/song_scraping.png";
import PaymentConfirmation from "../assets/images/paymentconfirmation.png";

//Icons
import Icon1 from "../assets/images/icons/python.png";
import Icon2 from "../assets/images/icons/java.png";
import Icon3 from "../assets/images/icons/c.png";
import Icon4 from "../assets/images/icons/html.png";
import Icon5 from "../assets/images/icons/css.png";
import Icon6 from "../assets/images/icons/javascript.png";
import Icon7 from "../assets/images/icons/typescript.png";
import Icon8 from "../assets/images/icons/react.png";
import Icon9 from "../assets/images/icons/bootstrap.png";
import Icon10 from "../assets/images/icons/git.png";
import Icon11 from "../assets/images/icons/github.png";
import Icon12 from "../assets/images/icons/figma.png";
import Icon13 from "../assets/images/icons/excel.png";
import Icon14 from "../assets/images/icons/word.png";
import Icon15 from "../assets/images/icons/powerpoint.png";
import Icon16 from "../assets/images/icons/teams.png";
import Icon17 from "../assets/images/icons/docker.png";
import Icon18 from "../assets/images/icons/ubuntu.png";
import Icon19 from "../assets/images/icons/windows.png";
import Icon20 from "../assets/images/icons/sql.png";
import Icon21 from "../assets/images/icons/R_logo.png";
import Icon22 from "../assets/images/icons/assembly.png";
import Icon23 from "../assets/images/icons/selenium.png";
import Icon24 from "../assets/images/icons/powerbi.png";

const icons: string[] = [
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  Icon10,
  Icon11,
  Icon12,
  Icon13,
  Icon14,
  Icon15,
  Icon16,
  Icon17,
  Icon18,
  Icon19,
  Icon20,
  Icon21,
  Icon22,
  Icon23,
  Icon24,
];

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

      <div className="container highlight-projects d-flex flex-column justify-content-center mb-2">
        <h1 className="projects-header text-white align-self-center">
          My Favorite Projects:
        </h1>
        <div className="projects-container row">
          <div className="project-container col-12 col-md-4 d-flex justify-content-center my-3 my-md-0">
            <img
              className="featured-project-image img-fluid order-md-1"
              src={SongScraping}
              alt=""
            />
          </div>
          <div className="project-container col-12 col-md-4 d-flex justify-content-center my-3 my-md-0">
            <img
              className="featured-project-image img-fluid order-md-2"
              src={PaymentConfirmation}
              alt=""
            />
          </div>
          <div className="project-container col-12 col-md-4 d-flex justify-content-center my-3 my-md-0">
            <img
              className="featured-project-image img-fluid order-md-3"
              src={PaymentConfirmation}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="tech-skills  d-flex flex-column justify-content-center">
        <h1 className="skills-header align-self-center my-2 text-white">
          I have hands-on experience with:
        </h1>
        <div className="container row g-0 align-self-center">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="col-4 col-sm-3 col-md-2 col-xl-1 d-flex justify-content-center"
            >
              <img src={icon} className="icon-image" />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Homepage;
