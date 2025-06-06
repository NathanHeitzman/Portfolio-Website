import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/Home.css";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact-me" element = {<ContactMe />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
