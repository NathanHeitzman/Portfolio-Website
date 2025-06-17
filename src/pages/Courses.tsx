import ClassData from "../data/classes.json";
import "../assets/styles/Courses.css"
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const Courses = () => {
  return (
    <>
      <Navbar />
      <div className="page-body">
        <div className="container d-flex flex-column justify-content-center">
            <div className="course-container"></div>
            <div className="course-container"></div>
            <div className="course-container"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Courses;
