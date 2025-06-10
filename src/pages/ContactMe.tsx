import "../assets/styles/ContactMe.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Handshake from "../assets/images/handshake.png";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactMe = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid row align-items-stretch">
        <div className="content-right col-12 col-md-6 order-md-2">
          <div className="inputs-container d-flex justify-content-center align-items-center">
            <div className="inner-input-container d-flex flex-column">
              <input
                className="user-input"
                placeholder="Username:"
                type="text"
              />
              <input
                className="user-input"
                placeholder="Email Address:"
                type="email"
              />
              <input
                className="user-input"
                placeholder="Phone Number:"
                type="number"
              />
              <input 
              className="user-input"
              placeholder="Company Website URL:"
              type="url" 
              />
              <input
                className="user-comments-input"
                placeholder="Comments:"
                type="text"
              />
              <div className="button-container d-flex justify-content-center justify-content-md-end">
                <Button className="submit-button align-self-end py-2 px-4 text-lg" text="Submit" />
              </div>
            </div>
          </div>
        </div>

        <div className="contentLeft col-12 col-md-6 order-md-1">
          <div className="reasons-container">
            <div className="reasons-text">
              <p>Message me to:</p>
              <ul>
                <li className="contact-list-item">Project collaboration</li>
                <li className="contact-list-item">Job / Internship opportunities</li>
                <li className="contact-list-item">Provide feedback on a project</li>
                <li className="contact-list-item">Connect and talk</li>
              </ul>
            </div>
            <div className="reasons-image-container">
              <img
                className="reasons-image"
                src={Handshake}
                alt="An image of me shaking hands with a co-worker"
              ></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactMe;
