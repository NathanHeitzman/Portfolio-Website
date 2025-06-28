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
    projects?:Array<string>;
    my_description?:string;
}

const Courses = () => {
const typedClassData: ClassDataType[] = ClassData.courses
  return (
    <>
      <Navbar />
      <div className="page">
        <div className="courses-container container d-flex flex-column justify-content-center">
            {
                typedClassData.map((data,index) => ( // map all classes in the JSON file
                    <div className="course-container" key={index}>
                        <h1>{data.course_id}</h1>
                        <h1>{data.full_name}</h1>
                        <br/>
                        <p>{data.course_description}</p>
                        <p>{data.my_description}</p>
                        <br/>
                        <h2>Key Projects:</h2>
                        <ul>
                          {data.projects?.map((project) => (
                            <li className="text-white">{project}</li>
                          ))}
                        </ul>
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
