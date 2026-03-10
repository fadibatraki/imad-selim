"use client";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { Video } from "@/data/media";

interface VideoCardProps {
  video: Video;
  index?: number;
}

const VideoCard = ({ video, index = 0 }: VideoCardProps) => {
  const formatDate = (dateISO: string) => {
    const date = new Date(dateISO);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="overflow-hidden rounded-2xl border border-[#A855F7]/30 bg-gradient-to-b from-[#0B0B12]/90 to-[#0B0B12]/95 backdrop-blur-xl transition-all duration-300 hover:border-[#A855F7]/50">
        {/* Video Embed */}
        <div className="relative aspect-video overflow-hidden bg-black">
          <iframe
            src={video.youtubeUrl}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>

        {/* Video Info */}
        <div className="p-4">
          <div className="mb-2 flex items-center gap-2 text-xs text-white/50">
            <Calendar className="h-3.5 w-3.5 text-[#7C3AED]" />
            <span>{formatDate(video.dateISO)}</span>
          </div>
          <h3 className="font-semibold text-white transition-colors group-hover:text-[#A855F7]">
            {video.title}
          </h3>
        </div>

        {/* Border glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(124,58,237,0.4), transparent)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "200% 0%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
};

export default VideoCard;
