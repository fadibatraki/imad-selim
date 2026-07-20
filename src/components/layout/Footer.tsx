"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Youtube,
  Music2,
  Facebook,
  ExternalLink,
  Heart,
  MessageCircle,
  Play,
  ArrowRight,
  Quote,
} from "lucide-react";
import { photos, videos } from "@/data/media";
import { stories } from "@/data/stories";
import { getYouTubeThumbnail, formatVideoDate } from "@/lib/youtube";
import { siteFeatures } from "@/config/features";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Get photos for horizontal scroll (first 12)
  const galleryPhotos = photos.slice(0, 12);

  // Get featured videos (first 2)
  const featuredVideo = videos[0];
  const secondaryVideo = videos[1];

  // Get latest 3 stories
  const latestStories = stories.slice(0, 3);

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/imadselim",
      handle: "@imadselim",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@imadselim",
      handle: "@imadselim",
    },
    {
      name: "TikTok",
      icon: Music2,
      url: "https://tiktok.com/@imadselim",
      handle: "@imadselim",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/imadselim",
      handle: "Imad Selim",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#07070B]">
      {/* Top border glow - purple to pink */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#F43F5E] opacity-40" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#F43F5E] opacity-30 blur-md" />

      {/* Subtle stage glow background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="bg-gradient-radial absolute top-20 left-1/4 h-[500px] w-[500px] from-[#7C3AED]/15 via-[#7C3AED]/5 to-transparent blur-3xl" />
        <div className="bg-gradient-radial absolute top-20 right-1/4 h-[500px] w-[500px] from-[#F43F5E]/10 via-[#F43F5E]/5 to-transparent blur-3xl" />
      </div>

      {/* ROW 1: Title + Tagline */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-4 sm:px-6 sm:pt-12 sm:pb-6 md:px-8 md:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="mb-2 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#F43F5E] bg-clip-text text-transparent">
              Stay Connected
            </span>
          </h2>
          <p className="text-xs text-white/60 sm:text-sm md:text-base lg:text-lg">
            Your gateway to stage moments, music, and culture
          </p>
        </motion.div>
      </div>

      {/* ROW 2: Main Content - 3 Columns */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 sm:px-6 md:px-8 md:py-8">
        <div className="grid items-stretch gap-5 md:gap-6 lg:grid-cols-3">
          {/* COLUMN A: Stage Moments photo grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex w-full"
          >
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#A855F7]/20 bg-gradient-to-b from-[#10101a]/90 to-[#0B0B12]/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl md:p-5 lg:p-6">
              <h3 className="mb-2 text-sm font-bold sm:mb-3 sm:text-base md:text-lg">
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                  Stage Moments
                </span>
              </h3>

              {/* Gallery grid fills the available column height */}
              <div className="relative flex min-h-0 flex-1">
                <div className="grid w-full grid-cols-2 gap-2.5 sm:gap-3 lg:grid-rows-3">
                  {galleryPhotos.slice(0, 6).map((photo) => (
                    <Link
                      key={photo.id}
                      href="/media"
                      className="group relative aspect-[4/3] min-h-0 overflow-hidden rounded-xl border border-[#A855F7]/30 transition-all hover:-translate-y-0.5 hover:border-[#F43F5E] hover:shadow-[0_0_20px_rgba(244,63,94,0.3)] lg:aspect-auto"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.category}
                        fill
                        sizes="(min-width: 1024px) 16vw, 50vw"
                        className="object-cover object-[center_18%] transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#07070B]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/media"
                className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs text-[#A855F7] transition-colors hover:text-[#F43F5E] sm:gap-2 sm:pt-3"
              >
                <span>View Gallery</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>

              {/* Stories Block */}
              {siteFeatures.stories && (
                <div className="relative mt-3 overflow-hidden rounded-lg border border-[#A855F7]/20 bg-[#0B0B12]/40 p-2 sm:mt-4 sm:rounded-xl sm:p-2.5 md:mt-5 md:p-3 lg:mt-6">
                  {/* Header - Sticky */}
                  <div className="sticky top-0 z-10 mb-1.5 flex items-center gap-1.5 bg-[#0B0B12]/40 pb-1.5 backdrop-blur-sm sm:mb-2 sm:gap-2 sm:pb-2">
                    <Quote className="h-3 w-3 text-[#A855F7] sm:h-3.5 sm:w-3.5" />
                    <h4 className="text-[10px] font-bold sm:text-xs">
                      <span className="bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] bg-clip-text text-transparent">
                        From the Stories
                      </span>
                    </h4>
                  </div>

                  {/* Scrollable Stories List with Fade Mask */}
                  <div className="relative">
                    {/* Top fade */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-4 bg-gradient-to-b from-[#0B0B12]/40 to-transparent" />

                    {/* Scrollable container */}
                    <div className="stories-scroll max-h-[180px] snap-y snap-mandatory space-y-2 overflow-y-auto scroll-smooth pr-1 md:max-h-[200px]">
                      {latestStories.map((story) => (
                        <Link
                          key={story.id}
                          href={`/stories/${story.slug}`}
                          className="group block snap-start rounded-lg border border-[#A855F7]/10 bg-[#0B0B12]/60 p-2 transition-all hover:border-[#A855F7]/30 hover:bg-[#0B0B12]/80"
                        >
                          <p className="mb-0.5 line-clamp-1 text-xs font-semibold text-white transition-colors group-hover:text-[#F43F5E]">
                            {story.title}
                          </p>
                          <p className="mb-1 line-clamp-1 text-[10px] leading-tight text-white/60">
                            {story.excerpt}
                          </p>
                          <span className="inline-flex items-center gap-1 text-[10px] text-[#A855F7] transition-colors group-hover:text-[#F43F5E]">
                            <span>Read</span>
                            <ArrowRight className="h-2.5 w-2.5" />
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Bottom fade */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-4 bg-gradient-to-t from-[#0B0B12]/40 to-transparent" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* COLUMN B: Latest Videos - Imad Selim */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex w-full"
          >
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#A855F7]/20 bg-gradient-to-b from-[#10101a]/90 to-[#0B0B12]/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl md:p-5 lg:p-6">
              <h3 className="mb-2 text-sm font-bold sm:mb-2.5 sm:text-base md:mb-3 md:text-lg">
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                  Latest Videos
                </span>
              </h3>

              <div className="flex-1 space-y-2 sm:space-y-2.5 md:space-y-3">
                {/* Featured video */}
                <a
                  href="https://www.youtube.com/watch?v=EXxIXEIj2Lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-lg border border-[#A855F7]/30 transition-all hover:border-[#F43F5E] hover:shadow-[0_0_25px_rgba(244,63,94,0.3)] sm:rounded-xl"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-[#0B0B12]">
                    <img
                      src="https://img.youtube.com/vi/EXxIXEIj2Lg/maxresdefault.jpg"
                      alt="Imad Selim Music"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#07070B]/80 via-[#07070B]/40 to-transparent">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F43F5E] shadow-lg transition-transform group-hover:scale-110 sm:h-14 sm:w-14 md:h-16 md:w-16">
                        <Play className="h-6 w-6 fill-white text-white sm:h-7 sm:w-7 md:h-8 md:w-8" />
                      </div>
                    </div>
                  </div>

                  <div className="p-2 sm:p-2.5 md:p-3">
                    <p className="mb-0.5 line-clamp-2 text-xs font-semibold text-white group-hover:text-[#F43F5E] sm:mb-1 sm:text-sm">
                      Imad Selim – Official Music Video
                    </p>
                    <p className="text-[10px] text-white/50 sm:text-xs">
                      YouTube
                    </p>
                  </div>
                </a>

                {/* Secondary video */}
                <a
                  href="https://www.youtube.com/watch?v=Oueo68_lxjI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-2 overflow-hidden rounded-lg border border-[#A855F7]/20 p-1.5 transition-all hover:border-[#F43F5E] hover:bg-[#F43F5E]/5 sm:gap-2.5 sm:rounded-xl sm:p-2 md:gap-3"
                >
                  <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-[#0B0B12]">
                    <img
                      src="https://img.youtube.com/vi/Oueo68_lxjI/mqdefault.jpg"
                      alt="Imad Selim Video"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-[#07070B]/40">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F43F5E] sm:h-8 sm:w-8">
                        <Play className="h-3.5 w-3.5 fill-white text-white sm:h-4 sm:w-4" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 py-1">
                    <p className="mb-0.5 line-clamp-2 text-xs font-semibold text-white group-hover:text-[#F43F5E] sm:mb-1">
                      Imad Selim – Music Video
                    </p>
                    <p className="text-[10px] text-white/50 sm:text-xs">
                      YouTube
                    </p>
                  </div>
                </a>

                {/* Third video */}
                <a
                  href="https://www.youtube.com/watch?v=CIJ7ekVD6xY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-2 overflow-hidden rounded-lg border border-[#A855F7]/20 p-1.5 transition-all hover:border-[#F43F5E] hover:bg-[#F43F5E]/5 sm:gap-2.5 sm:rounded-xl sm:p-2 md:gap-3"
                >
                  <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-[#0B0B12]">
                    <img
                      src="https://img.youtube.com/vi/CIJ7ekVD6xY/mqdefault.jpg"
                      alt="Imad Selim Music"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-[#07070B]/40">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F43F5E] sm:h-8 sm:w-8">
                        <Play className="h-3.5 w-3.5 fill-white text-white sm:h-4 sm:w-4" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 py-1">
                    <p className="mb-0.5 line-clamp-2 text-xs font-semibold text-white group-hover:text-[#F43F5E] sm:mb-1">
                      Imad Selim – Music Release
                    </p>
                    <p className="text-[10px] text-white/50 sm:text-xs">
                      YouTube
                    </p>
                  </div>
                </a>
              </div>

              {/* YouTube Channel */}
              <a
                href="https://www.youtube.com/@imad_selim"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-2 text-xs text-[#A855F7] transition-colors hover:text-[#F43F5E] sm:gap-2 sm:pt-3"
              >
                <span>More on YouTube</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </a>
            </div>
          </motion.div>

          {/* COLUMN C: Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex w-full"
          >
            <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#A855F7]/20 bg-gradient-to-b from-[#10101a]/90 to-[#0B0B12]/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.2)] backdrop-blur-xl md:p-5 lg:p-6">
              <h3 className="mb-2 text-sm font-bold sm:mb-3 sm:text-base md:text-lg">
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                  Contact & Social
                </span>
              </h3>

              {/* CTA Buttons */}
              <div className="mb-3 space-y-2 sm:mb-4 sm:space-y-2.5 md:mb-5">
                <a
                  href="https://wa.me/9647501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-lg border border-[#7C3AED]/50 bg-gradient-to-r from-[#7C3AED]/20 to-[#A855F7]/20 px-3 py-2 text-xs font-semibold text-white transition-all hover:border-[#F43F5E] hover:bg-gradient-to-r hover:from-[#F43F5E]/30 hover:to-[#7C3AED]/30 hover:shadow-[0_0_25px_rgba(244,63,94,0.3)] sm:gap-2.5 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm md:gap-3 md:px-5 md:text-base"
                >
                  <MessageCircle className="h-4 w-4 text-[#F59E0B] sm:h-5 sm:w-5" />
                  <span className="flex-1">WhatsApp Booking</span>
                  <ExternalLink className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100 sm:h-3.5 sm:w-3.5" />
                </a>

                <a
                  href="tel:+9647501234567"
                  className="group flex items-center gap-2 rounded-lg border border-[#A855F7]/30 bg-[#0B0B12]/40 px-3 py-2 font-semibold text-white transition-all hover:border-[#F43F5E] hover:bg-[#F43F5E]/10 sm:gap-2.5 sm:rounded-xl sm:px-4 sm:py-2.5 md:gap-3 md:px-5"
                >
                  <Phone className="h-4 w-4 text-[#A855F7] transition-colors group-hover:text-[#F43F5E] sm:h-5 sm:w-5" />
                  <span className="flex-1 text-xs sm:text-sm">Call Now</span>
                </a>

                <a
                  href="mailto:booking@imadselim.com"
                  className="group flex items-center gap-2 rounded-lg border border-[#A855F7]/30 bg-[#0B0B12]/40 px-3 py-2 font-semibold text-white transition-all hover:border-[#F43F5E] hover:bg-[#F43F5E]/10 sm:gap-2.5 sm:rounded-xl sm:px-4 sm:py-2.5 md:gap-3 md:px-5"
                >
                  <Mail className="h-4 w-4 text-[#A855F7] transition-colors group-hover:text-[#F43F5E] sm:h-5 sm:w-5" />
                  <span className="flex-1 text-xs sm:text-sm">Email</span>
                </a>
              </div>


              {/* Social Icons */}
              <div className="mt-auto">
                <p className="mb-2 text-[10px] font-bold tracking-wider text-white/50 uppercase sm:mb-3 sm:text-xs">
                  Follow
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.handle}
                      className="group flex h-10 w-10 items-center justify-center rounded-lg border border-[#A855F7]/30 bg-gradient-to-b from-[#0B0B12]/90 to-[#0B0B12]/70 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[#F43F5E] hover:bg-gradient-to-b hover:from-[#F43F5E]/20 hover:to-[#7C3AED]/20 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] sm:h-11 sm:w-11 sm:rounded-xl md:h-12 md:w-12"
                    >
                      <social.icon className="h-5 w-5 text-[#A855F7] transition-colors group-hover:text-[#F43F5E] sm:h-5.5 sm:w-5.5 md:h-6 md:w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-5 sm:px-6 md:px-8 md:pb-7">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-[#A855F7]/10 pt-3 sm:pt-4 md:pt-5"
        >
          <div className="flex flex-col items-center justify-between gap-2 text-center sm:gap-3 md:flex-row md:text-left">
            <p className="text-[10px] text-white/50 sm:text-xs md:text-sm">
              © {currentYear} Imad Selim. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5 text-[10px] text-white/50 sm:gap-2 sm:text-xs md:text-sm">
              Designed and Developed by -
              <a
                href="https://wa.me/963952325706"
                rel="nofollow noopener"
                target="_blank"
                className="text-gray-1 inline-flex items-center gap-2 hover:underline"
              >
                Fadi Batraki
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M12 2a10 10 0 0 0-8.66 15l-1.1 4.02a1 1 0 0 0 1.22 1.22L7.48 21A10 10 0 1 0 12 2Zm5.07 14.38c-.21.6-1.23 1.14-1.7 1.21-.44.06-1 .09-1.61-.11-.37-.12-.84-.27-1.45-.53-2.55-1.1-4.2-3.67-4.33-3.84-.12-.17-1.03-1.38-1.03-2.63 0-1.24.65-1.85.88-2.1.23-.24.5-.3.67-.3h.48c.15 0 .36-.06.56.42.21.5.72 1.72.78 1.84.06.12.1.27.02.44-.08.18-.12.3-.24.46-.12.15-.26.34-.37.45-.12.12-.25.25-.11.49.13.24.6 1 1.3 1.62.89.8 1.64 1.05 1.88 1.17.24.12.38.1.52-.06.13-.15.58-.67.73-.9.15-.23.31-.19.52-.11.21.07 1.35.64 1.58.76.23.12.38.18.44.29.06.12.06.69-.15 1.29Z" />
                </svg>
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Gallery & Stories Styles */}
      <style jsx>{`
        .scroll-gallery {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .scroll-gallery::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }

        .stories-scroll {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }

        .stories-scroll::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </footer>
  );
};

export default Footer;
