import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiSidebar } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Profile from "../Profile";
import styles from "./Sidebar.module.css";

type Props = {
  sidebarIsOpen: boolean;
  onClick: VoidFunction;
};

const navItems = [
  { label: "Home", Icon: IoHomeOutline },
  { label: "Dashboard", Icon: MdOutlineSpaceDashboard },
  { label: "Sidebar 1", Icon: FiSidebar },
  { label: "Sidebar 2", Icon: FiSidebar },
  { label: "Sidebar 3", Icon: FiSidebar },
  { label: "Sidebar 4", Icon: FiSidebar },
  { label: "Sidebar 5", Icon: FiSidebar },
  { label: "Sidebar 6", Icon: FiSidebar },
  { label: "Settings", Icon: LuSettings },
  { label: "Logout", Icon: RiLogoutBoxRLine },
] as const;

const Sidebar = ({ onClick, sidebarIsOpen }: Props) => (
  <div
    className={`${styles.sidebar} ${
      sidebarIsOpen ? styles["sidebar-open"] : ""
    }`}
  >
    <div
      className={`${styles.backdrop} ${
        sidebarIsOpen ? styles["backdrop-open"] : ""
      }`}
      onClick={onClick}
    />
    <nav className={`${styles.nav} ${sidebarIsOpen ? styles["nav-open"] : ""}`}>
      <button className={styles.btn} onClick={onClick}>
        <IoClose />
      </button>
      <div className={styles.avatar}>
        <Profile name="John Doe" />
      </div>
      <ol className={styles.navMenu}>
        {navItems.map(({ Icon, label }) => (
          <li
            aria-current={label === "Dashboard" ? "page" : undefined}
            key={label}
            className={styles.navMenuItem}
            onClick={onClick}
          >
            <Icon /> <span>{label}</span>
          </li>
        ))}
      </ol>
    </nav>
  </div>
);

export default Sidebar;
