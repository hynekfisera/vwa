"use client";
import React, { useState } from "react";
import { videos } from "@hynekfisera/arfi-common";
import Link from "next/link";
import Image from "next/image";
import VideoTypeLabel from "./VideoTypeLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";

export default function VideosSection() {
  const [sortByNew, setSortByNew] = useState<boolean>(true);

  if (sortByNew) {
    videos.sort((a, b) => b.id - a.id);
  } else {
    videos.sort((a, b) => a.id - b.id);
  }

  return (
    <section className="p-12 lg:px-0 w-full max-w-screen-lg mx-auto flex flex-col items-center">
      <h2 className="text-center font-semibold text-2xl text-gray-700">Seznam videí</h2>
      <button onClick={() => setSortByNew((s) => !s)} className="select-none mt-1 text-center text-xs font-medium text-gray-500 mb-12 hover:underline">
        {sortByNew ? "Seřazen od nejnovějších" : "Seřazen od začátku"} <FontAwesomeIcon icon={faRepeat} />
      </button>
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
                      <ul className="text-gray-600 text-sm list-disc list-inside sm:pr-4">
                        {video.content.map((content) => (
                          <li key={content} className="sm:truncate">
                            {content}
                          </li>
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
  );
}
