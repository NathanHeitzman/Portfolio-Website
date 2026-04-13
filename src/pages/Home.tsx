import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadShot from "../assets/images/nathan2.jpg";
import Button from "../components/Button";
import icons from "../data/iconData";
import styles from "../assets/styles/Home.module.css";
import SkillCard from "../components/SkillCard";

import SongScraping from "../assets/images/song_scraping.png";
import PaymentConfirmation from "../assets/images/paymentconfirmation.png";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className={`${styles.pageBody} d-flex justify-content-center align-items-center`}>
        <div className={`${styles.heroRow} row w-100 container`}>
          <div className="image-column col-12 col-md-6 order-md-2">
            <img src={HeadShot} className={`${styles.myHeadshot} img-fluid`}></img>
          </div>

          <div className={`${styles.textColumn} col-12 col-md-6 order-md-1`}>
            <h1 className="mb-0">Hey there!</h1>
            <h2>
              I'm <span className={styles.gradientName}>Nathan Heitzman</span>
            </h2>
            <h2>A Computer Science Student</h2>
            <br></br>
            <Button text="Lets Build Something Together!" />
            <div className={styles.socialIcons}>
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
              className={`${styles.featuredProjectImage} img-fluid order-md-1`}
              src={SongScraping}
              alt=""
            />
          </div>
          <div className="project-container col-12 col-md-4 d-flex justify-content-center my-3 my-md-0">
            <img
              className={`${styles.featuredProjectImage} img-fluid order-md-2`}
              src={PaymentConfirmation}
              alt=""
            />
          </div>
          <div className="project-container col-12 col-md-4 d-flex justify-content-center my-3 my-md-0">
            <img
              className={`${styles.featuredProjectImage} img-fluid order-md-3`}
              src={PaymentConfirmation}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="tech-skills d-flex flex-column justify-content-center">
        <h1 className="skills-header align-self-center my-4 text-white">
          I have hands-on experience with:
        </h1>
        <div className="container mb-5">
          <div className="row g-3 justify-content-center">
            {icons.map((icon, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg">
                <SkillCard name={icon.name} src={icon.src} description={icon.description} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Homepage;
