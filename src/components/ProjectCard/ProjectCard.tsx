import styles from "./ProjectCard.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

interface ProjectCardProps {
    projectTitle: string,
    projectDescription: string,
    projectImage: string,
    projectTechIcons: string[]
}

const ProjectCard = (props: ProjectCardProps) => {
    return(
        <>
            <div className={`${styles.textContainer} d-flex flex-column`}>
                <img className={`${styles.projectImage}`} src={props.projectImage}/>
                <h3 className="align-self-center mt-3">{props.projectTitle}</h3>
                <p className="align-self-center p-4">{props.projectDescription}</p>
                <div className="d-flex flex-row align-items-center">
                    <p className="px-4">Technologies Used:</p>
                    {props.projectTechIcons.map((icon, index) => (
                        <img key={index} className={`${styles.icon}`} src={icon} />
                    ))}
                </div>
            </div>
        </>
    )
}
export default ProjectCard;