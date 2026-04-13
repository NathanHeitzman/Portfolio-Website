import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import ContactMe from "./pages/ContactMe/ContactMe";
import Projects from "./pages/Projects/Projects"
import Courses from "./pages/Courses/Courses"
import AboutMe from "./pages/AboutMe/AboutMe"
import AboutWebsite from "./pages/AboutWebsite/AboutWebsite";

function App() {

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api"); //port 8080
    console.log(response.data.tests);
  };

  useEffect(() => { //fetches data from the backend
    fetchAPI();
  },[]);
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact-me" element ={<ContactMe />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/coursework" element={<Courses />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/about-website" element={<AboutWebsite />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
