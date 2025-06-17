import ClassData from "../data/classes.json";
import "../assets/styles/Courses.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

interface ClassDataType {
    id: number;
    full_name: string;
    course_id: string;
    course_description:string;
    technology_used:string;
    is_csci_course:boolean;
}

const Courses = () => {
const typedClassData: ClassDataType[] = ClassData.courses
  return (
    <>
      <Navbar />
      <div className="page-body">
        <div className="container d-flex flex-column justify-content-center">
            {
                typedClassData.map((data,index) => ( // map all classes in the JSON file
                    <div className="course-container" key={index}>
                        <h1>{data.full_name}</h1>
                    </div>
                ))
            }
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Courses;
