import { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadShot from "../assets/images/nathan2.jpg";
import Button from "../components/Button";
import "../assets/styles/Home.css";

import SongScraping from "../assets/images/song_scraping.png";
import PaymentConfirmation from "../assets/images/paymentconfirmation.png";

//Icons
import PythonIcon from "../assets/images/icons/python.png";
import JavaIcon from "../assets/images/icons/java.png";
import CIcon from "../assets/images/icons/c.png";
import HTMLIcon from "../assets/images/icons/html.png";
import CSSIcon from "../assets/images/icons/css.png";
import JavascriptIcon from "../assets/images/icons/javascript.png";
import TypescriptIcon from "../assets/images/icons/typescript.png";
import ReactIcon from "../assets/images/icons/react.png";
import BootstrapIcon from "../assets/images/icons/bootstrap.png";
import GitIcon from "../assets/images/icons/git.png";
import GithubIcon from "../assets/images/icons/github.png";
import FigmaIcon from "../assets/images/icons/figma.png";
import ExcelIcon from "../assets/images/icons/excel.png";
import WordIcon from "../assets/images/icons/word.png";
import PowerpointIcon from "../assets/images/icons/powerpoint.png";
import TeamsIcon from "../assets/images/icons/teams.png";
import DockerIcon from "../assets/images/icons/docker.png";
import UbuntuIcon from "../assets/images/icons/ubuntu.png";
import WindowsIcon from "../assets/images/icons/windows.png";
import SQLIcon from "../assets/images/icons/sql.png";
import RIcon from "../assets/images/icons/R_logo.png";
import AssemblyIcon from "../assets/images/icons/assembly.png";
import SeleniumIcon from "../assets/images/icons/selenium.png";
import PowerbiIcon from "../assets/images/icons/powerbi.png";

const icons: string[] = [
  PythonIcon,
  JavaIcon,
  CIcon,
  HTMLIcon,
  CSSIcon,
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  BootstrapIcon,
  GitIcon,
  GithubIcon,
  FigmaIcon,
  ExcelIcon,
  WordIcon,
  PowerpointIcon,
  TeamsIcon,
  DockerIcon,
  UbuntuIcon,
  WindowsIcon,
  SQLIcon,
  RIcon,
  AssemblyIcon,
  SeleniumIcon,
  PowerbiIcon,
];

const Homepage = () => {
  const [openPopup, setPopupState] = useState(false);
  const [popupData, setPopupData] = useState<{
    title: string;
    image: string;
  } | null>(null);
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
        <h1 className="projects-header text-white align-self-center mb-3">
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
        {openPopup && (
          <>
            <div className="popup-container align-self-center d-flex flex-column">
              <div className="border-test d-flex w-100">
                <h1 className="popup-header text-white">Test</h1>
                <div className="exit-button-container ms-auto">
                  <button
                    className="popup-exit-button"
                    onClick={() => setPopupState(false)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="container row g-0 align-self-center">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="col-4 col-sm-3 col-md-2 col-xl-1 d-flex justify-content-center"
            >
              <button
                className="icon-button"
                onClick={() => setPopupState(true)}
              >
                <img src={icon} className="icon-image" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Homepage;
