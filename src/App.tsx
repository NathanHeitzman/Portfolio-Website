import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/Home.css";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects"
import Courses from "./pages/Courses"

function App() {
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
