import { VideoType } from "@/types/Video";
import React from "react";

type Props = {
  type: VideoType;
  className?: string;
};

export default function VideoTypeLabel({ type, className }: Props) {
  switch (type) {
    case VideoType.Introduction:
      return <div className={`${className} text-green-500`}>Úvodní video</div>;
    case VideoType.Main:
      return <div className={`${className} text-sky-500`}>Hlavní série</div>;
    case VideoType.Extra:
      return <div className={`${className} text-orange-500`}>Teoretické video</div>;
  }
}
