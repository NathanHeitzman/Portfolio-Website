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
          <div className="inputs-container d-flex ">
            <div className="inner-input-container d-flex flex-column align-items-center ">
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
              <Button className="align-self-end" text="Submit" />
            </div>
          </div>
        </div>

        <div className="contentLeft col-12 col-md-6 order-md-1">
          <div className="reasons-container">
            <div className="reasons-text">
              <p>Message me to:</p>
              <ul>
                <li className="contact-list-item">Reason 1</li>
                <li className="contact-list-item">Longer Reason 2</li>
                <li className="contact-list-item">Reason 3</li>
                <li className="contact-list-item">Super super long reason 4</li>
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
