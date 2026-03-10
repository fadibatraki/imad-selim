export interface Photo {
  id: number;
  src: string;
  alt: string;
  category: string;
}

export interface Video {
  id: number;
  title: string;
  youtubeUrl: string;
  dateISO: string;
}

export interface Poster {
  id: number;
  src: string;
  title: string;
  dateISO: string;
}

export const photos: Photo[] = [
  {
    id: 1,
    src: "/images/profile/1.jpeg",
    alt: "Live performance at Heritage Festival",
    category: "Concerts"
  },
  {
    id: 2,
    src: "/images/profile/2.jpeg",
    alt: "Portrait session with traditional tembur",
    category: "Portraits"
  },
  {
    id: 3,
    src: "/images/profile/3.jpeg",
    alt: "Newroz celebration performance",
    category: "Concerts"
  },
  {
    id: 4,
    src: "/images/profile/4.jpeg",
    alt: "Recording session in studio",
    category: "Studio"
  },
  {
    id: 5,
    src: "/images/profile/5.jpeg",
    alt: "Stockholm World Music Series",
    category: "Concerts"
  },
  {
    id: 6,
    src: "/images/profile/6.jpeg",
    alt: "Backstage moments",
    category: "Portraits"
  },
  {
    id: 7,
    src: "/images/profile/7.jpeg",
    alt: "Berlin cultural exchange night",
    category: "Concerts"
  },
  {
    id: 8,
    src: "/images/media/photos/studio-2.jpg",
    alt: "Working on new compositions",
    category: "Studio"
  },
  {
    id: 9,
    src: "/images/media/photos/portrait-3.jpg",
    alt: "Traditional Kurdish attire photoshoot",
    category: "Portraits"
  },
  {
    id: 10,
    src: "/images/media/photos/concert-5.jpg",
    alt: "Intimate acoustic performance",
    category: "Concerts"
  },
  {
    id: 11,
    src: "/images/media/photos/studio-3.jpg",
    alt: "Collaborating with musicians",
    category: "Studio"
  },
  {
    id: 12,
    src: "/images/media/photos/portrait-4.jpg",
    alt: "Natural light portrait session",
    category: "Portraits"
  }
];

export const videos: Video[] = [
  {
    id: 1,
    title: "Kurdish Heritage Festival 2025 - Full Performance",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    dateISO: "2025-04-15"
  },
  {
    id: 2,
    title: "Behind the Scenes: Recording Traditional Songs",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    dateISO: "2025-11-20"
  },
  {
    id: 3,
    title: "Newroz Celebration Concert Highlights",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    dateISO: "2026-03-21"
  },
  {
    id: 4,
    title: "Interview: Preserving Kurdish Musical Heritage",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    dateISO: "2025-10-05"
  },
  {
    id: 5,
    title: "Live from Berlin Cultural Exchange",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    dateISO: "2025-11-12"
  },
  {
    id: 6,
    title: "Acoustic Session: Traditional Melodies",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    dateISO: "2026-01-18"
  }
];

export const posters: Poster[] = [
  {
    id: 1,
    src: "/images/media/posters/heritage-festival.jpg",
    title: "Kurdish Heritage Festival 2026",
    dateISO: "2026-04-15"
  },
  {
    id: 2,
    src: "/images/media/posters/newroz-concert.jpg",
    title: "Newroz Celebration Concert",
    dateISO: "2026-03-21"
  },
  {
    id: 3,
    src: "/images/media/posters/stockholm-series.jpg",
    title: "Stockholm World Music Series",
    dateISO: "2026-05-08"
  },
  {
    id: 4,
    src: "/images/media/posters/berlin-exchange.jpg",
    title: "Berlin Cultural Exchange Night",
    dateISO: "2025-11-12"
  },
  {
    id: 5,
    src: "/images/media/posters/paris-festival.jpg",
    title: "Paris Oriental Music Festival",
    dateISO: "2025-10-05"
  },
  {
    id: 6,
    src: "/images/media/posters/istanbul-gala.jpg",
    title: "Istanbul Cross-Cultural Gala",
    dateISO: "2026-06-20"
  }
];
