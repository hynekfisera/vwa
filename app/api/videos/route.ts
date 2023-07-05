import { NextResponse } from "next/server";
import { videos } from "@/resources/videos";

export async function GET() {
  const res = videos.map((video) => ({ ...video, thumbnail: `https://www.vwa.cz/thumbnails/${video.id}.png` }));

  return NextResponse.json(res);
}
