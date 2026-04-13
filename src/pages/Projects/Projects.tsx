import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import styles from "./Projects.module.css";

import { FaPython, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSelenium, SiTypescript, SiBootstrap, SiFigma } from "react-icons/si";

import SongScraping from "../../assets/images/song_scraping.png"
import PortfolioWebsite from "../../assets/images/portfolio.png"
import CsvPaymentConfirmation from "../../assets/images/paymentconfirmation.png"
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className={`${styles.projectsContainer} container-fluid d-flex flex-column align-items-center`}>
                <div className="my-3"></div>
                <ProjectCard
                    projectImage={SongScraping}
                    projectTitle="Metadata Scraping / Automated Song Backup"
                    projectDescription={description1}
                    projectTechIcons={[
                        { icon: FaPython, color: "#3776AB" },
                        { icon: SiSelenium, color: "#43B02A" },
                    ]}
                />
                <div className="my-3"></div>
                <ProjectCard
                    projectImage={CsvPaymentConfirmation}
                    projectTitle="Automated Payment Verification"
                    projectDescription={description2}
                    projectTechIcons={[
                        { icon: FaPython, color: "#3776AB" },
                    ]}
                />
                <div className="my-3"></div>
                <ProjectCard
                    projectImage={PortfolioWebsite}
                    projectTitle="This Website"
                    projectDescription={description3}
                    projectTechIcons={[
                        { icon: FaHtml5, color: "#E34F26" },
                        { icon: FaCss3Alt, color: "#1572B6" },
                        { icon: SiTypescript, color: "#3178C6" },
                        { icon: FaReact, color: "#61DAFB" },
                        { icon: SiFigma, color: "#F24E1E" },
                        { icon: SiBootstrap, color: "#7952B3" },
                    ]}
                />
            </div>
            <Footer />
        </>
    );
};
export default Projects;

const description1 = ` I built a two-part Python automation pipeline to extract song titles and artist names
                        from a web-based playlist. I used Selenium to scrape the data and save it to a structured text file.
                        Then, I wrote a second script that automatically searched each track on YouTube, captured the top
                        video URL, and compiled the links into a list for batch downloading. I used this list with yt-dlp to
                        efficiently download the entire playlist, streamlining the process of creating offline music libraries.`;

const description2 = `  I created a custom Python script to automate the verification of product payments
                        by comparing two CSV files—one containing customer order data and the other listing
                        Venmo transaction history. This project significantly streamlined what was previously
                        a manual and error-prone task by automatically cross-referencing customer names,
                        amounts, and timestamps to confirm completed payments. Built and tested in VS Code, the
                        script reduced data entry and verification time by over 90%, greatly improving both speed
                        and accuracy in processing customer transactions.`;

const description3 = `  I designed and developed my own personal portfolio website from scratch as a way
                        to represent my skills, creativity, and growth as a developer. Every part of the
                        site—from the layout to the interactive elements—was built by me. I started by creating
                        the full design in Figma, then brought it to life using HTML, CSS, JavaScript, and
                        TypeScript. I used React for component-based structure and Bootstrap to ensure the
                        site is fully responsive and visually consistent across all devices. This project is
                        more than just a portfolio—it's a custom-built platform that reflects who I am as a developer,
                        built entirely with tools and technologies I chose and implemented myself.`;
