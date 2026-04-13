import styles from "./CourseCard.module.css"
import "bootstrap/dist/css/bootstrap.min.css"

interface CourseCardTypes {
    courseId: string,
    courseName: string,
    courseDescription: string,
    personalDescription?: string,
    projectList: string[]
}

const CourseCard = (props: CourseCardTypes) => {
    return(
        <>
            <div className={styles.courseContainer}>
                <h1>{props.courseId}</h1>
                <h1>{props.courseName}</h1>
                <br/>
                <p>{props.courseDescription}</p>
                <p>{props.personalDescription}</p>
                <br/>
                <h2>Key Projects:</h2>
                <ul>
                    {props.projectList.map((project) => (
                        <li>{project}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default CourseCard;