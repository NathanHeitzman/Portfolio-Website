import "../assets/styles/ContactMe.css";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Handshake from "../assets/images/handshake.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";


const ContactMe = () => {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_52b0xzr", //Service ID
        "template_o6i549s", //Template ID
        form.current!, // Form reference
        "OST-LgUkVry-dHvAs" //Public Key
      )
      .then(
        () => {
          console.log("Email sent successfully"); //alert user about success
          alert("Your message has been sent successfully, I will do my best to be in contact as soon as possible!");
        },
        (error) => {
          console.error("Email failed to send", error.text); //handle errors and alert user regarding the problem
          alert("There was a problem sending your message.");
        }
      );

    form.current?.reset(); // Clear the form after sending
  };

  return (
    <>
      <Navbar />
      <div className="contact-page mb-5">
      <div className="container-fluid row align-items-stretch">
        <div className="content-right col-12 col-md-6 order-md-2">
          <div className="inputs-container d-flex justify-content-center align-items-center">
            <div className="inner-input-container d-flex flex-column">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="inner-input-container d-flex flex-column"
              >
                <input
                  className="user-input"
                  name="user-name"
                  placeholder="Username:"
                  type="text"
                />
                <input
                  className="user-input"
                  name="user-email-address"
                  placeholder="Email Address:"
                  type="email"
                />
                <input
                  className="user-input"
                  name="user-phone-number"
                  placeholder="Phone Number:"
                  type="text"
                />
                <input 
                className="user-input"
                name="user-website"
                placeholder="Company Website URL:"
                type="url" 
                />
                <textarea
                  className="user-comments-input"
                  name="user-message"
                  placeholder="Comments:"
                />
                <div className="button-container d-flex justify-content-center justify-content-lg-end">
                  <Button className="submit-button align-self-end py-2 px-4" text="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="contentLeft col-12 col-md-6 order-md-1">
          <div className="reasons-container">
            <div className="reasons-text">
              <p>Message me to inquire about:</p>
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
      </div>
      <Footer />
    </>
  );
};
export default ContactMe;
