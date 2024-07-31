import Profile from "../../Profile";
import styles from "./NewStaffCard.module.css";
import type { Staff } from "@/app/types";

const NewStaffCard = ({ data }: { data: Staff[] }) => (
  <div className={styles.wrapper}>
    {data.map(({ appointmentDate, image, name, position }) => (
      <div key={name} className={styles.card}>
        <div className={styles.profile}>
          <Profile name={name} src={image} />
        </div>
        <div className={styles.details}>
          <p>{position}</p>
          <time dateTime={appointmentDate}>
            {new Date(appointmentDate).toDateString()}
          </time>
        </div>
      </div>
    ))}
  </div>
);

export default NewStaffCard;
