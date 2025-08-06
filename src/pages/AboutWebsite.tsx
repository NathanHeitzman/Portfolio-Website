import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/AboutWebsite.css";
function AboutWebsite() {
  return (
    <>
      <Navbar />
      <h1 className="header text-white">About This Website</h1>
      <p className="main-text mx-3">I built this website to learn more about frontend devlopment and project deployment.
        I also wanted to share my tech journey and showcase my skills, coursework, and 
        relevant projects. Finally, I wanted to create a platform where people are able to get in
        touch with me for any questions or opportunities.
      </p>
      <p className="reachout-text mx-3">If you have any questions about or suggestions for the site dont hesitate to
        <span className="reachout-text-wrapper"> <a className="reachout-text-link" href="/contact-me">reach out</a> </span>
      </p>
      <Footer />
    </>
  );
}
export default AboutWebsite;