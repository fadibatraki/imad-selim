"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { TikTokVideo } from "@/data/tiktok-videos";
import TikTokIcon from "./TikTokIcon";

interface TikTokVideoCardProps {
  video: TikTokVideo;
  index?: number;
}

const TikTokVideoCard = ({ video, index = 0 }: TikTokVideoCardProps) => {
  const [showEmbed, setShowEmbed] = useState(false);
  const previewImage = `/images/profile/${(index % 3) + 4}.jpeg`;

  return (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group mx-auto w-full max-w-[390px]"
  >
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-[#0B0B12]/90 to-[#0B0B12]/95 backdrop-blur-xl transition-all duration-300 hover:border-[#25F4EE]/50 hover:shadow-[0_0_32px_rgba(37,244,238,0.12)]">
      <div className="relative h-[610px] overflow-hidden bg-black sm:h-[660px]">
        {showEmbed ? (
          <iframe
            src={`https://www.tiktok.com/player/v1/${video.videoId}?autoplay=0&loop=0`}
            title={video.title}
            allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setShowEmbed(true)}
            className="group/player relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden bg-black px-6 text-center font-semibold text-white"
            aria-label={`Load ${video.title}`}
          >
            <Image
              src={previewImage}
              alt={`${video.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 390px"
              className="object-cover transition duration-300 group-hover/player:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/25" />
            <span className="relative flex flex-col items-center gap-3 rounded-2xl bg-black/50 px-5 py-4 backdrop-blur-sm">
              <TikTokIcon className="h-10 w-10" />
              <span>▶ Play TikTok video</span>
            </span>
          </button>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 p-4">
        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2 text-xs text-white/50">
            <TikTokIcon className="h-3.5 w-3.5 text-[#25F4EE]" />
            <span>TikTok Video</span>
          </div>
          <h3 className="truncate font-semibold text-white transition-colors group-hover:text-[#25F4EE]">
            {video.title}
          </h3>
        </div>

        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${video.title} on TikTok`}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#25F4EE]/50 bg-[#25F4EE]/10 px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-[#FE2C55]/30"
        >
          <ExternalLink className="h-4 w-4" />
          <span className="hidden sm:inline">View Video</span>
        </a>
      </div>
    </div>
  </motion.article>
  );
};

export default TikTokVideoCard;
