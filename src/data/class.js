import classImg1 from "../assets/class-1.webp";
import classImg2 from "../assets/class-2.webp";
import classImg3 from "../assets/class-3.webp";
import classImg4 from "../assets/class-4.webp";
import classImg5 from "../assets/class-5.webp";
import classImg6 from "../assets/class-6.webp";
import classImage1 from "../assets/reg-class-1.webp";
import classImage2 from "../assets/reg-class-2.webp";
import classImage3 from "../assets/reg-class-3.webp";
import classImage4 from "../assets/reg-class-4.webp";
import classImage5 from "../assets/reg-class-5.webp";
import workshopImage1 from "../assets/workshop-1.webp";
import workshopImage2 from "../assets/workshop-2.webp";
import workshopImage3 from "../assets/workshop-3.webp";
import workshopImage4 from "../assets/workshop-4.webp";
import workshopImage5 from "../assets/workshop-5.webp";
import workshopImage6 from "../assets/workshop-6.webp";
import workshopImage7 from "../assets/workshop-7.webp";
import workshopImage8 from "../assets/workshop-8.webp";

export const classData = [
  {
    id: 0,
    title: "Contemporary Dance Class",
    imgSrc: classImg1,
    imgAlt: "People training for contemporary dance in a class",
    participants: "Teens & Young Adults",
    schedule: "Every Thursday",
    time: "6:30 – 8:30 PM",
    desc: "A modern dance class exploring contemporary movement techniques, body awareness, and creative expression inspired by both traditional and modern styles.",
  },
  {
    id: 1,
    title: "Theater Acting Class",
    imgSrc: classImg2,
    imgAlt: "People training for theatre acting in a class",
    participants: "Beginners",
    schedule: "Every Wednesday",
    time: "4:00 – 6:00 PM",
    desc: "An introductory acting class designed to build confidence, expression, and stage awareness.",
  },
  {
    id: 2,
    title: "Music Ensemble Practice",
    imgSrc: classImg3,
    imgAlt: "People training for music ensemble in a class",
    participants: "Youth & Adults",
    schedule: "Every Friday",
    time: "6:00 – 8:00 PM",
    desc: "A collaborative music program bringing together traditional and modern instruments in ensemble practice.",
  },
  {
    id: 3,
    title: "Traditional Dance Workshop",
    imgSrc: classImg4,
    imgAlt: "People training for traditional dance in a class",
    participants: "Teens & Adults",
    schedule: "Every Saturday",
    time: "09:00 – 11:00 AM",
    desc: "A regular dance workshop focusing on traditional movement techniques while encouraging creative exploration.",
  },
  {
    id: 4,
    title: "Traditional Music Workshop",
    imgSrc: classImg5,
    imgAlt: "People training for traditional music in a class",
    participants: "Teens & Adults",
    schedule: "Every Monday",
    time: "5:00 – 7:00 PM",
    desc: "A hands-on workshop focusing on traditional Indonesian music practices, introducing participants to rhythm, ensemble collaboration, and cultural context in a guided learning environment.",
  },
  {
    id: 5,
    title: "Children’s Art Class",
    imgSrc: classImg6,
    imgAlt: "Children learning arts in a class",
    participants: "Children (7–12 years old)",
    schedule: "Every Saturday",
    time: "10:00 – 12:00 PM",
    desc: "A creative art class designed for children to explore movement, music, and basic performance skills in a fun, safe, and supportive environment.",
  },
];

