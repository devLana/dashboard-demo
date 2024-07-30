import type { IconType } from "react-icons";
import styles from "./Stats.module.css";

type Props = { label: string; stat: number; Icon: IconType };

const StatsCard = ({ label, stat, Icon }: Props) => (
  <div className={styles.card}>
    <div className={styles.stat}>
      <p>{label}</p>
      <p>{stat}</p>
    </div>
    <div className={styles.icon}>
      <Icon />
    </div>
  </div>
);

export default StatsCard;
