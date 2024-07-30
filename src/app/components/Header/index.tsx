import { IoNotifications } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Avatar from "../Avatar";
import styles from "./Header.module.css";

type Props = {
  onClick: VoidFunction;
};

const Header = ({ onClick }: Props) => (
  <header className={styles.header}>
    <button className={styles.headerBtn} onClick={onClick}>
      <GiHamburgerMenu />
    </button>
    <div className={styles.headerItems}>
      <button className={styles.headerBell}>
        <IoNotifications />
      </button>
      <Avatar src="/avatar.png" />
    </div>
  </header>
);

export default Header;
