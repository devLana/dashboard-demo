import type { Staff } from "@/app/types";
import Avatar from "../../Avatar";
import styles from "./NewStaffTable.module.css";

const NewStaffTable = ({ data }: { data: Staff[] }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Name</th>
        <th>Date Of Appointment</th>
        <th>Position</th>
      </tr>
    </thead>
    <tbody>
      {data.map(({ appointmentDate, image, name, position }) => (
        <tr key={name}>
          <td>
            <Avatar src={image} /> {name}
          </td>
          <td>{new Date(appointmentDate).toDateString()}</td>
          <td>{position}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default NewStaffTable;
