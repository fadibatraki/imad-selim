"use client";

import { motion } from "framer-motion";
import { ExternalLink, Instagram } from "lucide-react";
import { InstagramReel } from "@/data/instagram-reels";

interface InstagramReelCardProps {
  reel: InstagramReel;
  index?: number;
}

const InstagramReelCard = ({ reel, index = 0 }: InstagramReelCardProps) => {
  const embedUrl = `${reel.url.replace(/\/$/, "")}/embed/captioned/`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group mx-auto w-full max-w-[390px]"
    >
      <div className="overflow-hidden rounded-2xl border border-[#A855F7]/30 bg-gradient-to-b from-[#0B0B12]/90 to-[#0B0B12]/95 backdrop-blur-xl transition-all duration-300 hover:border-[#F43F5E]/60 hover:shadow-[0_0_32px_rgba(244,63,94,0.12)]">
        <div className="relative h-[610px] overflow-hidden bg-white sm:h-[660px]">
          <iframe
            src={embedUrl}
            title={reel.title}
            loading="lazy"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="h-full w-full border-0"
          />
        </div>

        <div className="flex items-center justify-between gap-4 p-4">
          <div className="min-w-0">
            <div className="mb-1 flex items-center gap-2 text-xs text-white/50">
              <Instagram className="h-3.5 w-3.5 text-[#F43F5E]" />
              <span>Instagram Reel</span>
            </div>
            <h3 className="truncate font-semibold text-white transition-colors group-hover:text-[#F43F5E]">
              {reel.title}
            </h3>
          </div>

          <a
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${reel.title} on Instagram`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-[#F43F5E]/50 bg-[#F43F5E]/15 px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-[#F43F5E]/30"
          >
            <ExternalLink className="h-4 w-4" />
            <span className="hidden sm:inline">View Reel</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default InstagramReelCard;
