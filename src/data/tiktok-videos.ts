export interface TikTokVideo {
  id: number;
  videoId: string;
  title: string;
  url: string;
}

/** أضف فيديوهات TikTok هنا بعد استخراج معرّف الفيديو من الرابط الكامل. */
export const tiktokVideos: TikTokVideo[] = [
  {
    id: 1,
    videoId: "7645767862090583329",
    title: "Imad Selim - TikTok 01",
    url: "https://www.tiktok.com/@imadselim_official/video/7645767862090583329",
  },
  {
    id: 2,
    videoId: "7652448044788583712",
    title: "Imad Selim - TikTok 02",
    url: "https://www.tiktok.com/@imadselim_official/video/7652448044788583712",
  },
  {
    id: 3,
    videoId: "7647954318733118742",
    title: "Imad Selim - TikTok 03",
    url: "https://www.tiktok.com/@imadselim_official/video/7647954318733118742",
  },
];
