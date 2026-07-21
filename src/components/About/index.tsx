"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Play,
  Calendar,
  Mic2,
  BookOpen,
  Globe,
  Award,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { photos } from "@/data/media";
import { stories } from "@/data/stories";
import { useRef, useEffect } from "react";
import { siteFeatures } from "@/config/features";

const About = () => {
  // Create looped arrays (triple the content for infinite scroll)
  const loopedPhotos = [
    ...photos.slice(0, 7),
    ...photos.slice(0, 7),
    ...photos.slice(0, 7),
  ];
  const featuredStories = stories.slice(0, 5);
  const loopedStories = [
    ...featuredStories,
    ...featuredStories,
    ...featuredStories,
  ];

  // Refs for scroll containers
  const imageScrollRef = useRef<HTMLDivElement>(null);
  const storiesScrollRef = useRef<HTMLDivElement>(null);
  const isScrollingImages = useRef(false);
  const isScrollingStories = useRef(false);

  // Set initial scroll position to middle section
  useEffect(() => {
    if (imageScrollRef.current) {
      const scrollWidth = imageScrollRef.current.scrollWidth;
      imageScrollRef.current.scrollLeft = scrollWidth / 3;
    }
    if (storiesScrollRef.current) {
      const scrollHeight = storiesScrollRef.current.scrollHeight;
      storiesScrollRef.current.scrollTop = scrollHeight / 3;
    }
  }, []);

  // Infinite scroll handler for images
  const handleImageScroll = () => {
    if (!imageScrollRef.current || isScrollingImages.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = imageScrollRef.current;
    const sectionWidth = scrollWidth / 3;

    if (scrollLeft <= 50) {
      isScrollingImages.current = true;
      imageScrollRef.current.scrollLeft = sectionWidth + scrollLeft;
      setTimeout(() => {
        isScrollingImages.current = false;
      }, 50);
    } else if (scrollLeft >= sectionWidth * 2 - clientWidth - 50) {
      isScrollingImages.current = true;
      imageScrollRef.current.scrollLeft =
        sectionWidth + (scrollLeft - sectionWidth * 2);
      setTimeout(() => {
        isScrollingImages.current = false;
      }, 50);
    }
  };

  // Infinite scroll handler for stories
  const handleStoriesScroll = () => {
    if (!storiesScrollRef.current || isScrollingStories.current) return;

    const { scrollTop, scrollHeight, clientHeight } = storiesScrollRef.current;
    const sectionHeight = scrollHeight / 3;

    if (scrollTop <= 50) {
      isScrollingStories.current = true;
      storiesScrollRef.current.scrollTop = sectionHeight + scrollTop;
      setTimeout(() => {
        isScrollingStories.current = false;
      }, 50);
    } else if (scrollTop >= sectionHeight * 2 - clientHeight - 50) {
      isScrollingStories.current = true;
      storiesScrollRef.current.scrollTop =
        sectionHeight + (scrollTop - sectionHeight * 2);
      setTimeout(() => {
        isScrollingStories.current = false;
      }, 50);
    }
  };

  // Scroll functions for horizontal image slider
  const scrollImages = (direction: "left" | "right") => {
    if (imageScrollRef.current) {
      const scrollAmount = imageScrollRef.current.clientWidth;
      imageScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Scroll functions for vertical stories slider
  const scrollStories = (direction: "up" | "down") => {
    if (storiesScrollRef.current) {
      const scrollAmount = 150;
      storiesScrollRef.current.scrollBy({
        top: direction === "up" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const highlights = [
    { icon: Mic2, label: "Singer" },
    { icon: BookOpen, label: "Storyteller" },
    { icon: Globe, label: "Cultural Heritage" },
    { icon: Award, label: "Signature Perfumes" },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07070B] py-20 text-white lg:py-28"
    >
      {/* Background with stage effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070B] via-[#0B0B12] to-[#07070B]" />

        {/* Animated stage glow */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(900px 500px at 50% 50%, rgba(124,58,237,0.15), transparent 70%)",
              "radial-gradient(900px 500px at 50% 50%, rgba(124,58,237,0.25), transparent 70%)",
              "radial-gradient(900px 500px at 50% 50%, rgba(124,58,237,0.15), transparent 70%)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(750px 420px at 70% 50%, rgba(244,63,94,0.10), transparent 70%)",
              "radial-gradient(750px 420px at 70% 50%, rgba(244,63,94,0.18), transparent 70%)",
              "radial-gradient(750px 420px at 70% 50%, rgba(244,63,94,0.10), transparent 70%)",
            ],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* LEFT COLUMN - Media Stack */}
          <div className="w-full min-w-0">
            {/* Stage Moments - Horizontal Image Slider */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h3 className="mb-3 text-base font-bold text-white/80 sm:mb-4 sm:text-lg">
                Stage Moments
              </h3>

              {/* Horizontal scrolling container */}
              <div className="group/slider relative overflow-hidden rounded-xl border border-white/10 bg-[#0B0B12]/40 p-3 backdrop-blur-sm">
                {/* Left Navigation Arrow */}
                <button
                  onClick={() => scrollImages("left")}
                  className="absolute top-1/2 left-2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-[#0B0B12]/80 p-2 text-white/60 opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 group-hover/slider:opacity-100 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/20 hover:text-[#7C3AED]"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  onClick={() => scrollImages("right")}
                  className="absolute top-1/2 right-2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-[#0B0B12]/80 p-2 text-white/60 opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 group-hover/slider:opacity-100 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/20 hover:text-[#7C3AED]"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Left fade mask */}
                <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0B0B12] to-transparent" />

                {/* Scrollable images */}
                <div
                  ref={imageScrollRef}
                  className="scrollbar-hide snap-x snap-mandatory overflow-x-auto"
                  onScroll={handleImageScroll}
                  style={
                    {
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                      WebkitOverflowScrolling: "touch",
                    } as React.CSSProperties
                  }
                >
                  <div className="flex">
                    {loopedPhotos.map((photo, i) => (
                      <Link
                        key={`photo-${i}`}
                        href="/media"
                        className="w-full flex-none snap-center"
                      >
                        <motion.div
                          className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/10 bg-black/30"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: (i % 8) * 0.05 }}
                          whileHover={{ y: -4 }}
                        >
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            fill
                            className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.03]"
                          />

                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                          {/* Image info */}
                          <div className="absolute right-0 bottom-0 left-0 p-4">
                            <p className="text-xs font-medium text-white/90">
                              {photo.category}
                            </p>
                          </div>

                          {/* Glow border on hover */}
                          <motion.div
                            className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                            animate={{
                              boxShadow: [
                                "inset 0 0 20px rgba(124,58,237,0.3), 0 0 20px rgba(124,58,237,0.2)",
                                "inset 0 0 30px rgba(244,63,94,0.4), 0 0 30px rgba(244,63,94,0.3)",
                                "inset 0 0 20px rgba(124,58,237,0.3), 0 0 20px rgba(124,58,237,0.2)",
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Right fade mask */}
                <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-12 bg-gradient-to-l from-[#0B0B12] to-transparent" />
              </div>
            </motion.div>

            {/* From the Stories - Vertical Slider */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-bold text-white/80">From the Stories</h3>

              
              <div className="group/stories relative overflow-hidden rounded-xl border border-white/10 bg-[#0B0B12]/20 backdrop-blur-sm">
     
                <button
                  onClick={() => scrollStories('up')}
                  className="absolute left-1/2 top-2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-[#0B0B12]/80 p-1.5 text-white/60 opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/20 hover:text-[#7C3AED] group-hover/stories:opacity-100"
                  aria-label="Scroll up"
                >
                  <ChevronUp className="h-4 w-4" />
                </button>

              
                <button
                  onClick={() => scrollStories('down')}
                  className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/10 bg-[#0B0B12]/80 p-1.5 text-white/60 opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/20 hover:text-[#7C3AED] group-hover/stories:opacity-100"
                  aria-label="Scroll down"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>

              
                <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-10 bg-gradient-to-b from-[#0B0B12] to-transparent" />

               
                <div
                  ref={storiesScrollRef}
                  className="h-[280px] overflow-y-auto snap-y snap-proximity scrollbar-hide p-3"
                  onScroll={handleStoriesScroll}
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    WebkitOverflowScrolling: 'touch'
                  } as React.CSSProperties}
                >
                  {loopedStories.map((story, i) => (
                    <motion.div
                      key={`story-${i}`}
                      className="mb-3 snap-start overflow-hidden rounded-lg border border-white/5 bg-[#0B0B12]/40 p-4 last:mb-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (i % 5) * 0.05 }}
                      whileHover={{
                        borderColor: "rgba(124,58,237,0.3)",
                        backgroundColor: "rgba(11,11,18,0.6)",
                      }}
                    >
                      <Link href={`/stories/${story.slug}`}>
                        <div className="group">
                          <div className="mb-2 flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
                            <span className="text-xs text-[#A855F7]">{story.readTime}</span>
                          </div>
                          <h4 className="mb-2 line-clamp-2 text-sm font-semibold leading-snug text-white transition-colors group-hover:text-[#7C3AED]">
                            {story.title}
                          </h4>
                          <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-white/60">
                            {story.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1">
                              {story.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-white/50"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#7C3AED] transition-all group-hover:gap-2">
                              Read
                              <span className="text-[10px]">→</span>
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

              
                <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-10 bg-gradient-to-t from-[#0B0B12] to-transparent" />
              </div>
            </motion.div> */}
            {/* Highlight chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-6 flex flex-wrap gap-2"
            >
              {highlights.map((highlight, i) => (
                <motion.div
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm transition-all hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <highlight.icon className="h-4 w-4 text-[#7C3AED]" />
                  <span className="text-white/80">{highlight.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-8 flex flex-wrap gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#7C3AED]" />
                <span className="font-semibold text-white">30+ Years</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#A855F7]" />
                <span className="font-semibold text-white">500+ Shows</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[#F43F5E]" />
                <span className="font-semibold text-white">15+ Countries</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-3 sm:flex-row sm:flex-nowrap sm:gap-4"
            >
              <motion.a
                href="https://www.youtube.com/@imad_selim"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-full bg-[#7C3AED] px-5 py-3 font-semibold whitespace-nowrap text-white transition-all duration-300 xl:px-7"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#F43F5E",
                  boxShadow: "0 0 30px rgba(244,63,94,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="h-5 w-5" />
                Watch on YouTube
              </motion.a>

              {siteFeatures.events && (
                <Link href="/events" className="flex-1">
                  <motion.div
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-[#7C3AED] px-5 py-3 font-semibold whitespace-nowrap text-white transition-all duration-300 xl:px-7"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "#F43F5E",
                      backgroundColor: "rgba(244,63,94,0.1)",
                      boxShadow: "0 0 20px rgba(124,58,237,0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar className="h-5 w-5" />
                    View Upcoming Shows
                  </motion.div>
                </Link>
              )}
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Bio + Highlights */}
          <div className="w-full min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-4 py-2 text-xs font-semibold text-[#F59E0B]"
              >
                <Sparkles className="h-3 w-3" />
                ABOUT IMAD SELIM
              </motion.div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mb-6 text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl"
              >
                <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#F43F5E] bg-clip-text text-transparent">
                  A Voice of Heritage
                </span>
              </motion.h2>

              {/* Bio paragraphs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8 space-y-4 text-base leading-relaxed text-white/70 sm:text-lg"
              >
                <p>
                 Ji çiyayên Tirkiyeyê bigire heta  deştên sûriyeyê,û dû re jî heta şaristaniya Almanya...rêwîtiya Emad dest pê kir,xewnek ku sînoran derbas dikir 
                 û hewesek ku bêdawî nedizanî bi xwe re hildigirt. {" "}
                </p>
                <p>
                  Ew ne tenê  hunermed û muzîkjenek bû,lê belê parêzvanê mîrateyek 
                 dewlemnd a  muzîkê bû,kevneşopiyên kurdî nû dikir û vejand, lêdana wan a resen vedigerand melodiyan,û ruh û nasnameya 
                 wan di demê re,diparast.{" "}
                </p>
                <p>
                 Di bîranîna wî dê  bi hezaran stran û melodî hene ku wekî mîrateyek zindî têne parastin ku 
                 çîrokên tevahiya gelekî vedibêje.{" "}
                </p>
                <p>
                 Ji bo wî ,muzîk ne tenê hunerek bû, lê peyamek bû...ji,bo ku mîrat zindî bimîne, 
                 û ji bo ku melodî şahidên kokan bimînin çi qas erd biguhere ji.{" "}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-[#07070B] to-transparent" />
    </section>
  );
};

export default About;
