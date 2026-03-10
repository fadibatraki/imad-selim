"use client";
import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";
import { Photo } from "@/data/media";

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="group relative"
        >
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#A855F7]/30 bg-gradient-to-b from-[#0B0B12]/90 to-[#0B0B12]/95 backdrop-blur-xl transition-all duration-300 hover:border-[#A855F7]/50">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[#7C3AED]/10" />
            </div>

            {/* Photo Placeholder */}
            <div className="relative h-full w-full bg-gradient-to-br from-[#7C3AED]/20 to-[#F43F5E]/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="h-32 w-32 rounded-full bg-[#7C3AED]/30 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="absolute">
                  <ImageIcon className="h-16 w-16 text-white/20" />
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute bottom-3 left-3 rounded-full border border-[#7C3AED]/30 bg-[#0B0B12]/80 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-xl">
                {photo.category}
              </div>
            </div>

            {/* Border glow animation */}
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

          {/* Alt text on hover */}
          <div className="mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-sm text-white/60">{photo.alt}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoGrid;
