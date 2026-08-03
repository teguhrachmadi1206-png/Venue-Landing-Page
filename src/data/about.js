import storyImg from "../assets/venue-1.webp";
import timelineImg1 from "../assets/timeline-1985.webp";
import timelineImg2 from "../assets/timeline-2003.webp";
import timelineImg3 from "../assets/timeline-2014.webp";
import timelineImg4 from "../assets/timeline-2021.webp";
import timelineImg5 from "../assets/timeline-2026.webp";

export const aboutText = {
  story: {
    headings: "Our Story",
    style: "text-image",
    body: [
      "For decades, Cultural Art Space has served as a gathering place for artists, performers, educators, and audiences. Built with a vision to nurture cultural expression, the venue has continually evolved to meet the changing needs of the creative community while honoring the rich artistic traditions of West Java.",
      "Today, Cultural Art Space combines modern facilities with a warm cultural atmosphere, creating an inspiring environment for performances, rehearsals, workshops, and artistic collaboration.",
    ],
    imgSrc: storyImg,
    imgAlt: "Auditorium for Art Performance",
  },
  vision: {
    headings: "Our Vision",
    style: "text",
    body: [
      "To become a leading performing arts venue that empowers creativity, preserves cultural heritage, and connects communities through inspiring artistic experiences.",
    ],
  },
  mission: {
    headings: "Our Mission",
    style: "text-list",
    bodyList: [
      "Support artists, performers, and creative communities with accessible professional facilities.",
      "Promote cultural appreciation through diverse performances and educational programs.",
      "Foster collaboration between traditional and contemporary art practices.",
      "Encourage lifelong learning through workshops and creative activities.",
      "Create memorable experiences for audiences of all ages.",
    ],
  },
  pros: {
    headings: "Why Choose Cultural Art Space",
    style: "card",
    bodyObj: [
      {
        id: 0,
        subHeading: "Professional Venue",
        subBody:
          "Purpose-built spaces designed for performances, rehearsals, and creative productions.",
      },
      {
        id: 1,
        subHeading: "Modern Facilities",
        subBody:
          "Equipped with quality stage lighting, sound systems, seating, and supporting amenities.",
      },
      {
        id: 2,
        subHeading: "Cultural Heritage",
        subBody:
          "A venue that values local traditions while embracing contemporary artistic expression.",
      },
      {
        id: 3,
        subHeading: "Creative Community",
        subBody:
          "Home to artists, cultural organizations, educational institutions, and independent creators.",
      },
      {
        id: 4,
        subHeading: "Flexible Spaces",
        subBody:
          "Suitable for performances, seminars, workshops, exhibitions, and private events.",
      },
      {
        id: 5,
        subHeading: "Inspiring Experiences",
        subBody:
          "Every event is designed to encourage creativity, collaboration, and audience engagement.",
      },
    ],
  },
  timeline: {
    headings: "Timeline",
    style: "timeline",
    bodyObj: [
      {
        icon: 1985,
        imgSrc: timelineImg1,
        imgAlt:
          "Historic photograph of the grand opening of a performing arts venue, welcoming visitors and traditional performers at the main entrance in 1985.",
        subHeading: "The Beginning",
        subBody:
          "Cultural Art Space opens its doors as a dedicated venue for performing arts and community cultural activities.",
      },
      {
        icon: 2003,
        imgSrc: timelineImg2,
        imgAlt:
          "Photograph of newly expanded rehearsal studios and backstage facilities supporting larger performing arts productions in 2003.",
        subHeading: "Facility Expansion",
        subBody:
          "Additional rehearsal rooms and backstage facilities are introduced to support larger productions.",
      },
      {
        icon: 2014,
        imgSrc: timelineImg3,
        imgAlt:
          "Modern theater stage with upgraded lighting, sound systems, and professional stage equipment during the 2014 technology renovation.",
        subHeading: "Technology Upgrade",
        subBody:
          "Modern lighting, audio systems, and stage equipment are installed to enhance performance quality.",
      },
      {
        icon: 2021,
        imgSrc: timelineImg4,
        imgAlt:
          "Artists, musicians, dancers, and actors collaborating during workshops and rehearsals inside the performing arts venue in 2021.",
        subHeading: "Creative Community Hub",
        subBody:
          "The venue expands its educational programs through workshops, artist collaborations, and cultural initiatives.",
      },
      {
        icon: 2026,
        imgSrc: timelineImg5,
        imgAlt:
          "Contemporary theater lobby featuring digital ticketing, online venue booking services, and modern visitor technology in 2026.",
        subHeading: "Digital Transformation",
        subBody:
          "Online event management, ticket booking, and venue rental services are introduced to improve accessibility and visitor experience.",
      },
    ],
  },
  stats: {
    headings: "Statistic",
    style: "icon-card",
    bodyObj: [
      {
        icon: "500+",
        subHeading: "Audience Capacity",
        subBody:
          "Comfortable seating designed for performances of various scales.",
      },
      {
        icon: "120+",
        subHeading: "Events Every Year",
        subBody:
          "Hosting theatrical productions, concerts, dance performances, festivals, and cultural showcases.",
      },
      {
        icon: "40+",
        subHeading: "Creative Workshops",
        subBody:
          "Educational programs covering music, dance, theater, visual arts, and creative development.",
      },
      {
        icon: "15,000+",
        subHeading: "Annual Visitors",
        subBody:
          "Welcoming audiences, artists, students, and cultural enthusiasts throughout the year.",
      },
    ],
  },
  partners: {
    headings: "Our Partners",
    style: "icon",
    body: [
      "We proudly collaborate with cultural organizations, educational institutions, creative communities, government agencies, and independent artists to enrich the performing arts ecosystem and create meaningful experiences for audiences.",
    ],
    list: [
      "Bandung Arts Council",
      "West Java Cultural Network",
      "Creative Stage Collective",
      "Harmony Music Institute",
      "Nusantara Performing Arts Foundation",
      "Inspire Youth Community",
    ],
  },
  gallery: {
    headings: "Moments at Cultural Art Space",
    style: "image-list",
    body: [
      "Explore the vibrant atmosphere of performances, rehearsals, workshops, and cultural gatherings that bring creativity to life every day.",
    ],
    list: [],
  },
  cta: {
    headings: "Let's Create Something Extraordinary Together",
    style: "buttons",
    body: [
      "Whether you're planning a performance, organizing a workshop, or looking for the perfect venue, we are ready to support your creative journey.",
    ],
    listBtn: [
      {
        btnText: "Explore Events",
        link: "/events",
        style: "",
      },
      {
        btnText: "Rent a Venue",
        link: "/venues",
        style: "",
      },
    ],
  },
};
