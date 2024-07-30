import type { StaticImageData } from "next/image";

export type Staff = {
  name: string;
  image: StaticImageData | string;
  appointmentDate: string;
  position: string;
};
