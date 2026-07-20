"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { tiktokVideos } from "@/data/tiktok-videos";
import TikTokIcon from "./TikTokIcon";
import TikTokVideoCard from "./TikTokVideoCard";

interface TikTokVideosProps {
  limit?: number;
  showViewAll?: boolean;
  pageTitle?: boolean;
}

const TikTokVideos = ({
  limit,
  showViewAll = false,
  pageTitle = false,
}: TikTokVideosProps) => {
  const videos =
    typeof limit === "number" ? tiktokVideos.slice(0, limit) : tiktokVideos;
  const Heading = pageTitle ? "h1" : "h2";

  return (
    <section
      className={`relative overflow-hidden bg-[#07070B] pb-20 md:pb-[120px] ${pageTitle ? "pt-32" : "py-20 md:py-[120px]"}`}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#25F4EE]/10 blur-[120px]" />
        <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-[#FE2C55]/15 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-black shadow-[-5px_0_0_#25F4EE,5px_0_0_#FE2C55]">
            <TikTokIcon className="h-8 w-8 text-white" />
          </div>
          <Heading
            className={`mb-4 font-extrabold text-white ${pageTitle ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl lg:text-5xl"}`}
          >
            Videos on TikTok
          </Heading>
          <p className="text-lg text-white/60">
            Watch the latest videos and moments from Imad Selim
          </p>
        </motion.div>

        <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <TikTokVideoCard key={video.id} video={video} index={index} />
          ))}
        </div>

        {showViewAll && (
          <div className="mt-12 text-center">
            <Link
              href="/tiktok"
              className="inline-flex items-center gap-2 rounded-xl border border-[#25F4EE]/50 bg-[#25F4EE]/10 px-8 py-4 font-semibold text-white transition-all hover:bg-[#FE2C55]/25"
            >
              View All Videos <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default TikTokVideos;
