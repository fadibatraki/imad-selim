"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import { instagramReels } from "@/data/instagram-reels";
import InstagramReelCard from "./InstagramReelCard";

interface InstagramReelsProps {
  limit?: number;
  showViewAll?: boolean;
  pageTitle?: boolean;
}

const InstagramReels = ({
  limit,
  showViewAll = false,
  pageTitle = false,
}: InstagramReelsProps) => {
  const reels =
    typeof limit === "number" ? instagramReels.slice(0, limit) : instagramReels;

  const Heading = pageTitle ? "h1" : "h2";

  return (
    <section
      className={`relative overflow-hidden bg-[#07070B] pb-20 md:pb-[120px] ${pageTitle ? "pt-32" : "py-20 md:py-[120px]"}`}
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-[#7C3AED]/20 blur-[120px]" />
        <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-[#F43F5E]/15 blur-[120px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C3AED] via-[#F43F5E] to-[#F97316] shadow-[0_0_30px_rgba(244,63,94,0.3)]">
            <Instagram className="h-8 w-8 text-white" />
          </div>
          <Heading
            className={`mb-4 font-extrabold text-white ${pageTitle ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl lg:text-5xl"}`}
          >
            Reels on Instagram
          </Heading>
          <p className="text-lg text-white/60">
            Watch the latest reels and moments from Imad Selim
          </p>
        </motion.div>

        <div className="grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reels.map((reel, index) => (
            <InstagramReelCard key={reel.id} reel={reel} index={index} />
          ))}
        </div>

        {showViewAll && (
          <div className="mt-12 text-center">
            <Link
              href="/instagram"
              className="inline-flex items-center gap-2 rounded-xl border border-[#F43F5E]/50 bg-[#F43F5E]/10 px-8 py-4 font-semibold text-white transition-all hover:bg-[#F43F5E]/25"
            >
              View All Reels <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default InstagramReels;
