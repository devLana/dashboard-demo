import type { StaticImageData } from "next/image";
import Avatar from "./Avatar";

type Props = {
  src?: StaticImageData | string;
  name: string;
};

const Profile = ({ src, name }: Props) => {
  return (
    <>
      <Avatar width={100} height={100} src={src} />
      <span>{name}</span>
    </>
  );
};

export default Profile;
