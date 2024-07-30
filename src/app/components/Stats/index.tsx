import { FaUserDoctor } from "react-icons/fa6";
import { FaHospitalAlt } from "react-icons/fa";
import { FaUserNurse } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import StatsCard from "./StatsCard";
import styles from "./Stats.module.css";

const data = [
  { label: "Hospitals", stat: 5, Icon: FaHospitalAlt },
  { label: "Doctors", stat: 40, Icon: FaUserDoctor },
  { label: "Nurses", stat: 105, Icon: FaUserNurse },
  { label: "Patients", stat: 800, Icon: FaPeopleGroup },
] as const;

const Stats = () => (
  <section className={styles.stats}>
    <h3>Stats</h3>
    <div className={styles.statsContainer}>
      {data.map(({ label, stat, Icon }) => (
        <StatsCard key={label} label={label} stat={stat} Icon={Icon} />
      ))}
    </div>
  </section>
);

export default Stats;
