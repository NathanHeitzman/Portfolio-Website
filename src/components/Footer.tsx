import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../assets/styles/Footer.module.css";
import Resume from "../assets/Nathaniel-Heitzman-Resume.pdf";
const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div className="container-fluid p-0">
          <footer className={`${styles.footer} text-center pt-4`}>
            <div className="container p-4">
              <div className="row justify-content-center">
                
                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 className="mb-4">QUALIFICATIONS</h5>
                  <ul className="list-unstyled mb-4">
                    <li>
                      <a href="/projects" className="text-white footerLink">
                        My Projects
                      </a>
                    </li>
                    <li>
                      <a href="/coursework" className="text-white footerLink">
                        Course Work
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
                      <a href="/about-website" className="text-white footerLink">
                        About This Website
                      </a>
                    </li>
                    <li></li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
                  <h5 className="mb-4">CAREER</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#!" className="text-white footerLink">
                        Work Experience
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
                  <h5 className="mb-4">CONNECT</h5>
                  <ul className="list-unstyled">
                    <li>
                      <a href="https://www.linkedin.com/in/nathaniel-heitzman/" target="_blank" rel="noopener noreferrer" className="text-white footerLink">
                        <i className="bi bi-linkedin me-2"></i>LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/NathanHeitzman" target="_blank" rel="noopener noreferrer" className="text-white footerLink">
                        <i className="bi bi-github me-2"></i>GitHub
                      </a>
                    </li>
                  </ul>
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
