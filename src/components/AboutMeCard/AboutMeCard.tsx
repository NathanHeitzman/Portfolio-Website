import styles from "./AboutMeCard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

interface AboutMeCardProps {
    image: string;
    imageAlt: string;
    title: string;
    description: string;
}

const AboutMeCard = (props: AboutMeCardProps) => {
    return (
        <div className={`${styles.card} d-flex flex-column`}>
            <img className={styles.cardImage} src={props.image} alt={props.imageAlt} />
            <h3 className="align-self-center mt-3">{props.title}</h3>
            <p className="align-self-center p-4">{props.description}</p>
        </div>
    );
};

export default AboutMeCard;
