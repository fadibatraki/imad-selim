import { notFound } from "next/navigation";
import InstagramReels from "@/components/InstagramReels";
import { siteFeatures } from "@/config/features";

export default function InstagramPage() {
  if (!siteFeatures.instagram) notFound();
  return <InstagramReels pageTitle />;
}
