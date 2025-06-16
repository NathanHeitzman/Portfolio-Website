import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Project1 from "../assets/images/project.png";
import "../assets/styles/projects.css";

import PythonIcon from "../assets/images/icons/python.png"
import SeleniumIcon from "../assets/images/icons/selenium.png"

import SongScraping from "../assets/images/song_scraping.png"

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="projects-container container-fluid d-flex flex-column align-items-center">
                <div className="img-container">
                    <img className="project-image" src={SongScraping} alt="project 1" />
                </div>
                <div className="text-container d-flex flex-column">
                    <h3 className="align-self-center mt-3">Metadata Scraping / Automated Song Backup</h3>
                    <p className="align-self-center p-4">
                        I built a two-part Python automation pipeline to extract song titles and artist names 
                        from a web-based playlist. I used Selenium to scrape the data and save it to a structured text file. 
                        Then, I wrote a second script that automatically searched each track on YouTube, captured the top 
                        video URL, and compiled the links into a list for batch downloading. I used this list with yt-dlp to 
                        efficiently download the entire playlist, streamlining the process of creating offline music libraries.
                    </p>
                    <div className="icon-row d-flex flex-row align-items-center">
                        <p className="px-4">Technologies Used:</p>
                        <img className="icon" src={PythonIcon} />
                        <img className="icon" src={SeleniumIcon} />
                    </div>
                </div>
                <div className="img-container">
                    <img className="project-image" src={Project1} alt="project 2" />
                    <div className="text-container d-flex flex-column">
                        <h3 className="align-self-center mt-3">Project 1</h3>
                        <p className="align-self-center p-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                            similique voluptas iure dolorum ab quidem aliquid rem quod
                            voluptatem qui. Impedit, quae ab excepturi qui porro soluta
                            voluptatibus sequi adipisci! Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Laudantium vitae commodi reprehenderit natus autem
                            dolor at deserunt neque officiis! Deleniti, perspiciatis similique!
                            Corrupti unde, molestiae quaerat doloremque dolor nesciunt quod.
                        </p>
                        <div className="icon-row d-flex flex-row align-items-center">
                            <p className="px-4">Technologies Used:</p>
                            <img className="icon" src={PythonIcon} />
                            <img className="icon" src={SeleniumIcon} />
                        </div>
                    </div>
                </div>
                <div className="img-container">
                    <img className="project-image" src={Project1} alt="project 3" />
                    <div className="text-container d-flex flex-column">
                        <h3 className="align-self-center mt-3">Project 1</h3>
                        <p className="align-self-center p-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                            similique voluptas iure dolorum ab quidem aliquid rem quod
                            voluptatem qui. Impedit, quae ab excepturi qui porro soluta
                            voluptatibus sequi adipisci! Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Laudantium vitae commodi reprehenderit natus autem
                            dolor at deserunt neque officiis! Deleniti, perspiciatis similique!
                            Corrupti unde, molestiae quaerat doloremque dolor nesciunt quod.
                        </p>
                        <div className="icon-row d-flex flex-row align-items-center">
                            <p className="px-4">Technologies Used:</p>
                            <img className="icon" src={PythonIcon} />
                            <img className="icon" src={SeleniumIcon} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Projects;
