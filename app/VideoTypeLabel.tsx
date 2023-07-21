import { VIDEO_TYPE, VideoType } from "@hynekfisera/arfi-common";
import React from "react";

type Props = {
  type: VideoType;
  className?: string;
};

export default function VIDEO_TYPELabel({ type, className }: Props) {
  switch (type) {
    case VIDEO_TYPE.Introduction:
      return <div className={`${className} text-green-500`}>Úvodní video</div>;
    case VIDEO_TYPE.Main:
      return <div className={`${className} text-sky-500`}>Hlavní série</div>;
    case VIDEO_TYPE.Extra:
      return <div className={`${className} text-orange-500`}>Teorie</div>;
  }
}
