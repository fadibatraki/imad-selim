import About from "@/components/About";
import ScrollUp from "@/components/Common/ScrollUp";
import Events from "@/components/Events";
import Stories from "@/components/Stories";
import Media from "@/components/Media";
import LatestReleases from "@/components/LatestReleases";
import YouTubeSongs from "@/components/YouTubeSongs";
import InstagramReels from "@/components/InstagramReels";
import TikTokVideos from "@/components/TikTokVideos";
import Hero from "@/components/Hero";
import ProductsSection from "@/components/Products";
import { Metadata } from "next";
import { siteFeatures } from "@/config/features";

export const metadata: Metadata = {
  title: "Imad Selim",
  description:
    "Free Next.js SaaS Boilerplate and Starter Kit designed and built for SaaS startups. It comes with all necessary integrations, pages, and components you need to launch a feature-rich SaaS websites.",
};

export default function Home() {
  return (
    <main className="home-page">
      <ScrollUp />
      <Hero />
      <About />
      {/* <ProductsSection /> */}
      {siteFeatures.events && <Events />}
      {siteFeatures.stories && <Stories />}
      <Media />
      {siteFeatures.music && <LatestReleases />}
      {siteFeatures.youtube && <YouTubeSongs limit={3} showViewAll />}
      {siteFeatures.instagram && <InstagramReels limit={3} showViewAll />}
      {siteFeatures.tiktok && <TikTokVideos limit={3} showViewAll />}
    </main>
  );
}
