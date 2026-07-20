import { notFound } from "next/navigation";
import YouTubeSongs from "@/components/YouTubeSongs";
import { siteFeatures } from "@/config/features";

export default function YouTubePage() {
  if (!siteFeatures.youtube) notFound();
  return <YouTubeSongs pageTitle />;
}
