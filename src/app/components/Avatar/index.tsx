import Image, { type StaticImageData } from "next/image";
import styles from "./Avatar.module.css";

type Props = {
  width?: number;
  height?: number;
  src?: StaticImageData | string;
};

const Avatar = ({ width = 40, height = 40, src = "/avatar.png" }: Props) => (
  <Image
    className={styles.headerAvatar}
    src={src}
    width={width}
    height={height}
    alt=""
  />
);

export default Avatar;
