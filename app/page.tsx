/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import VideosSection from "./VideosSection";

async function getStats(): Promise<{ views: number | null; likes: number | null; durationSeconds: number | null }> {
  try {
    const resPlaylist = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=50&playlistId=PLKkDvxLpWDX26YIMc-2sjlO4a5U8t9C3h&key=${process.env.YOUTUBE_SECRET}`);
    const ids = resPlaylist.data.items.map((item: any) => item.contentDetails.videoId);
    const resVideos = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails,statistics&id=${ids.join(",")}&key=${process.env.YOUTUBE_SECRET}`);
    const views = resVideos.data.items.map((item: any) => item.statistics.viewCount);
    const likes = resVideos.data.items.map((item: any) => item.statistics.likeCount);
    const duration = resVideos.data.items.map((item: any) => item.contentDetails.duration);
    return {
      views: views.reduce((a: number, b: string) => a + +b, 0),
      likes: likes.reduce((a: number, b: string) => a + +b, 0),
      durationSeconds: duration.reduce((a: number, b: string) => {
        const minutes = RegExp(/(\d+)M/).exec(b)?.[1] ?? 0;
        const seconds = RegExp(/(\d+)S/).exec(b)?.[1] ?? 0;
        return a + +minutes * 60 + +seconds;
      }, 0),
    };
  } catch (error) {
    console.log(error);
    return {
      views: null,
      likes: null,
      durationSeconds: null,
    };
  }
}

export const revalidate = 3600;

export default async function Home() {
  const { views, likes, durationSeconds } = await getStats();

  return (
    <main className="bg-gradient-to-br from-white via-gray-50 to-gray-50">
      <Header />
      <section className="px-12 lg:px-0 pt-12 sm:pt-16 pb-20 w-full max-w-screen-xl mx-auto flex flex-col items-center gap-5 sm:gap-4">
        <h1 className="bg-[url('/assets/gradient.jpg')] bg-bottom pb-2 bg-no-repeat bg-[length:150%_200%] text-transparent bg-clip-text contrast-125 text-center text-3xl md:text-4xl lg:text-5xl font-bold sm:font-extrabold">Vývoj Webových Aplikací</h1>
        <p className="sm:text-lg text-gray-600 max-w-screen-sm text-center">Série návodů ve které se naučíte vytvářet profesionální weby a webové aplikace za pomocí React frameworku Next.js a TailwindCSS</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="https://www.youtube.com/watch?v=uYpxsQ9LXtU&list=PLKkDvxLpWDX26YIMc-2sjlO4a5U8t9C3h" className="btn btn-primary">
            Sledovat na YouTube <FontAwesomeIcon icon={faYoutube} />
          </Link>
          <Link href="https://www.youtube.com/playlist?list=PLKkDvxLpWDX26YIMc-2sjlO4a5U8t9C3h" className="btn btn-outline">
            Přejít na playlist
          </Link>
        </div>
      </section>
      <VideosSection />
      <section className="p-12 pb-4 lg:px-0 w-full max-w-screen-lg mx-auto">
        <div className="bg-white p-8 md:py-4 rounded-3xl shadow-lg shadow-gray-700/10 flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex flex-wrap items-center gap-8 md:gap-16">
            <div className="flex flex-col">
              <div className="text-sm text-gray-500 mb-0.5">Sérii vidělo přes</div>
              <div className="text-gray-700 text-3xl font-bold">{views ?? "?"}</div>
              <div className="text-sm text-gray-800 font-medium -mt-0.5">diváků</div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm text-gray-500 mb-0.5">Videa nasbírala</div>
              <div className="text-gray-700 text-3xl font-bold">
                {likes ?? "?"}
                <span className="text-xl">x</span>
              </div>
              <div className="text-sm text-gray-800 font-medium -mt-0.5">&quot;to se mi líbí&quot;</div>
            </div>
            <div className="flex flex-col">
              <div className="text-sm text-gray-500 mb-0.5">Celou sérii tvoří</div>
              <div className="text-gray-700 text-3xl font-bold">{durationSeconds ? (durationSeconds / 60).toFixed(0) : "?"}</div>
              <div className="text-sm text-gray-800 font-medium -mt-0.5">minut obsahu</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-16">
            <div className="flex flex-col md:items-end gap-2 md:max-w-[230px]">
              <div className="text-sm text-gray-500 md:text-right">Pomohla série i tobě? Zvaž prosím finanční podporu mé tvorby</div>
              <a href="https://www.buymeacoffee.com/hynekfisera" target="_blank" rel="noreferrer noopener" className="h-8">
                <img className="h-full w-auto" src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hynekfisera&button_colour=f472b6&font_colour=f1f5f9&font_family=Inter&outline_colour=000000&coffee_colour=f1f5f9" alt="Buy Me a Coffee" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-xs text-gray-400 mx-4 my-3">Zdrojem je oficiální YouTube API. Data se aktualizují jednou za hodinu.</div>
      </section>
      <Footer />
    </main>
  );
}
