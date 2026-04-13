import styles from "./ContactMe.module.css";
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactMe = () => {
  return (
    <>
      <Navbar />
      <div className={`${styles.contactPage} d-flex flex-column align-items-center justify-content-center`}>
        <h1 className={styles.header}>Let's Connect</h1>
        <p className={styles.subtext}>
          The best way to reach me is through LinkedIn or GitHub. I'm always open to new opportunities, collaborations, and conversations.
        </p>
        <div className={`${styles.linksContainer} d-flex gap-4`}>
          <a
            href="https://www.linkedin.com/in/nathaniel-heitzman/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkCard}
          >
            <i className="bi bi-linkedin"></i>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/NathanHeitzman"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkCard}
          >
            <i className="bi bi-github"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactMe;
