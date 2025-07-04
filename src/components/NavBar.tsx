import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../assets/styles/NavBar.css"
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-body-tertiary py-0">
        <div className="navbar container-fluid ">
          <Link className="navbar-brand" to="/">
            <i className="bi bi-house px-2"></i> 
          </Link>
          <button
            className="navbar-toggler me-3" //enables the "hamburger icon" to open navbar for smaller screens
            type="button"
            data-bs-toggle="collapse" //clicking should toggle something collapsible
            data-bs-target="#navbarSupportedContent" //target the nav links to toggle
            
            aria-controls="navbarSupportedContent" //Accessibility, tells screen readers this button controls toggling the smaller nav
            aria-expanded="false" //Accessibility, indicates that the button is not yet toggled
            aria-label="Toggle navigation" //Accessibility, tells screen readers its a navigation toggle
          >
            <span className="navbar-toggler-icon"></span> 
          </button> 

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/contact-me">
                  Contact
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item px-2">
                <Link className="nav-link" to="/coursework">
                Course Work
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
