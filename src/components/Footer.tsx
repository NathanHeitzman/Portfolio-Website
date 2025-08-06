import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/Footer.css";
import Resume from "../assets/Nathaniel-Heitzman-Resume.pdf";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="container-fluid p-0">
          <footer className="text-center text-lg-start pt-4">
            <div className="container-fluid p-4">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 className="mb-4">QUALIFICATIONS</h5>
                  <ul className="list-unstyled mb-4">
                    <li>
                      <a href="/projects" className="text-white">
                        My Projects
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Project Descriptions
                      </a>
                    </li>
                    <li>
                      <a href="/coursework" className="text-white">
                        Course Work
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        About Me
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 className="mb-4">ASSISTANCE</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/contact-me" className="text-white">
                        Contact Me
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        FAQ's
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Tech Stacks
                      </a>
                    </li>
                    <li>
                      <a href="/about-website" className="text-white">
                        About This Website
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 className="mb-4">CAREERS</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!" className="text-white">
                        My Career Interests
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Work Experience
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Volunteering
                      </a>
                    </li>
                    <li>
                      <a href={Resume} className="text-white" download>
                        Download my Resume
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 className="text-uppercase mb-4">Send me an email</h5>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example2"
                      className="form-control"
                    />
                    <label className="form-label" htmlFor="form5Example2">
                      Email address
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-white btn-block"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center p-3 border-top border-white">
              © {new Date().getFullYear()} Nathan Heitzman. All rights reserved
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
export default Footer;
