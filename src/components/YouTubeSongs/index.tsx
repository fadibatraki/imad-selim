"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Youtube } from "lucide-react";
import VideoCard from "@/components/media/VideoCard";
import { youtubeSongs } from "@/data/youtube-songs";
import { extractYouTubeId } from "@/lib/youtube";

interface YouTubeSongsProps {
  limit?: number;
  showViewAll?: boolean;
  pageTitle?: boolean;
}

const YouTubeSongs = ({
  limit,
  showViewAll = false,
  pageTitle = false,
}: YouTubeSongsProps) => {
  const songs =
    typeof limit === "number" ? youtubeSongs.slice(0, limit) : youtubeSongs;

  return (
    <section
      className={`relative overflow-hidden bg-[#07070B] pb-20 md:pb-[120px] ${pageTitle ? "pt-32" : "py-20 md:py-[120px]"}`}
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#7C3AED]/20 blur-[120px]" />
        <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-red-600/15 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <Youtube className="mx-auto mb-4 h-12 w-12 text-red-500" />
          {pageTitle ? (
            <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
              Songs on YouTube
            </h1>
          ) : (
            <h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl">
              Songs on YouTube
            </h2>
          )}
          <p className="text-lg text-white/60">
            Watch the latest songs and performances by Imad Selim
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {songs.map((song, index) => {
            const videoId = extractYouTubeId(song.youtubeUrl);
            return (
              <VideoCard
                key={song.id}
                index={index}
                video={{
                  ...song,
                  youtubeUrl: videoId
                    ? `https://www.youtube.com/embed/${videoId}`
                    : song.youtubeUrl,
                }}
              />
            );
          })}
        </div>

        {showViewAll && (
          <div className="mt-12 text-center">
            <Link
              href="/youtube"
              className="inline-flex items-center gap-2 rounded-xl border border-red-500/50 bg-red-500/10 px-8 py-4 font-semibold text-white transition-all hover:bg-red-500/25"
            >
              View All Songs <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default YouTubeSongs;
