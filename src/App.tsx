import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/Home.css";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects"
import Courses from "./pages/Courses"

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
