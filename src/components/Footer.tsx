import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../assets/styles/Footer.module.css";
import Resume from "../assets/Nathaniel-Heitzman-Resume.pdf";
const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className="container-fluid p-0">
          <footer className={`${styles.footer} text-center text-lg-start pt-4`}>
            <div className="container-fluid p-4">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 className="mb-4">QUALIFICATIONS</h5>
                  <ul className="list-unstyled mb-4">
                    <li>
                      <a href="/projects" className="text-white footerLink">
                        My Projects
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white footerLink">
                        Project Descriptions
                      </a>
                    </li>
                    <li>
                      <a href="/coursework" className="text-white footerLink">
                        Course Work
                      </a>
                    </li>
                    <li>
                      <a href="about" className="text-white footerLink">
                        About Me
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 className="mb-4">ASSISTANCE</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="/contact-me" className="text-white footerLink">
                        Contact Me
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white footerLink">
                        FAQ's
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white footerLink">
                        Tech Stacks
                      </a>
                    </li>
                    <li>
                      <a href="/about-website" className="text-white footerLink">
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
                      <a href="#!" className="text-white footerLink">
                        My Career Interests
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white footerLink">
                        Work Experience
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white footerLink">
                        Volunteering
                      </a>
                    </li>
                    <li>
                      <a href={Resume} className="text-white footerLink" download>
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
