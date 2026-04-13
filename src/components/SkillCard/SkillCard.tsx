import type { IconType } from "react-icons";
import styles from "./SkillCard.module.css";

interface SkillCardProps {
  name: string;
  icon: IconType;
  color: string;
  description: string;
}

const SkillCard = ({ name, icon: Icon, color, description }: SkillCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Icon size="100%" color={color} />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default SkillCard;
