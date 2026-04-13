import ClassData from "../../data/classes.json";
import styles from "./Courses.module.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import CourseCard from "../../components/CourseCard/CourseCard";

interface ClassDataType {
    fullName: string;
    courseId: string;
    courseDescription:string;
    technologyUsed?:string;
    isCsciCourse?:boolean;
    projects:Array<string>;
    myDescription?:string;
}

const Courses = () => {
const typedClassData: ClassDataType[] = ClassData.courses
  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <div className="courses-container container d-flex flex-column justify-content-center">
            {
                typedClassData.map((data,index) => ( // map all classes in the JSON file
                  <CourseCard
                    key={index}
                    courseId={data.courseId}
                    courseName={data.fullName}
                    courseDescription={data.courseDescription}
                    personalDescription={data.myDescription}
                    projectList={data.projects}
                  />
                  // <div className={styles.courseContainer} key={index}>
                    //     <h1>{data.course_id}</h1>
                    //     <h1>{data.full_name}</h1>
                    //     <br/>
                    //     <p>{data.course_description}</p>
                    //     <p>{data.my_description}</p>
                    //     <br/>
                    //     <h2>Key Projects:</h2>
                    //     <ul>
                    //       {data.projects?.map((project) => (
                    //         <li>{project}</li>
                    //       ))}
                    //     </ul>
                    // </div>
                ))
            }
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Courses;
