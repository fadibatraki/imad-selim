"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { TikTokVideo } from "@/data/tiktok-videos";
import TikTokIcon from "./TikTokIcon";

interface TikTokVideoCardProps {
  video: TikTokVideo;
  index?: number;
}

const TikTokVideoCard = ({ video, index = 0 }: TikTokVideoCardProps) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group mx-auto w-full max-w-[390px]"
  >
    <div className="overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-b from-[#0B0B12]/90 to-[#0B0B12]/95 backdrop-blur-xl transition-all duration-300 hover:border-[#25F4EE]/50 hover:shadow-[0_0_32px_rgba(37,244,238,0.12)]">
      <div className="relative h-[610px] overflow-hidden bg-black sm:h-[660px]">
        <iframe
          src={`https://www.tiktok.com/player/v1/${video.videoId}?autoplay=0&loop=0`}
          title={video.title}
          loading="lazy"
          allow="fullscreen; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="h-full w-full border-0"
        />
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

export default TikTokVideoCard;
