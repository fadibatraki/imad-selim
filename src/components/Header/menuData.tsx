import { Menu } from "@/types/menu";
import { siteFeatures } from "@/config/features";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Products",
    path: "/products",
    newTab: false,
  },
  ...(siteFeatures.events
    ? [{ id: 4, title: "Events", path: "/events", newTab: false }]
    : []),
  ...(siteFeatures.stories
    ? [{ id: 5, title: "Stories", path: "/stories", newTab: false }]
    : []),
  {
    id: 6,
    title: "Media",
    path: "/media",
    newTab: false,
  },
  ...(siteFeatures.music
    ? [{ id: 7, title: "Music", path: "/music", newTab: false }]
    : []),
  ...(siteFeatures.youtube
    ? [{ id: 8, title: "YouTube", path: "/youtube", newTab: false }]
    : []),
];
export default menuData;
