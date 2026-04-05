import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../assets/styles/NavBar.module.css";
const Navbar = () => {
  return (
    <>
      <nav
        className={`${styles.navBar} navbar navbar-expand-md bg-body-tertiary py-0`}
      >
        <div className={`${styles.navBarContainer} container-fluid`}>
          <Link className={`${styles.navBrand} px-2 navbar-brand`} to="/">
            <i className="bi bi-house px-2"></i>
          </Link>
          <button
            className={`${styles.navBarToggler} navbar-toggler me-3`} //enables the "hamburger icon" to open navbar for smaller screens
            type="button"
            data-bs-toggle="collapse" //clicking should toggle something collapsible
            data-bs-target="#navbarSupportedContent" //target the nav links to toggle
            aria-controls="navbarSupportedContent" //Accessibility, tells screen readers this button controls toggling the smaller nav
            aria-expanded="false" //Accessibility, indicates that the button is not yet toggled
            aria-label="Toggle navigation" //Accessibility, tells screen readers its a navigation toggle
          >
            <span
              className={`${styles.navBarTogglerIcon} navbar-toggler-icon`}
            ></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={`${styles.navItem} px-2`}>
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className={`${styles.navItem} px-2`}>
                <Link className="nav-link" to="/contact-me">
                  Contact
                </Link>
              </li>
              <li className={`${styles.navItem} px-2`}>
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className={`${styles.navItem} px-2`}>
                <Link className="nav-link" to="/coursework">
                  Course Work
                </Link>
              </li>
              <li className={`${styles.navItem} px-2`}>
              <Link className="nav-link" to="/about">
                About Me
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
