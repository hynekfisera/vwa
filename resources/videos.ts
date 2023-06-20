import { Video, VideoType } from "@/types/Video";
import Thumbnail0 from "@/public/thumbnails/0.png";
import Thumbnail1 from "@/public/thumbnails/1.png";
import Thumbnail2 from "@/public/thumbnails/2.png";
import Thumbnail3 from "@/public/thumbnails/3.png";
import Thumbnail4 from "@/public/thumbnails/4.png";
import Thumbnail5 from "@/public/thumbnails/5.png";
import Thumbnail5_1 from "@/public/thumbnails/5.1.png";

export const videos: Array<Video> = [
  {
    id: 0,
    type: VideoType.Introduction,
    title: "#0 Úvod k sérii",
    href: "https://youtu.be/uYpxsQ9LXtU",
    released: "7.5.2022",
    content: ["Pro koho je série určena?", "Co se tu naučíte?"],
    thumbnail: Thumbnail0,
  },
  {
    id: 1,
    type: VideoType.Main,
    title: "#1 HTML",
    href: "https://youtu.be/dBQT3xS64CU",
    released: "5.6.2022",
    content: ["Jak funguje web?", "Části HTML dokumentu", "HTML syntax", "Nejpoužívanější HTML tagy"],
    previous: 0,
    thumbnail: Thumbnail1,
  },
  {
    id: 2,
    type: VideoType.Main,
    title: "#2 CSS",
    href: "https://youtu.be/3DIPAoqpUCs",
    released: "3.7.2022",
    content: ["CSS syntax", "Kde a jak se CSS používá", "CSS selektory", "Nejpoužívanější CSS styly"],
    previous: 1,
    prerequisites: [1],
    thumbnail: Thumbnail2,
  },
  {
    id: 3,
    type: VideoType.Main,
    title: "#3 TailwindCSS",
    href: "https://youtu.be/cTvKBiIruNI",
    released: "24.7.2022",
    content: ["Co je TailwindCSS?", "Konfigurace přes NPM", "Princip stylování", "Darkmode", "Responzivita"],
    previous: 2,
    prerequisites: [2],
    thumbnail: Thumbnail3,
  },
  {
    id: 4,
    type: VideoType.Main,
    title: "#4 JavaScript",
    href: "https://youtu.be/v9S0CJjqOuU",
    released: "30.10.2022",
    content: ["Co je JavaScript?", "Syntax JavaScriptu", "Výpis do konzole", "Využití na webu"],
    previous: 3,
    prerequisites: [1],
    thumbnail: Thumbnail4,
  },
  {
    id: 5,
    type: VideoType.Main,
    title: "#5 TypeScript",
    href: "https://youtu.be/w30tE2paIW4",
    released: "4.3.2023",
    content: ["Co je TypeScript?", "Instalace & kompilace do JS", "Syntax TypeScriptu", "Využití v projektu"],
    previous: 4,
    prerequisites: [4],
    thumbnail: Thumbnail5,
  },
  {
    id: 5.1,
    type: VideoType.Extra,
    title: "Domény, DNS a Cloudflare",
    href: "#",
    released: "",
    content: ["Co je doména?", "Co je DNS?", "Registrace domény", "Co je Cloudflare?", "Konfigurace NS a DNS", "DNS záznamy"],
    thumbnail: Thumbnail5_1,
  },
];
