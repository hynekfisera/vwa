import { videos as _videos } from "@hynekfisera/arfi-common";
import Thumbnail0 from "@/public/thumbnails/0.png";
import Thumbnail1 from "@/public/thumbnails/1.png";
import Thumbnail2 from "@/public/thumbnails/2.png";
import Thumbnail3 from "@/public/thumbnails/3.png";
import Thumbnail4 from "@/public/thumbnails/4.png";
import Thumbnail5 from "@/public/thumbnails/5.png";
import Thumbnail5_1 from "@/public/thumbnails/5.1.png";
import Thumbnail5_2 from "@/public/thumbnails/5.2.png";

const thumbnails = [Thumbnail0, Thumbnail1, Thumbnail2, Thumbnail3, Thumbnail4, Thumbnail5, Thumbnail5_1, Thumbnail5_2];

export const videos = _videos.map((video, index) => ({ ...video, thumbnail: thumbnails[index] }));
