import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Project1 from "../assets/images/project.png";
import "../assets/styles/projects.css";

import PythonIcon from "../assets/images/icons/python.png"
import SeleniumIcon from "../assets/images/icons/selenium.png"
import HTML from "../assets/images/icons/html.png"
import CSS from "../assets/images/icons/css.png"
import TypeScript from "../assets/images/icons/typescript.png"
import Bootstrap from "../assets/images/icons/bootstrap.png"
import React from "../assets/images/icons/react.png"
import Figma from "../assets/images/icons/figma.png"

import SongScraping from "../assets/images/song_scraping.png"
import PortfolioWebsite from "../assets/images/portfolio.png"
import CsvPaymentConfirmation from "../assets/images/paymentconfirmation.png"

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
                    <img className="project-image" src={CsvPaymentConfirmation} alt="project 2" />
                    <div className="text-container d-flex flex-column">
                        <h3 className="align-self-center mt-3">Automated Payment Verification</h3>
                        <p className="align-self-center p-4">
                        I created a custom Python script to automate the verification of product payments 
                        by comparing two CSV files—one containing customer order data and the other listing 
                        Venmo transaction history. This project significantly streamlined what was previously 
                        a manual and error-prone task by automatically cross-referencing customer names, 
                        amounts, and timestamps to confirm completed payments. Built and tested in VS Code, the 
                        script reduced data entry and verification time by over 90%, greatly improving both speed 
                        and accuracy in processing customer transactions.
                        </p>
                        <div className="icon-row d-flex flex-row align-items-center">
                            <p className="px-4">Technologies Used:</p>
                            <img className="icon" src={PythonIcon} />
                        </div>
                    </div>
                </div>
                <div className="img-container">
                    <img className="project-image" src={PortfolioWebsite} alt="project 3" />
                    <div className="text-container d-flex flex-column">
                        <h3 className="align-self-center mt-3">This Website</h3>
                        <p className="align-self-center p-4">
                        I designed and developed my own personal portfolio website from scratch as a way 
                        to represent my skills, creativity, and growth as a developer. Every part of the 
                        site—from the layout to the interactive elements—was built by me. I started by creating 
                        the full design in Figma, then brought it to life using HTML, CSS, JavaScript, and 
                        TypeScript. I used React for component-based structure and Bootstrap to ensure the 
                        site is fully responsive and visually consistent across all devices. This project is 
                        more than just a portfolio—it's a custom-built platform that reflects who I am as a developer, 
                        built entirely with tools and technologies I chose and implemented myself.
                        </p>
                        <div className="icon-row d-flex flex-row align-items-center">
                            <p className="px-4">Technologies Used:</p>
                            <img className="icon" src={HTML} />
                            <img className="icon" src={CSS} />
                            <img className="icon" src={TypeScript} />
                            <img className="icon" src={React} />
                            <img className="icon" src={Figma} />
                            <img className="icon" src={Bootstrap} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
export default Projects;
