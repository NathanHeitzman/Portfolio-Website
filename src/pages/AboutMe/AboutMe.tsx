import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./AboutMe.module.css";
import AboutMeCard from "../../components/AboutMeCard/AboutMeCard";
import PlaceholderImage from "../../assets/images/placeholder.png";

const AboutMe = () => {
    return (
        <>
            <Navbar />
            <div className={`${styles.pageBody} container-fluid d-flex flex-column align-items-center`}>
                <div className="my-3"></div>
                <AboutMeCard
                    image={PlaceholderImage}
                    imageAlt="Image of me with the Goldy statue at the University of Minnesota - Twin Cities"
                    title="University of Minnesota"
                    description={descriptionUniversity}
                />
                <div className="my-3"></div>
                <AboutMeCard
                    image={PlaceholderImage}
                    imageAlt="Kappa Kappa Psi"
                    title="Kappa Kappa Psi"
                    description={descriptionKKPsi}
                />
                <div className="my-3"></div>
                <AboutMeCard
                    image={PlaceholderImage}
                    imageAlt=""
                    title="Lorem Ipsum"
                    description={descriptionLorem}
                />
                <div className="my-3"></div>
            </div>
            <Footer />
        </>
    );
};
export default AboutMe;

const descriptionUniversity = `I'm a student at the University of Minnesota Twin Cities, where I'm pursuing a degree in
Computer Science with a minor in Management. My time here has been shaped by a balance of
rigorous academics and exploring all that campus life has to offer. From collaborating
with peers on class projects to discovering new study spots around Minneapolis, I've
enjoyed immersing myself in both learning and the vibrant energy of the U of M.`;

const descriptionKKPsi = `During my time at the University of Minnesota, I've been deeply involved with Kappa Kappa Psi,
an honorary band service fraternity dedicated to supporting college bands and fostering a sense of community.
I've served as President, Treasurer, and Ritualist, each role giving me new perspectives on leadership
and teamwork. As President, I've guided our chapter in planning service projects and supporting the
university's band program. As Treasurer, I managed our finances to keep initiatives running smoothly,
and as Ritualist, I worked to preserve the traditions that make our chapter unique. These experiences have been
an important part of my time at the U of M, helping me grow as a leader and collaborator while giving back to
a cause I care about.`;

const descriptionLorem = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam repudiandae nemo rem, recusandae esse molestias
consequatur similique maxime explicabo unde nisi sunt alias eveniet sapiente veritatis sint! Laboriosam, vel laudantium.`;
