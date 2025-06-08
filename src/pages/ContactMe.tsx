import "../assets/styles/ContactMe.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button"
import Handshake from "../assets/images/handshake.png"
import "bootstrap/dist/css/bootstrap.min.css";

const ContactMe = () => {
  return (
    <>
      <Navbar />
      <div className=" contactMe-page container-fluid row">
        <div className="contentRight col-12 col-md-6 order-md-2">
          <div className="inputs-container d-flex flex-column justify-content-center">
            <input className="user-input" type="text"/>
            <input className="user-input" type="email"/>
            <input className="user-comments-input" type="text"/>
            <Button className="align-self end" text="Submit"/>
          </div>
        </div>

        <div className="contentLeft col-12 col-md-6 order-md-1">
          <div className="reasons-container">
            <div className="reasons-text">
              <ul>
                <p>Message me to:</p>
                <li className="contact-list-item">
                  Reason 1
                </li>
                <li className="contact-list-item">
                  Longer Reason 2
                </li>
                <li className="contact-list-item">
                  Reason 3
                </li>
                <li className="contact-list-item">
                  Super super long reason 4
                </li>
              </ul>
            </div>
            <div className="reasons-image-container">
              <img className="reasons-image" src={Handshake} alt="An image of me shaking hands with a co-worker"></img>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactMe;
