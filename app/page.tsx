import { videos } from "@/resources/videos";
import Image from "next/image";
import VideoTypeLabel from "./VideoTypeLabel";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

videos.sort((a, b) => b.id - a.id);

export default function Home() {
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
      <section className="p-12 lg:px-0 w-full max-w-screen-lg mx-auto">
        <h2 className="text-center font-semibold text-2xl text-gray-700">Seznam videí</h2>
        <div className="text-center text-xs text-gray-500 mb-12">Seřazen od nejnovějších</div>
        <div className="flex flex-col gap-16">
          {videos.map((video) => (
            <div key={video.id} className="grid sm:grid-cols-2 gap-8 place-items-center">
              <div className="max-w-[90%] sm:max-w-[70%]">
                <Image src={video.thumbnail} alt={video.title} className="rounded-lg shadow-xl" />
              </div>
              <div className="w-[75%] sm:w-full">
                <VideoTypeLabel type={video.type} className="uppercase text-sm" />
                <h3 className="text-2xl font-medium text-gray-900">{video.title}</h3>
                <div className="grid sm:grid-cols-2">
                  <div>
                    {video.content && (
                      <div className="mt-3">
                        <h4 className="text-xs font-medium mb-1 uppercase text-gray-700">Obsah</h4>
                        <ul className="text-gray-600 text-sm list-disc list-inside">
                          {video.content.map((content) => (
                            <li key={content}>{content}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div>
                    {video.previous !== undefined && (
                      <div className="mt-3">
                        <h4 className="text-xs font-medium mb-1 uppercase text-gray-700">
                          Navazuje na <strong className="font-semibold"></strong>
                        </h4>
                        <ul className="text-gray-600 text-sm list-disc list-inside">
                          <li>
                            <Link href={videos.find((v) => v.id === video.previous)!.href} className="hover:underline">
                              {videos.find((v) => v.id === video.previous)!.title}
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                    {video.prerequisites && (
                      <div className="mt-3">
                        <h4 className="text-xs font-medium mb-1 uppercase text-gray-700">Předpoklady</h4>
                        <ul className="text-gray-600 text-sm list-disc list-inside">
                          {video.prerequisites.map((prerequisiteId) => {
                            const prerequisite = videos.find((v) => v.id === prerequisiteId);
                            return (
                              prerequisite && (
                                <li key={prerequisiteId}>
                                  <Link href={prerequisite.href} className="hover:underline">
                                    {prerequisite.title}
                                  </Link>
                                </li>
                              )
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <Link href={video.href} className="btn btn-outline">
                    Přejít na video
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
