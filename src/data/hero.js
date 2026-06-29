import heroBackground from "../assets/hero-background.webp";
import homeBanner1 from "../assets/bn-1.webp";
import homeBanner2 from "../assets/bn-2.webp";
import homeBanner3 from "../assets/bn-3.webp";
import homeBanner4 from "../assets/bn-4.webp";
import eventsBanner1 from "../assets/bn-5.webp";
import venueStage from "../assets/venue-stage.webp";
import venueRehearsalRoom from "../assets/venue-rehearsal-room.webp";
import venueDressingRoom from "../assets/venue-dressing-room.webp";
import venueControlRoom from "../assets/venue-control-room.webp";
import aboutBanner1 from "../assets/about-img.webp";

export const bannerBackground = heroBackground;

export const homeBannerImages = [
  {
    id: 0,
    source: homeBanner1,
    alt: "Elegant performing arts venue banner with stage-inspired lighting, dark blue and gold tones, representing a modern cultural performance space.",
  },
  {
    id: 1,
    source: homeBanner2,
    alt: "Atmosphere of a live performing arts performance with dramatic stage lighting, representing theater and cultural events on a modern stage.",
  },
  {
    id: 2,
    source: homeBanner3,
    alt: "Art workshop and rehearsal atmosphere inside a cultural center, representing training and educational programs in performing arts.",
  },
  {
    id: 3,
    source: homeBanner4,
    alt: "Interior view of a modern performing arts hall with professional stage and seating, representing venue rental for performances and events.",
  },
];

export const eventsBannerImages = [
  {
    id: 0,
    source: eventsBanner1,
    alt: "Traditional dancer",
  },
];

export const venueBannerImages = [
  {
    id: 0,
    source: venueStage,
    alt: "Main Stage",
  },
  {
    id: 1,
    source: venueRehearsalRoom,
    alt: "Rehearsal Room",
  },
  {
    id: 2,
    source: venueDressingRoom,
    alt: "Main Stage Dressing Room",
  },
  {
    id: 3,
    source: venueControlRoom,
    alt: "Main Stage Control Room",
  },
];

export const aboutBannerImages = [
  {
    id: 0,
    source: aboutBanner1,
    alt: "Cultural Art Space building frontside",
  },
];

export const bannerData = {
  home: {
    title: "Where Art Comes Alive on Stage",
    button: "Explore !",
  },
  events: {
    title: "Performances & Events",
    desc: "Explore upcoming shows and past performances from our cultural stage.",
  },
  venue: {
    title: "Venues",
    desc: "Explore the potentials of our Premium Class Venues.",
  },
  about: {
    title: "Cultural Art Space",
    desc: "Where Performing Arts Inspire Every Generation",
  },
};