export const programs = [
  {
    id: 1,
    title: "Traditional Sundanese Dance",
    imgSrc: classImage1,
    imgAlt: "Students practicing traditional Sundanese dance",
    type: "regular",
    category: "Traditional Dance",
    organizer: "Sanggar Pusaka Sunda",
    organizerDesc:
      "A community-based arts group dedicated to preserving and teaching traditional Sundanese dance through regular training and cultural performances.",
    instructors: [
      { name: "Rina Kusumawardani", role: "Lead Instructor" },
      { name: "Asep Maulana", role: "Assistant Instructor" },
      { name: "Dewi Purnamasari", role: "Guest Instructor" },
    ],
    level: "Beginner",
    ageGroup: "12+",
    schedule: "Saturday",
    time: "09:00 AM - 11:00 AM",
    duration: "16 Sessions",
    price: "$65 / month",
    location: "Rehearsal Room",
    status: "Open",
    description:
      "Learn the beauty and philosophy of traditional Sundanese dance through structured weekly training, movement techniques, musical interpretation, and stage etiquette.",
    learningTopics: [
      {
        title: "Basic Sundanese Dance",
        description:
          "Introduction to basic posture, footwork, hand movements, and traditional movement vocabulary.",
      },
      {
        title: "Musical Interpretation",
        description:
          "Understanding rhythm and movement patterns in relation to traditional Sundanese music.",
      },
      {
        title: "Expression and Character",
        description:
          "Developing facial expression, body language, and character interpretation through traditional dance.",
      },
      {
        title: "Traditional Repertoire",
        description:
          "Learning selected Sundanese dance repertoire and understanding its structure and cultural context.",
      },
      {
        title: "Stage Preparation",
        description:
          "Introduction to stage etiquette, group coordination, and preparation for informal and formal performances.",
      },
    ],
  },
  {
    id: 2,
    title: "Traditional Gamelan Ensemble",
    imgSrc: classImage2,
    imgAlt: "Participants learning Sundanese gamelan",
    type: "regular",
    category: "Traditional Music",
    organizer: "Harmony Music Studio",
    organizerDesc:
      "A music community focused on traditional Indonesian ensemble performance, musical education, and collaborative practice.",
    instructors: [
      { name: "Agus Permana", role: "Lead Instructor" },
      { name: "Dadan Suhendar", role: "Ensemble Coach" },
      { name: "Maya Kartika", role: "Guest Instructor" },
    ],
    level: "Intermediate",
    ageGroup: "15+",
    schedule: "Wednesday",
    time: "06:30 PM - 08:30 PM",
    duration: "12 Sessions",
    price: "$55 / month",
    location: "Rehearsal Room",
    status: "Open",
    description:
      "Develop ensemble skills by learning traditional Sundanese gamelan repertoire, rhythm, coordination, and performance techniques.",
    learningTopics: [
      {
        title: "Introduction to Gamelan Instruments",
        description:
          "Learn the basic functions, playing techniques, and roles of instruments within a Sundanese gamelan ensemble.",
      },
      {
        title: "Rhythm and Musical Patterns",
        description:
          "Develop an understanding of rhythmic structures, recurring patterns, tempo, and musical cues.",
      },
      {
        title: "Ensemble Coordination",
        description:
          "Practice listening, timing, communication, and coordination between players during ensemble performance.",
      },
      {
        title: "Traditional Repertoire",
        description:
          "Study selected Sundanese musical pieces and explore their characteristic structures and performance styles.",
      },
      {
        title: "Performance Practice",
        description:
          "Build confidence through ensemble rehearsals and practical preparation for live performances.",
      },
    ],
  },
  {
    id: 3,
    title: "Children's Creative Arts",
    imgSrc: classImage3,
    imgAlt: "Children participating in creative arts activities",
    type: "regular",
    category: "Children's Arts",
    organizer: "Creative Kids Community",
    organizerDesc:
      "A creative learning community that introduces children to music, movement, storytelling, and artistic expression through engaging activities.",
    instructors: [
      { name: "Nadia Lestari", role: "Lead Instructor" },
      { name: "Fikri Ramadhan", role: "Creative Arts Instructor" },
      { name: "Salsa Putri", role: "Music & Movement Instructor" },
    ],
    level: "Beginner",
    ageGroup: "6–12",
    schedule: "Sunday",
    time: "10:00 AM - 12:00 PM",
    duration: "10 Sessions",
    price: "$45 / month",
    location: "Rehearsal Room",
    status: "Open",
    description:
      "A fun multidisciplinary class introducing children to music, movement, storytelling, creativity, and artistic expression.",
    learningTopics: [
      {
        title: "Creative Movement",
        description:
          "Explore body movement, coordination, rhythm, and simple creative exercises through playful activities.",
      },
      {
        title: "Music and Rhythm",
        description:
          "Introduce children to basic rhythm, musical patterns, singing, and simple percussion activities.",
      },
      {
        title: "Storytelling and Drama",
        description:
          "Develop imagination and communication through storytelling, role-play, and simple theatrical exercises.",
      },
      {
        title: "Visual Creativity",
        description:
          "Encourage artistic exploration through drawing, color, simple crafts, and visual storytelling.",
      },
      {
        title: "Collaborative Expression",
        description:
          "Build confidence, teamwork, and creative communication through group artistic activities.",
      },
    ],
  },
  {
    id: 4,
    title: "Contemporary Dance Fundamentals",
    imgSrc: classImage4,
    imgAlt: "Contemporary dance rehearsal",
    type: "regular",
    category: "Contemporary Dance",
    organizer: "Motion Studio",
    organizerDesc:
      "A dance-focused creative space offering movement training and contemporary dance programs for beginners and developing performers.",
    instructors: [
      { name: "Stephanie Wijaya", role: "Lead Instructor" },
      { name: "Kevin Pratama", role: "Movement Coach" },
      { name: "Nabila Rahma", role: "Guest Instructor" },
    ],
    level: "Beginner",
    ageGroup: "16+",
    schedule: "Monday",
    time: "07:00 PM - 09:00 PM",
    duration: "14 Sessions",
    price: "$70 / month",
    location: "Rehearsal Room",
    status: "Open",
    description:
      "Explore body awareness, improvisation, floor work, and expressive movement in a welcoming contemporary dance environment.",
    learningTopics: [
      {
        title: "Body Awareness",
        description:
          "Develop awareness of posture, balance, weight distribution, and individual movement patterns.",
      },
      {
        title: "Movement Fundamentals",
        description:
          "Practice foundational contemporary dance techniques, transitions, balance, and controlled movement.",
      },
      {
        title: "Floor Work",
        description:
          "Learn basic floor-based movement, weight transfer, rolling, and safe transitions between levels.",
      },
      {
        title: "Improvisation",
        description:
          "Explore spontaneous movement and develop confidence in responding to music, space, and physical impulses.",
      },
      {
        title: "Expression and Performance",
        description:
          "Use movement quality, dynamics, and body language to communicate ideas and emotions on stage.",
      },
    ],
  },
  {
    id: 5,
    title: "Theater Acting Essentials",
    imgSrc: classImage5,
    imgAlt: "Acting students practicing on stage",
    type: "regular",
    category: "Theater",
    organizer: "Teater Langkah",
    organizerDesc:
      "A theater community dedicated to developing young performers through acting practice, improvisation, stage performance, and collaborative productions.",
    instructors: [
      { name: "Budi Santoso", role: "Lead Instructor" },
      { name: "Mira Anggraini", role: "Acting Coach" },
      { name: "Raka Mahesa", role: "Guest Director" },
    ],
    level: "All Levels",
    ageGroup: "17+",
    schedule: "Friday",
    time: "06:30 PM - 09:00 PM",
    duration: "12 Sessions",
    price: "$60 / month",
    location: "Rehearsal Room",
    status: "Open",
    description:
      "Build confidence on stage through acting exercises, improvisation, character development, voice projection, and ensemble performance.",
    learningTopics: [
      {
        title: "Acting Fundamentals",
        description:
          "Explore basic acting principles, stage awareness, concentration, and physical presence.",
      },
      {
        title: "Voice and Projection",
        description:
          "Develop vocal clarity, projection, articulation, breathing, and expressive use of the voice.",
      },
      {
        title: "Character Development",
        description:
          "Learn techniques for understanding characters, motivations, relationships, and physical expression.",
      },
      {
        title: "Improvisation",
        description:
          "Practice spontaneous performance, scene building, active listening, and collaborative storytelling.",
      },
      {
        title: "Scene Work",
        description:
          "Apply acting techniques through selected scenes, partner work, ensemble exercises, and performance practice.",
      },
    ],
  },
  {
    id: 6,
    title: "The Art of Wayang Storytelling",
    imgSrc: workshopImage1,
    imgAlt: "Traditional wayang storytelling workshop",
    type: "workshop",
    category: "Traditional Arts",
    organizer: "Bandung Arts Community",
    organizerDesc:
      "A creative community connecting artists, performers, and cultural practitioners through workshops, discussions, and collaborative arts programs.",
    instructors: [
      { name: "Dedi Suherman", role: "Instructor" },
      { name: "Rani Kurniasih", role: "Guest Speaker" },
      { name: "Fajar Nugraha", role: "Moderator" },
    ],
    level: "Beginner",
    date: "2026-09-12T09:00:00",
    time: "09:00 AM - 04:00 PM",
    duration: "1 Day",
    location: "Auditorium",
    capacity: 80,
    filledCapacity: 75,
    price: "$20",
    status: "Registration Open",
    description:
      "Discover the storytelling techniques, symbolism, and performance traditions behind Indonesia's iconic wayang heritage.",
    learningTopics: [
      {
        id: 1,
        title: "Introduction to Wayang",
        description:
          "Understanding the history, characters, and cultural values behind traditional wayang performances.",
      },
      {
        id: 2,
        title: "Story Structure",
        description:
          "Learning how traditional stories are structured and adapted for stage performance.",
      },
      {
        id: 3,
        title: "Character and Voice",
        description:
          "Exploring character interpretation, narration, voice projection, and basic storytelling techniques.",
      },
      {
        id: 4,
        title: "Practical Storytelling",
        description:
          "Participants practice delivering a short wayang-inspired story using the techniques introduced during the workshop.",
      },
    ],
    facilities: [
      "Workshop materials",
      "Wayang demonstration props",
      "Practice space",
      "Certificate of participation",
    ],
    requirements: [
      "Notebook and pen",
      "No previous wayang experience required",
    ],
  },
  {
    id: 7,
    title: "Stage Lighting for Beginners",
    imgSrc: workshopImage2,
    imgAlt: "Professional stage lighting workshop",
    type: "workshop",
    category: "Stage Production",
    organizer: "Creative Stage Collective",
    organizerDesc:
      "A collective of stage practitioners sharing knowledge and practical experience in theater production, stage technology, and performance development.",
    instructors: [
      { name: "Arief Setiawan", role: "Instructor" },
      { name: "Maya Pratiwi", role: "Guest Speaker" },
      { name: "Rizal Firmansyah", role: "Moderator" },
    ],
    level: "Beginner",
    date: "2026-10-22T10:00:00",
    time: "10:00 AM - 03:00 PM",
    duration: "1 Day",
    location: "Auditorium",
    capacity: 40,
    filledCapacity: 30,
    price: "$25",
    status: "Registration Open",
    description:
      "Learn the fundamentals of theatrical lighting, color, positioning, and stage atmosphere through practical demonstrations.",
    learningTopics: [
      {
        id: 1,
        title: "Understanding Stage Lighting",
        description:
          "Introduction to basic lighting concepts, fixtures, intensity, color, direction, and stage visibility.",
      },
      {
        id: 2,
        title: "Lighting Positions",
        description:
          "Learning common lighting positions and how each position affects performers and the stage.",
      },
      {
        id: 3,
        title: "Basic Lighting Design",
        description:
          "Creating a simple lighting plan for a small performance using practical stage scenarios.",
      },
      {
        id: 4,
        title: "Hands-on Lighting Practice",
        description:
          "Participants operate basic lighting equipment and experiment with simple stage lighting setups.",
      },
    ],
    facilities: [
      "Stage lighting equipment",
      "Lighting console access",
      "Workshop handbook",
      "Practice session",
      "Certificate of participation",
    ],
    requirements: [
      "Notebook and pen",
      "Comfortable clothing",
      "No technical experience required",
    ],
  },
  {
    id: 8,
    title: "Traditional Costume & Makeup",
    imgSrc: workshopImage3,
    imgAlt: "Traditional performing arts costume workshop",
    type: "workshop",
    category: "Costume & Makeup",
    organizer: "West Java Cultural Network",
    organizerDesc:
      "A network that brings together cultural practitioners and creative communities to promote traditional arts, cultural knowledge, and creative collaboration across West Java.",
    instructors: [
      { name: "Sari Wulandari", role: "Instructor" },
      { name: "Dewi Maharani", role: "Cultural Practitioner" },
      { name: "Nanda Prakoso", role: "Moderator" },
    ],
    level: "Beginner",
    date: "2026-10-24T09:00:00",
    time: "09:00 AM - 01:00 PM",
    duration: "Half Day",
    location: "Rehearsal Room",
    capacity: 30,
    filledCapacity: 30,
    price: "$18",
    status: "Registration Closed",
    description:
      "Explore traditional costume styling and stage makeup techniques inspired by Sundanese performing arts.",
    learningTopics: [
      {
        id: 1,
        title: "Traditional Costume Overview",
        description:
          "Introduction to the meaning, structure, and visual characteristics of traditional performance costumes.",
      },
      {
        id: 2,
        title: "Costume Preparation",
        description:
          "Learning basic techniques for preparing, arranging, and wearing traditional performance costumes.",
      },
      {
        id: 3,
        title: "Stage Makeup Basics",
        description:
          "Understanding basic makeup techniques for stage visibility, character presentation, and performance lighting.",
      },
      {
        id: 4,
        title: "Complete Character Look",
        description:
          "Participants create a complete traditional performance look combining costume, accessories, and makeup.",
      },
    ],
    facilities: [
      "Basic makeup kit",
      "Costume accessories",
      "Practice materials",
      "Demonstration costumes",
      "Certificate of participation",
    ],
    requirements: [
      "Bring personal face towel",
      "Wear comfortable clothing",
      "All materials are provided",
    ],
  },
  {
    id: 9,
    title: "Music Arrangement for Traditional Ensemble",
    imgSrc: workshopImage4,
    imgAlt: "Traditional music arrangement workshop",
    type: "workshop",
    category: "Music",
    organizer: "Harmony Music Studio",
    organizerDesc:
      "A music community focused on developing musicians through ensemble practice, traditional music education, and collaborative musical projects.",
    instructors: [
      { name: "Agus Permana", role: "Instructor" },
      { name: "Rendra Kusuma", role: "Music Director" },
      { name: "Laras Wibisono", role: "Moderator" },
    ],
    level: "Intermediate",
    date: "2026-11-14T09:30:00",
    time: "09:30 AM - 04:30 PM",
    duration: "1 Day",
    location: "Rehearsal Room",
    capacity: 35,
    filledCapacity: 17,
    price: "$22",
    status: "Registration Open",
    description:
      "Learn how to arrange traditional melodies into modern ensemble performances while preserving their cultural character.",
    learningTopics: [
      {
        id: 1,
        title: "Traditional Ensemble Structure",
        description:
          "Understanding the roles of instruments and musical sections within a traditional ensemble.",
      },
      {
        id: 2,
        title: "Melody and Rhythm",
        description:
          "Exploring melodic patterns, rhythmic structures, and how instruments interact within an ensemble.",
      },
      {
        id: 3,
        title: "Arrangement Techniques",
        description:
          "Learning basic approaches to adapting traditional musical material for different ensemble formats.",
      },
      {
        id: 4,
        title: "Group Arrangement Practice",
        description:
          "Participants collaboratively develop and perform a short ensemble arrangement.",
      },
    ],
    facilities: [
      "Traditional instruments",
      "Music notation sheets",
      "Practice room",
      "Recording equipment",
      "Certificate of participation",
    ],
    requirements: [
      "Basic musical knowledge",
      "Participants may bring their own instrument",
    ],
  },
  {
    id: 10,
    title: "Expressive Movement & Physical Theater",
    imgSrc: workshopImage5,
    imgAlt: "Physical theater movement workshop",
    type: "workshop",
    category: "Theater",
    organizer: "Teater Langkah",
    organizerDesc:
      "A theater community dedicated to developing performers through acting, physical theater, stage exploration, and collaborative productions.",
    instructors: [
      { name: "Budi Santoso", role: "Instructor" },
      { name: "Nabila Rahma", role: "Movement Coach" },
      { name: "Fajar Mahesa", role: "Moderator" },
    ],
    level: "Beginner",
    date: "2026-12-05T10:00:00",
    time: "10:00 AM - 05:00 PM",
    duration: "1 Day",
    location: "Rehearsal Room",
    capacity: 25,
    filledCapacity: 21,
    price: "$30",
    status: "Registration Open",
    description:
      "An intensive workshop combining movement, improvisation, body awareness, and storytelling techniques for stage performance.",
    learningTopics: [
      {
        id: 1,
        title: "Body Awareness",
        description:
          "Exercises designed to improve awareness, balance, posture, and control of physical movement.",
      },
      {
        id: 2,
        title: "Movement and Emotion",
        description:
          "Exploring how physical gestures and movement can communicate emotions without dialogue.",
      },
      {
        id: 3,
        title: "Spatial Awareness",
        description:
          "Learning how performers use stage space, distance, direction, and group formations.",
      },
      {
        id: 4,
        title: "Physical Theater Practice",
        description:
          "Participants develop a short physical performance using movement and ensemble techniques.",
      },
    ],
    facilities: [
      "Open rehearsal space",
      "Practice mats",
      "Workshop handbook",
      "Performance props",
      "Certificate of participation",
    ],
    requirements: [
      "Comfortable movement clothing",
      "Bring drinking water",
      "No acting experience required",
    ],
  },
  {
    id: 11,
    title: "Introduction to Traditional Bamboo Music",
    imgSrc: workshopImage6,
    imgAlt: "Participants learning traditional bamboo music",
    type: "workshop",
    category: "Traditional Music",
    organizer: "Saung Angklung Community",
    organizerDesc:
      "A community dedicated to preserving and introducing Sundanese bamboo instruments through musical practice, cultural education, and community performances.",
    instructors: [
      { name: "Gilang Ramadhan", role: "Instructor" },
      { name: "Asep Hidayat", role: "Traditional Musician" },
      { name: "Rina Permatasari", role: "Moderator" },
    ],
    level: "Beginner",
    date: "2026-05-17T09:00:00",
    time: "09:00 AM - 03:30 PM",
    duration: "1 Day",
    location: "Rehearsal Room",
    capacity: 45,
    filledCapacity: 35,
    price: "$18",
    status: "Completed",
    description:
      "Participants explored the fundamentals of traditional bamboo instruments, ensemble coordination, and interactive performances rooted in Sundanese musical heritage.",
    learningTopics: [
      {
        id: 1,
        title: "Bamboo Instruments",
        description:
          "Introduction to the characteristics and cultural background of traditional bamboo instruments.",
      },
      {
        id: 2,
        title: "Basic Playing Techniques",
        description:
          "Learning basic techniques for producing sound and controlling rhythm on bamboo instruments.",
      },
      {
        id: 3,
        title: "Traditional Rhythms",
        description:
          "Practicing simple rhythmic patterns commonly used in traditional ensemble performance.",
      },
      {
        id: 4,
        title: "Ensemble Practice",
        description:
          "Participants perform a simple piece together as a small traditional bamboo ensemble.",
      },
    ],
    facilities: [
      "Bamboo instrument for practice",
      "Music sheets",
      "Practice space",
      "Certificate of participation",
    ],
    requirements: [
      "No previous musical experience required",
      "Instrument is provided during the workshop",
    ],
  },
  {
    id: 12,
    title: "Creative Stage Photography",
    imgSrc: workshopImage7,
    imgAlt: "Stage photography workshop session",
    type: "workshop",
    category: "Photography",
    organizer: "Bandung Creative Lens",
    organizerDesc:
      "A creative photography community exploring visual storytelling, stage photography, and documentation of performing arts and cultural activities.",
    instructors: [
      { name: "Kevin Wijaya", role: "Instructor" },
      { name: "Sinta Maharani", role: "Guest Photographer" },
      { name: "Dio Prakoso", role: "Moderator" },
    ],
    level: "Intermediate",
    date: "2026-06-28T10:00:00",
    time: "10:00 AM - 04:00 PM",
    duration: "1 Day",
    location: "Auditorium",
    capacity: 30,
    filledCapacity: 17,
    price: "$22",
    status: "Completed",
    description:
      "A practical workshop introducing techniques for photographing live performances, stage lighting, and performer movement in theater environments.",
    learningTopics: [
      {
        id: 1,
        title: "Understanding Stage Light",
        description:
          "Learning how stage lighting affects exposure, color, contrast, and image quality.",
      },
      {
        id: 2,
        title: "Capturing Movement",
        description:
          "Exploring shutter speed, timing, composition, and framing for dynamic stage performances.",
      },
      {
        id: 3,
        title: "Performance Photography",
        description:
          "Learning how to anticipate important moments and capture expressive performer images.",
      },
      {
        id: 4,
        title: "Practical Shooting Session",
        description:
          "Participants photograph a live stage rehearsal and review selected images together.",
      },
    ],
    facilities: [
      "Access to stage rehearsal",
      "Photography practice area",
      "Editing workstation",
      "Workshop materials",
      "Certificate of participation",
    ],
    requirements: [
      "Digital camera recommended",
      "Bring personal memory card",
      "Basic photography knowledge recommended",
    ],
  },
  {
    id: 13,
    title: "Designing Stage Props from Recycled Materials",
    imgSrc: workshopImage8,
    imgAlt: "Workshop creating stage props from recycled materials",
    type: "workshop",
    category: "Stage Design",
    organizer: "Creative Makers Collective",
    organizerDesc:
      "A community of makers and artists exploring practical approaches to creative production, sustainable materials, and hands-on stage and visual design.",
    instructors: [
      { name: "Maya Kirana", role: "Instructor" },
      { name: "Raka Pradipta", role: "Stage Designer" },
      { name: "Nadia Lestari", role: "Moderator" },
    ],
    level: "Beginner",
    date: "2026-07-19T09:30:00",
    time: "09:30 AM - 02:30 PM",
    duration: "1 Day",
    location: "Rehearsal Room",
    capacity: 35,
    filledCapacity: 32,
    price: "$15",
    status: "Completed",
    description:
      "Participants designed environmentally friendly stage properties using recycled materials while learning practical stage production techniques.",
    learningTopics: [
      {
        id: 1,
        title: "Prop Design Concepts",
        description:
          "Introduction to the role of props in storytelling, stage composition, and character development.",
      },
      {
        id: 2,
        title: "Material Exploration",
        description:
          "Learning how everyday recycled materials can be transformed into functional stage props.",
      },
      {
        id: 3,
        title: "Building Techniques",
        description:
          "Exploring basic cutting, joining, shaping, painting, and finishing techniques.",
      },
      {
        id: 4,
        title: "Final Prop Project",
        description:
          "Participants design and build a simple stage prop using recycled materials provided during the workshop.",
      },
    ],
    facilities: [
      "Recycled craft materials",
      "Basic hand tools",
      "Paint and finishing materials",
      "Workshop workspace",
      "Certificate of participation",
    ],
    requirements: [
      "Wear clothes suitable for crafting",
      "All basic materials are provided",
      "Participants may bring additional recyclable materials",
    ],
  },
];

export const programCategories = [
  { id: 0, name: "Weekly Class" },
  { id: 1, name: "Workshop" },
];
