import NewStaffCardDisplay from "./NewStaffCardDisplay";
import NewStaffTable from "./NewStaffTable";
import img from "./avatar-2.jpg";
import type { Staff } from "@/app/types";
import styles from "./NewStaff.module.css";

const data: Staff[] = [
  {
    name: "John Doe",
    image: "/avatar.png",
    position: "Doctor",
    appointmentDate: "2021-10-11",
  },
  {
    name: "Mary Jane",
    image: img,
    position: "Nurse",
    appointmentDate: "2022-05-15",
  },
  {
    name: "Jane Doe",
    image: img,
    position: "Surgeon",
    appointmentDate: "2022-11-08",
  },
  {
    name: "James Philips",
    image: "/avatar.png",
    position: "Consultant",
    appointmentDate: "2022-12-28",
  },
  {
    name: "Mary Anne",
    image: img,
    position: "Resident",
    appointmentDate: "2023-08-01",
  },
];

const NewStaff = () => (
  <div className={styles.staff}>
    <h3>New Staff Members</h3>
    <NewStaffCardDisplay data={data} />
    <NewStaffTable data={data} />
  </div>
);

export default NewStaff;
