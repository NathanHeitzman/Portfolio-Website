import styles from "../assets/styles/SkillCard.module.css";

interface SkillCardProps {
  name: string;
  src: string;
  description: string;
}

const SkillCard = ({ name, src, description }: SkillCardProps) => {
  return (
    <div className={styles.card}>
      <img src={src} alt={`${name} icon`} className={styles.icon} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default SkillCard;
