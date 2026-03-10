import { Menu } from "@/types/menu";

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
  {
    id: 4,
    title: "Events",
    path: "/events",
    newTab: false,
  },
  {
    id: 5,
    title: "Stories",
    path: "/stories",
    newTab: false,
  },
  {
    id: 6,
    title: "Media",
    path: "/media",
    newTab: false,
  },
  {
    id: 7,
    title: "Music",
    path: "/music",
    newTab: false,
  },
  {
    id: 11,
    title: "Pages",
    newTab: false,
    submenu: [
      {
        id: 61,
        title: "About Page",
        path: "/about",
        newTab: false,
      },
      {
        id: 68,
        title: "Error Page",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
