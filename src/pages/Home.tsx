import { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadShot from "../assets/images/nathan2.jpg";
import Button from "../components/Button";
import icons from "../data/iconData";
import "../assets/styles/Home.css";

import SongScraping from "../assets/images/song_scraping.png";
import PaymentConfirmation from "../assets/images/paymentconfirmation.png";

const Homepage = () => {
  const [openPopup, setPopupState] = useState(false); //use to toggle popups
  const [popupData, setPopupData] = useState<{ title: string } | null>(null); //default value will be null, popup data can be a string or null
  const [popupTitle, setPopupTitle] = useState<{ title: string } | null>(null);
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
                <h1 className="popup-header text-white">{popupTitle?.title}</h1>
                <div className="exit-button-container ms-auto">
                  <button
                    className="popup-exit-button"
                    onClick={() => {
                      setPopupState(false);
                      setPopupData(null); //return the popup data to nothing when closed
                      setPopupTitle(null);
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
              <p className="m-3 fs-5">{popupData?.title}</p>
            </div>
          </>
        )}
        <div className="container row g-0 align-self-center mb-5">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="col-4 col-sm-3 col-md-2 col-xl-1 d-flex justify-content-center"
            >
              <button
                className="icon-button"
                onClick={() => {
                  setPopupState(true);
                  setPopupData({ title: icon.description }); //set popup description
                  setPopupTitle({title: icon.name}); //set popup header
                }}
              >
                <img src={icon.src} className="icon-image" />
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
