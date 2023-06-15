import { StaticImageData } from "next/image";

export enum VideoType {
  Introduction = "Introduction",
  Main = "Main",
  Extra = "Extra",
}

export type Video = {
  id: number;
  type: VideoType;
  title: string;
  href: string;
  released: string;
  content?: Array<string>;
  previous?: number;
  prerequisites?: Array<number>;
  thumbnail: StaticImageData;
};
