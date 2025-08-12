import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../assets/styles/AboutWebsite.module.css";
function AboutWebsite() {
  return (
    <>
      <Navbar />
      <div
        className={`${styles.aboutWebsiteContainer} d-flex flex-column align-items-center`}
      >
        <h1 className={`${styles.header} text-white align-self-start mx-3`}>
          About This Website
        </h1>
        <p className={`${styles.text} mx-3 align-self-start`}>
          I built this website to learn more about frontend devlopment and
          project deployment. I also wanted to share my tech journey and
          showcase my skills, coursework, and relevant projects. Finally, I
          wanted to create a platform where people are able to get in touch with
          me for any questions or opportunities. Building this website has
          been a great learning experience.
        </p>
        <h1 className={`${styles.header} text-white align-self-start mx-3`}>
          Future Plans
        </h1>
        <p className={`${styles.text} mx-3`}>
          I plan to continue improving this website as I learn more about web
          development. Some features I plan to add in the future include a blog
          section where I can share my thoughts on tech topics, a testimonials
          section where people can leave feedback about my work, and a more
          detailed projects section where I can showcase my work in more depth.
          I also plan to consistanty improve the design and user experience of
          the website to make it more engaging and user-friendly.
        </p>


        <h1 className={`${styles.header} text-white align-self-start mx-3`}> Reach Out </h1>
        <p className={`${styles.text} mx-3 align-self-start`}>
          If you have any questions about this website or have any suggestions
          for how to improve it, please don't hesitate to{" "}
          <span>
            <a className={styles.textLink} href="/contact-me">
              reach out
            </a>
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
}
export default AboutWebsite;
