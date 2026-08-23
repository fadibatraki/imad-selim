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
} from "lucide-react";
import { photos } from "@/data/media";
import { useRef, useState } from "react";
import { siteFeatures } from "@/config/features";

type BioLanguage = "ku" | "ar" | "en";

const bioLanguages: Array<{
  code: BioLanguage;
  label: string;
  nativeLabel: string;
}> = [
  { code: "ku", label: "Kurdish", nativeLabel: "Kurdî" },
  { code: "ar", label: "Arabic", nativeLabel: "العربية" },
  { code: "en", label: "English", nativeLabel: "English" },
];

const bioTranslations: Record<
  BioLanguage,
  { badge: string; title: string; paragraphs: string[] }
> = {
  ku: {
    badge: "DERBARÊ IMAD SELIM DE",
    title: "Dengê Mîrateyê",
    paragraphs: [
      "Ji çiyayên Tirkiyeyê bigire heta deştên Sûriyeyê, û dû re jî heta bajarên Almanyayê, rêwîtiya Emad dest pê kir—xewnek ku sînoran derbas dikir û hewesek bêdawî bi xwe re hildigirt.",
      "Ew ne tenê hunermend û muzîkjenek bû, lê belê parêzvanê mîrateyeke dewlemend a muzîkê bû. Wî kevneşopiyên Kurdî nû kir û vejand, melodî vegerandin lêdanên wan ên resen, û ruh û nasnameya wan di nav demê de parast.",
      "Di bîranîna wî de, bi hezaran stran û melodî dê wekî mîrateyeke zindî bên parastin, mîrateyek ku çîroka gelêkî tevahî vedibêje.",
      "Ji bo wî, muzîk ne tenê huner bû, lê peyamek bû—da ku mîrat zindî bimîne û melodî, çiqas erd biguhere jî, şahidên kokên xwe bimînin.",
    ],
  },
  ar: {
    badge: "عن عماد سليم",
    title: "صوتٌ من التراث",
    paragraphs: [
      "من جبال تركيا إلى سهول سوريا، ومنها إلى مدن ألمانيا، بدأت رحلة عماد؛ حلمٌ تجاوز الحدود، حاملاً معه شغفاً لا يعرف النهاية.",
      "لم يكن مجرد فنان وموسيقي، بل كان أيضاً حارساً لإرث موسيقي غني. أعاد إحياء وتجديد التقاليد الكردية، وأرجع الألحان إلى إيقاعاتها الأصيلة، وحافظ على روحها وهويتها عبر الزمن.",
      "وفي ذكراه، ستبقى آلاف الأغاني والألحان محفوظة كإرث حيّ، يروي حكاية شعب بأكمله.",
      "بالنسبة إليه، لم تكن الموسيقى مجرد فن، بل كانت رسالة... كي يبقى التراث حياً، وكي تظل الألحان شاهدةً على جذورها، مهما تغيّرت الأرض.",
    ],
  },
  en: {
    badge: "ABOUT IMAD SELIM",
    title: "A Voice of Heritage",
    paragraphs: [
      "From the mountains of Turkey to the plains of Syria, and then onward to the cities of Germany, Emad’s journey began—a dream that crossed borders, carrying with it a passion that knew no end.",
      "He was not only an artist and musician, but also a guardian of a rich musical heritage. He renewed and revived Kurdish traditions, restoring melodies to their authentic rhythms and preserving their spirit and identity through time.",
      "His memory lives on in thousands of songs and melodies, preserved as a living legacy that tells the story of an entire people.",
      "For him, music was not merely an art, but a message—a way to keep heritage alive, and to ensure that melodies remain witnesses to their roots, no matter how much the land may change.",
    ],
  },
};

const About = () => {
  const [bioLanguage, setBioLanguage] = useState<BioLanguage>("ku");
  const activeBio = bioTranslations[bioLanguage];
  const isArabic = bioLanguage === "ar";
  const featuredPhotos = photos.slice(0, 7);

  // Refs for scroll containers
  const imageScrollRef = useRef<HTMLDivElement>(null);

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

        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_50%,rgba(124,58,237,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(750px_420px_at_70%_50%,rgba(244,63,94,0.12),transparent_70%)]" />
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
                  style={
                    {
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                      WebkitOverflowScrolling: "touch",
                    } as React.CSSProperties
                  }
                >
                  <div className="flex">
                    {featuredPhotos.map((photo, i) => (
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

                          <div className="pointer-events-none absolute inset-0 rounded-lg opacity-0 shadow-[inset_0_0_24px_rgba(124,58,237,0.35)] transition-opacity duration-300 group-hover:opacity-100" />
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
              dir={isArabic ? "rtl" : "ltr"}
              className={isArabic ? "text-right" : "text-left"}
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
                {activeBio.badge}
              </motion.div>

              {/* Language switcher */}
              <div
                className="mx-auto mb-5 flex w-fit flex-wrap gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm"
                role="group"
                aria-label="Biography language"
              >
                {bioLanguages.map((language) => {
                  const isActive = bioLanguage === language.code;

                  return (
                    <button
                      key={language.code}
                      type="button"
                      onClick={() => setBioLanguage(language.code)}
                      aria-label={`Read biography in ${language.label}`}
                      aria-pressed={isActive}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#A855F7] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070B] focus-visible:outline-none ${
                        isActive
                          ? "bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white shadow-lg shadow-[#7C3AED]/20"
                          : "text-white/60 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {language.nativeLabel}
                    </button>
                  );
                })}
              </div>

              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mb-6 text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl"
              >
                <span className="bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#F43F5E] bg-clip-text text-transparent">
                  {activeBio.title}
                </span>
              </motion.h2>

              {/* Bio paragraphs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                key={bioLanguage}
                lang={bioLanguage}
                className={`mb-8 space-y-4 text-base leading-relaxed text-white/70 sm:text-lg ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                {activeBio.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
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
