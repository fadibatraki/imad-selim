"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
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
  ChevronLeft,
  ChevronRight,
  Quote
} from "lucide-react";
import { photos, videos } from "@/data/media";
import { stories } from "@/data/stories";
import { getYouTubeThumbnail, formatVideoDate } from "@/lib/youtube";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const galleryRef = useRef<HTMLDivElement>(null);

  // Get photos for horizontal scroll (first 12)
  const galleryPhotos = photos.slice(0, 12);

  // Get featured videos (first 2)
  const featuredVideo = videos[0];
  const secondaryVideo = videos[1];

  // Get latest 3 stories
  const latestStories = stories.slice(0, 3);

  // Scroll gallery left/right
  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = 180; // width of one item + gap
      galleryRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/imadselim",
      handle: "@imadselim"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@imadselim",
      handle: "@imadselim"
    },
    {
      name: "TikTok",
      icon: Music2,
      url: "https://tiktok.com/@imadselim",
      handle: "@imadselim"
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/imadselim",
      handle: "Imad Selim"
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#07070B]">
      {/* Top border glow - purple to pink */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#F43F5E] opacity-40" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#F43F5E] opacity-30 blur-md" />

      {/* Subtle stage glow background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute left-1/4 top-20 h-[500px] w-[500px] bg-gradient-radial from-[#7C3AED]/15 via-[#7C3AED]/5 to-transparent blur-3xl" />
        <div className="absolute right-1/4 top-20 h-[500px] w-[500px] bg-gradient-radial from-[#F43F5E]/10 via-[#F43F5E]/5 to-transparent blur-3xl" />
      </div>

      {/* ROW 1: Title + Tagline */}
      <div className="container relative z-10 mx-auto px-4 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="mb-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#F43F5E] bg-clip-text text-transparent">
              Stay Connected
            </span>
          </h2>
          <p className="text-base text-white/60 md:text-lg">
            Your gateway to stage moments, music, and culture
          </p>
        </motion.div>
      </div>

      {/* ROW 2: Main Content - 3 Columns */}
      <div className="container relative z-10 mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">

          {/* COLUMN A: Stage Moments - Auto-scrolling photos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 flex"
          >
            <div className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-[#A855F7]/20 bg-[#0B0B12]/60 p-6 backdrop-blur-xl">    <h3 className="mb-4 text-lg font-bold">
              <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                Stage Moments
              </span>
            </h3>

              {/* Horizontal Scroll Gallery */}
              <div className="relative group/gallery">
                {/* Scroll buttons - Desktop only */}
                <button
                  onClick={() => scrollGallery('left')}
                  className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover/gallery:opacity-100 lg:block"
                  aria-label="Scroll left"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#A855F7]/50 bg-[#0B0B12]/90 backdrop-blur-xl transition-all hover:border-[#F43F5E] hover:bg-[#F43F5E]/20">
                    <ChevronLeft className="h-5 w-5 text-[#A855F7]" />
                  </div>
                </button>
                <button
                  onClick={() => scrollGallery('right')}
                  className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 opacity-0 transition-opacity group-hover/gallery:opacity-100 lg:block"
                  aria-label="Scroll right"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#A855F7]/50 bg-[#0B0B12]/90 backdrop-blur-xl transition-all hover:border-[#F43F5E] hover:bg-[#F43F5E]/20">
                    <ChevronRight className="h-5 w-5 text-[#A855F7]" />
                  </div>
                </button>

                {/* Scrollable container */}
                <div
                  ref={galleryRef}
                  className="scroll-gallery flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2"
                >
                  {galleryPhotos.map((photo) => (
                    <Link
                      key={photo.id}
                      href="/media"
                      className="group relative h-32 w-44 flex-shrink-0 snap-start overflow-hidden rounded-lg border border-[#A855F7]/30 transition-all hover:border-[#F43F5E] hover:shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.category}
                        fill
                        className="object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-110" />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#07070B]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/media"
                className="mt-auto pt-4 inline-flex  items-center gap-2 text-sm text-[#A855F7] transition-colors hover:text-[#F43F5E]"
              >
                <span>View Gallery</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Stories Block */}
              <div className="relative mt-6 overflow-hidden rounded-xl border border-[#A855F7]/20 bg-[#0B0B12]/40 p-3">
                {/* Header - Sticky */}
                <div className="sticky top-0 z-10 mb-2 flex items-center gap-2 bg-[#0B0B12]/40 pb-2 backdrop-blur-sm">
                  <Quote className="h-3.5 w-3.5 text-[#A855F7]" />
                  <h4 className="text-xs font-bold">
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
                  <div className="stories-scroll max-h-[180px] space-y-2 overflow-y-auto scroll-smooth snap-y snap-mandatory pr-1 md:max-h-[200px]">
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
            </div>
          </motion.div>

          {/* COLUMN B: Latest Videos - Imad Selim */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-1 flex"
          >
            <div className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-[#A855F7]/20 bg-[#0B0B12]/60 p-6 backdrop-blur-xl">

              <h3 className="mb-2 text-lg font-bold">
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                  Latest Videos
                </span>
              </h3>

              <div className="space-y-2 flex-1">

                {/* Featured Video */}
                <a
                  href="https://www.youtube.com/watch?v=EXxIXEIj2Lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-xl border border-[#A855F7]/30 transition-all hover:border-[#F43F5E] hover:shadow-[0_0_25px_rgba(244,63,94,0.3)]"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-[#0B0B12]">
                    <img
                      src="https://img.youtube.com/vi/EXxIXEIj2Lg/maxresdefault.jpg"
                      alt="Imad Selim Music"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-[#07070B]/80 via-[#07070B]/40 to-transparent">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F43F5E] shadow-lg transition-transform group-hover:scale-110">
                        <Play className="h-8 w-8 fill-white text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-3">
                    <p className="mb-1 line-clamp-2 text-sm font-semibold text-white group-hover:text-[#F43F5E]">
                      Imad Selim – Official Music Video
                    </p>
                    <p className="text-xs text-white/50">
                      YouTube
                    </p>
                  </div>
                </a>


                {/* Video 2 */}
                <a
                  href="https://www.youtube.com/watch?v=Oueo68_lxjI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-3 overflow-hidden rounded-xl border border-[#A855F7]/20 p-2 transition-all hover:border-[#F43F5E] hover:bg-[#F43F5E]/5"
                >
                  <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-[#0B0B12]">
                    <img
                      src="https://img.youtube.com/vi/Oueo68_lxjI/mqdefault.jpg"
                      alt="Imad Selim Video"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-[#07070B]/40">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F43F5E]">
                        <Play className="h-4 w-4 fill-white text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 py-1">
                    <p className="mb-1 line-clamp-2 text-xs font-semibold text-white group-hover:text-[#F43F5E]">
                      Imad Selim – Music Video
                    </p>
                    <p className="text-xs text-white/50">
                      YouTube
                    </p>
                  </div>
                </a>


                {/* Video 3 */}
                <a
                  href="https://www.youtube.com/watch?v=CIJ7ekVD6xY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-3 overflow-hidden rounded-xl border border-[#A855F7]/20 p-2 transition-all hover:border-[#F43F5E] hover:bg-[#F43F5E]/5"
                >
                  <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-lg bg-[#0B0B12]">
                    <img
                      src="https://img.youtube.com/vi/CIJ7ekVD6xY/mqdefault.jpg"
                      alt="Imad Selim Music"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 flex items-center justify-center bg-[#07070B]/40">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#F43F5E]">
                        <Play className="h-4 w-4 fill-white text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 py-1">
                    <p className="mb-1 line-clamp-2 text-xs font-semibold text-white group-hover:text-[#F43F5E]">
                      Imad Selim – Music Release
                    </p>
                    <p className="text-xs text-white/50">
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
                className="mt-auto pt-4 inline-flex  items-center gap-2 text-sm text-[#A855F7] transition-colors hover:text-[#F43F5E]"
              >
                <span>More on YouTube</span>
                <ArrowRight className="h-4 w-4" />
              </a>

            </div>
          </motion.div>

          {/* COLUMN C: Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 flex"
          >
            <div className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-[#A855F7]/20 bg-[#0B0B12]/60 p-6 backdrop-blur-xl">
              <h3 className="mb-4 text-lg font-bold">
                <span className="bg-gradient-to-r from-[#7C3AED] to-[#A855F7] bg-clip-text text-transparent">
                  Contact & Social
                </span>
              </h3>

              {/* CTA Buttons */}
              <div className="mb-6 space-y-3">
                <a
                  href="https://wa.me/9647501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-[#7C3AED]/50 bg-gradient-to-r from-[#7C3AED]/20 to-[#A855F7]/20 px-5 py-3 font-semibold text-white transition-all hover:border-[#F43F5E] hover:bg-gradient-to-r hover:from-[#F43F5E]/30 hover:to-[#7C3AED]/30 hover:shadow-[0_0_25px_rgba(244,63,94,0.3)]"
                >
                  <MessageCircle className="h-5 w-5 text-[#F59E0B]" />
                  <span className="flex-1">WhatsApp Booking</span>
                  <ExternalLink className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>

                <a
                  href="tel:+9647501234567"
                  className="group flex items-center gap-3 rounded-xl border border-[#A855F7]/30 bg-[#0B0B12]/40 px-5 py-3 font-semibold text-white transition-all hover:border-[#F43F5E] hover:bg-[#F43F5E]/10"
                >
                  <Phone className="h-5 w-5 text-[#A855F7] transition-colors group-hover:text-[#F43F5E]" />
                  <span className="flex-1 text-sm">Call Now</span>
                </a>

                <a
                  href="mailto:booking@imadselim.com"
                  className="group flex items-center gap-3 rounded-xl border border-[#A855F7]/30 bg-[#0B0B12]/40 px-5 py-3 font-semibold text-white transition-all hover:border-[#F43F5E] hover:bg-[#F43F5E]/10"
                >
                  <Mail className="h-5 w-5 text-[#A855F7] transition-colors group-hover:text-[#F43F5E]" />
                  <span className="flex-1 text-sm">Email</span>
                </a>
              </div>

              {/* Location */}
              <div className="mb-6 rounded-xl border border-[#A855F7]/20 bg-[#0B0B12]/40 p-4">
                <div className="mb-2 flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#A855F7]" />
                  <div>
                    <p className="text-sm font-semibold text-white">Duhok, Kurdistan</p>
                    <p className="text-xs text-white/50">Iraq</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Duhok,Kurdistan,Iraq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-[#A855F7] transition-colors hover:text-[#F43F5E]"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>View on Google Maps</span>
                </a>
              </div>

              {/* Social Icons */}
              <div>
                <p className="mb-6 text-s font-bold uppercase tracking-wider text-white/50">
                  Follow
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.handle}
                      className="group flex h-12 w-12 items-center justify-center rounded-xl border border-[#A855F7]/30 bg-gradient-to-b from-[#0B0B12]/90 to-[#0B0B12]/70 backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[#F43F5E] hover:bg-gradient-to-b hover:from-[#F43F5E]/20 hover:to-[#7C3AED]/20 hover:shadow-[0_0_20px_rgba(244,63,94,0.4)]"
                    >
                      <social.icon className="h-6 w-6 text-[#A855F7] transition-colors group-hover:text-[#F43F5E]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="container relative z-10 mx-auto px-4 pb-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="border-t border-[#A855F7]/10 pt-6"
        >
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-white/50">
              © {currentYear} Imad Selim. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-sm text-white/50">
              Made with{" "}
              <Heart className="h-4 w-4 fill-[#F43F5E] text-[#F43F5E]" />{" "}
              on the stage
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
