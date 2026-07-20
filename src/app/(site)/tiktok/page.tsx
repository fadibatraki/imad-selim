import { notFound } from "next/navigation";
import TikTokVideos from "@/components/TikTokVideos";
import { siteFeatures } from "@/config/features";

export default function TikTokPage() {
  if (!siteFeatures.tiktok) notFound();
  return <TikTokVideos pageTitle />;
}
