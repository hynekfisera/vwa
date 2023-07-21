import { StaticImageData } from "next/image";
import { Video as _Video } from "@hynekfisera/arfi-common";

export type Video = _Video & {
  thumbnail: StaticImageData;
};
